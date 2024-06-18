import sqlite3 from 'sqlite3';


function createAndConnectToDatabase () {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./src/data/rideshare.db', sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                reject(console.log(err.message));
            } else {
                console.log('Database Created And Connected...');
            };
        });
        resolve(db);
    });
};

function createTableIfNotExist(db, query, params = []) {
    return new Promise((resolve, reject) => {
        db.run(query, params, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve(this);
                console.log('Offers Table created...')
            }
        });
    });
}



export async function load() {
    const db = await createAndConnectToDatabase();
    await createTableIfNotExist(db, `
        CREATE TABLE IF NOT EXISTS offers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            city STRING  NOT NULL,
            state STRING  NOT NULL,
            country STRING NOT NULL,
            image STRING NOT NULL
        )
    `);
};