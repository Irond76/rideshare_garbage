import sqlite3 from 'sqlite3';
import { Buffer } from 'buffer';
import { redirect } from '@sveltejs/kit';



function createAndConnectToDatabase () {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./src/data/rideshare.db', sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                reject(console.log(err.message));
            } else {
                console.log('Database Connected...');
            };
        });
        resolve(db);
    });
};
function runQuery(db, query, params = []) {
    return new Promise((resolve, reject) => {
        db.run(query, params, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve(this);
            }
        });
    });
};




export const actions = {
	default: async ({request}) => {
       
        const db = await createAndConnectToDatabase();
        const data = await request.formData();
        const city = data.get('city');
        const state = data.get('state');
        const country = data.get('country');
        const myImage = data.get('image');
        
        try {
            
            const arrayBuffer = await myImage.arrayBuffer();
            const imageBlob = Buffer.from(arrayBuffer);

            await runQuery(db, 'INSERT INTO offers (city, state, country, image) VALUES (?, ?, ?, ?)', [city, state, country, imageBlob]);
            console.log(`data added: ${city}, ${state}, ${country}, [image]`);
        } catch (err) {
            console.log('Error inserting user:', err.message);
        }
        throw redirect(303, '/main');
    }

};
    
