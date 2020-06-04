const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.sqlite3");

db.serialize(() => {
  db.run(
    "INSERT INTO videos (video_key, team_name, description)" +
      "VALUES ('3VZFpwlXKpg','Globber Trotters', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')"
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
      "VALUES ('3VZFpwlXKpg', 'Tatiana Moreno', '¿Qué material usaron para elaborar el prototipo?', '30-05-2020')"
  );
  db.run(
    "INSERT INTO comments (video_key, full_name, comment, date) " +
      "VALUES ('3VZFpwlXKpg', 'Marcela Vega', '¿Cómo garantizan la sostenibilidad de la compañía a largo plazo?', '28-05-2020')"
  );
  db.run(
    "INSERT INTO comments (video_key, full_name, comment, date) " +
      "VALUES ('3VZFpwlXKpg', 'Daniel Escobar', 'Me encantó su prototipo, chicos. Sigan así!', '29-05-2020')"
  );
  db.run(
    "INSERT INTO responses (full_name, response, date, comment_id)" +
      " VALUES('Antonio Suarez', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', '03-06-2020', 1)"
  );
  db.run(
    "INSERT INTO responses (full_name, response, date, comment_id)" +
      " VALUES('Angel Corredor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', '03-06-20200', 1)"
  );
  db.run(
    "INSERT INTO responses (full_name, response, date, comment_id)" +
      " VALUES('Nicolás Gómez', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', '03-06-20200', 1)"
  );
  db.run(
    "INSERT INTO responses (full_name, response, date, comment_id)" +
      " VALUES('Daniel Escobar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', '03-06-20200', 2)"
  );
  db.run(
    "INSERT INTO responses (full_name, response, date, comment_id)" +
      " VALUES('Daniel Escobar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', '03-06-20200', 2)"
  );
  db.run(
    "INSERT INTO responses (full_name, response, date, comment_id)" +
      " VALUES('Daniel Escobar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', '03-06-20200', 2)"
  );
});
db.close();
