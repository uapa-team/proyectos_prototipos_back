const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.sqlite3");

db.serialize(() => {
  db.run(
    "INSERT INTO videos (video_key, image_name, team_name)" +
      "VALUES ('3VZFpwlXKpg','demo.jpeg','Team Demo Test')"
  );
  db.run(
    "INSERT INTO videos (video_key, image_name, team_name)" +
      "VALUES ('3VZFpwlXKpg','demo2.jpg','Team Demo Test')"
  );
  db.run(
    "INSERT INTO videos (video_key, image_name, team_name)" +
      "VALUES ('3VZFpwlXKpg','demo3.jpg','Team Demo Test')"
  );
});
db.close();
