// import settings from "./settings";
// const LdapAuth = require("ldapauth-fork");
// const Promise = require("promise");
// const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.sqlite3");
app = require("express")();
app.use(require("body-parser").json());
app.use(require("cors")());
app.get("/", (req, res) => {
  res.json({ ok: "App is runnig" });
});
app.get("/proyectos_prototipos_api/videos", (_, res) => {
  try {
    db.all("SELECT * FROM videos", (err, rows) => {
      if (err) {
        res.status(500).json({ error: err });
        return;
      }
      res.json({ videos: rows });
      return;
    });
  } catch (err) {
    res.status(500).json({ error: err });
    return;
  }
});
app.get("/proyectos_prototipos_api/comments/:video_key", (req, res) => {
  try {
    db.all(
      `SELECT * FROM comments WHERE video_key = '${req.params.video_key}'`,
      (err, rows) => {
        if (err) {
          res.status(500).json({ error: err });
          return;
        }
        try {
          db.get(
            `SELECT team_name, description FROM videos WHERE video_key = '${req.params.video_key}'`,
            (err, result) => {
              if (err) {
                res.status(500).json({ error: err });
                return;
              }
              res.json({ ...result, comments: rows });
            }
          );
        } catch (err) {
          res.status(500).json({ error: err });
          return;
        }
      }
    );
  } catch (err) {
    res.status(500).json({ error: err });
    return;
  }
});
app.post("/proyectos_prototipos_api/comment/:video_key", (req, res) => {
  if (!req.params.video_key || !req.body.full_name || !req.body.comment) {
    res.status(400).json({ error: "Bad request" });
    return;
  }
  var date;
  try {
    fetch("http://worldtimeapi.org/api/timezone/America/Bogota")
      .then((r) => r.json())
      .then((r) => (date = r.datetime.split("T")[0]));
    date = `${date.substring(8, 10)}-${date.substring(5, 7)}-${date.substring(
      0,
      4
    )}`;
  } catch (err) {
    date = new Date().toISOString().slice(0, 10);
    date = `${date.substring(8, 10)}-${date.substring(5, 7)}-${date.substring(
      0,
      4
    )}`;
  }
  function titleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  try {
    db.run(
      `INSERT INTO comments (video_key, full_name, comment, date) ` +
        `VALUES ('${req.params.video_key}', '${titleCase(
          req.body.full_name
        )}', '${
          req.body.comment[0].toUpperCase() +
          req.body.comment.substr(1, req.body.comment.lenght)
        }', '${date}')`,
      (err, _) => {
        if (err) {
          res.status(500).json({ error: err });
          return;
        }
        try {
          db.get(
            `SELECT * FROM comments WHERE video_key = '${req.params.video_key}' and ` +
              ` full_name = '${titleCase(
                req.body.full_name
              )}' and date = '${date}' ORDER BY id DESC LIMIT 1`,
            (err, inserted) => {
              if (err) {
                res.status(500).json({ error: err });
                return;
              }
              res.json({ inserted: inserted });
            }
          );
        } catch (err) {
          res.status(500).json({ error: err });
          return;
        }
      }
    );
  } catch (err) {
    res.status(500).json({ error: err });
    return;
  }
});
app.get("/proyectos_prototipos_api/responses/:id", (req, res) => {
  try {
    db.all(
      `SELECT * FROM responses WHERE comment_id = '${req.params.id}'`,
      (err, rows) => {
        if (err) {
          res.status(500).json({ error: err });
          return;
        }
        res.json({ responses: rows });
      }
    );
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
app.post("/proyectos_prototipos_api/respond/:comment_id", (req, res) => {
  if (!req.body.full_name || !req.body.response || !req.params.comment_id) {
    res.status(400).json({ error: "Bad Request" });
    return;
  }
  var date;
  try {
    fetch("http://worldtimeapi.org/api/timezone/America/Bogota")
      .then((r) => r.json())
      .then((r) => (date = r.datetime.split("T")[0]));
    date = `${date.substring(8, 10)}-${date.substring(5, 7)}-${date.substring(
      0,
      4
    )}`;
  } catch (err) {
    date = new Date().toISOString().slice(0, 10);
    date = `${date.substring(8, 10)}-${date.substring(5, 7)}-${date.substring(
      0,
      4
    )}`;
  }
  function titleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  try {
    db.run(
      `INSERT INTO responses (full_name, response, date, comment_id) ` +
        `VALUES ('${titleCase(req.body.full_name)}', '${
          req.body.response[0].toUpperCase() +
          req.body.response.substr(1, req.body.response.lenght)
        }', '${date}', ${req.params.comment_id})`,
      (err, _) => {
        if (err) {
          res.status(500).json({ error: err });
          return;
        }
        try {
          db.get(
            `SELECT * FROM responses WHERE comment_id = '${req.params.comment_id}' and ` +
              ` full_name = '${titleCase(
                req.body.full_name
              )}' and date = '${date}' ORDER BY id DESC LIMIT 1`,
            (err, inserted) => {
              if (err) {
                res.status(500).json({ err: err });
                return;
              }
              res.json({ inserted: inserted });
            }
          );
        } catch (err) {
          res.status(500).json({ err: err });
          return;
        }
      }
    );
  } catch (err) {
    res.status(500).json({ err: err });
  }
});
const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
