// https://developers.notion.com/docs/getting-started
import { Client } from '@notionhq/client';
// import  path  from 'path';
import * as dotenv from 'dotenv';
// const path = require('path');
// dotenv.config({ path: path.resolve(__dirname).includes('\\') ? path.resolve(__dirname, '.\\.env.local') : path.resolve(__dirname, '.\/.env.local') });
dotenv.config( { path: './.env.local' } );


const notion = new Client({ auth: process.env.NOTION_KEY });
console.log(notion)

const databaseId = process.env.NOTION_DATABASE_ID;

const addItem = async (text) => {
    try {
        const response = await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
              title: { 
                title: [
                  {
                    "text": {
                      "content": text
                    }
                  }
                ]
              }
            },
          })
        console.log(response)
        console.log("Success! Entry added.")
    } 
    catch (error) {
        console.error(error.body)
    }
}
    
// addItem('annotation!!!!!!!!!!!');