const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.sqlite3");

db.serialize(() => {
  db.run("DROP TABLE IF EXISTS videos");
  db.run(
    "CREATE TABLE videos (" +
      "video_key VARCHAR(255) PRIMARY KEY, " +
      "team_name VARCHAR(255), " +
      "poster_url VARCHAR(255)," +
      "description VARCHAR(2550)," +
      "subject VARCHAR(255))",
    (_, err) => {
      if (err) console.error(err);
    }
  );
  db.run("DROP TABLE IF EXISTS comments");
  db.run(
    "CREATE TABLE comments (id INTEGER PRIMARY KEY AUTOINCREMENT, " +
      "video_key VARCHAR(255)," +
      "full_name VARCHAR(255), " +
      "comment VARCHAR(2550), " +
      "date VARCHAR(10))",
    (_, err) => {
      if (err) console.error(err);
    }
  );
  db.run("DROP TABLE IF EXISTS responses");
  db.run(
    "CREATE TABLE responses (id INTEGER PRIMARY KEY AUTOINCREMENT, " +
      "full_name VARCHAR(255), " +
      "response VARCHAR(2550), " +
      "date VARCHAR(255), " +
      "comment_id INTEGER)",
    (_, err) => {
      if (err) console.error(err);
    }
  );
});
db.close();
