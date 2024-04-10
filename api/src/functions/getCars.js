const { app } = require('@azure/functions');
const fs = require('fs').promises;
const path = require('path');

const unparsedPath = path.resolve(__dirname,"cars.json");

app.http('getCars', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
    const jsonSet = await fs.readFile(unparsedPathFilePath, 'utf8');
    const parsedData = JSON.parse(jsonSet);
        
        return { 
            status:200,
            body:  JSON.stringify(parsedData)       
        };
    }
});
