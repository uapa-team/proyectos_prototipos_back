const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.sqlite3");

db.serialize(() => {
  db.run(
    "INSERT INTO videos (video_key, team_name, description)" +
      "VALUES ('3VZFpwlXKpg','Team Demo Test', 'Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto. Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto.')"
  );
  db.run(
    "INSERT INTO videos (video_key, team_name, description)" +
      "VALUES ('Bey4XXJAqS8','Team Demo Test', 'Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto. Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto.')"
  );
  db.run(
    "INSERT INTO videos (video_key, team_name, description)" +
      "VALUES ('mezjHkf-WsQ','Team Demo Test', 'Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto. Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto.')"
  );
  db.run(
    "INSERT INTO videos (video_key, team_name, description)" +
      "VALUES ('obOEEYSiA_w','Team Demo Test', 'Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto. Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto.')"
  );
  db.run(
    "INSERT INTO videos (video_key, team_name, description)" +
      "VALUES ('ezJYJu8-6pw','Team Demo Test', 'Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto. Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto.')"
  );
  db.run(
    "INSERT INTO videos (video_key, team_name, description)" +
      "VALUES ('2MpUj-Aua48','Team Demo Test', 'Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto. Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto.')"
  );
  db.run(
    "INSERT INTO videos (video_key, team_name, description)" +
      "VALUES ('xcJtL7QggTI','Team Demo Test', 'Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto. Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto.')"
  );
  db.run(
    "INSERT INTO videos (video_key, team_name, description)" +
      "VALUES ('QF7FSDpFYSs','Team Demo Test', 'Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto. Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto.')"
  );
  db.run(
    "INSERT INTO videos (video_key, team_name, description)" +
      "VALUES ('6xfA6BKFVvs','Team Demo Test', 'Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto. Este es un equipo de pruebas, solo es un ejemplo, por favor no leas esto.')"
  );
  db.run(
    "INSERT INTO comments (video_key, full_name, comment, date) " +
      "VALUES ('3VZFpwlXKpg', 'Tatiana Moreno', 'Me encantó su prototipo, chicos. Sigan así!', '30-05-2020')"
  );
  db.run(
    "INSERT INTO comments (video_key, full_name, comment, date) " +
      "VALUES ('3VZFpwlXKpg', 'Daniel Escobar', 'Me encantó su prototipo, chicos. Sigan así!', '29-05-2020')"
  );
  db.run(
    "INSERT INTO comments (video_key, full_name, comment, date) " +
      "VALUES ('3VZFpwlXKpg', 'Marcela Vega', 'Me encantó su prototipo, chicos. Sigan así!', '28-05-2020')"
  );
});
db.close();
