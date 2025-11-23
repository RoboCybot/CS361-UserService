import Database from "better-sqlite3";

const db = new Database("./db/mydb.db");

try {
  db.prepare(
    "CREATE TABLE IF NOT EXISTS users (userId INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE NOT NULL, password TEXT NOT NULL, phoneNumber TEXT NOT NULL, avatarURL TEXT DEFAULT 'https://cdn-icons-png.flaticon.com/512/149/149071.png', userBio TEXT , mfaToken TEXT, createdAt TEXT DEFAULT CURRENT_TIMESTAMP, updatedAt TEXT DEFAULT CURRENT_TIMESTAMP )"
  ).run();

} catch (error) {
  console.error("Error creating users table:", error);
}

export default db;
