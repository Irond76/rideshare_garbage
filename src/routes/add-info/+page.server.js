import sqlite3 from 'sqlite3';
import { Buffer } from 'buffer';
import { redirect } from '@sveltejs/kit';



async function createAndConnectToDatabase () {
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
async function runQuery(db, query, params = []) {
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
        const city = await data.get('city');
        const state = await data.get('state');
        const country = await data.get('country');
        const myImage = await data.get('image');
        
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
    
