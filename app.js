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
app.get("/videos", (_, res) => {
  try {
    db.all("SELECT * FROM videos", (err, rows) => {
      if (err) {
        res.json({ error: err });
        return;
      }
      res.json({ videos: rows });
      return;
    });
  } catch (err) {
    res.json({ error: err });
    return;
  }
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
