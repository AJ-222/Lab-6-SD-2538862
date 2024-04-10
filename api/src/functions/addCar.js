const { app } = require('@azure/functions');
const fs = require('fs').promises;
const path = require('path');
const unparsedPath = path.resolve(__dirname,'cars.json');


app.http('addCar', {
    methods: ['POST'],
    handler: async (request, context) => {
        const addedCar = await request.json();
        const jsonSet = await fs.readFile(unparsedPath, 'utf8');
        const parsedData = JSON.parse(jsonSet);
        parsedData.push(addedCar)

        const out = JSON.stringify(parsedData);
        await fs.writeFile(unparsedPath, out, "utf-8");
        return { 
            status: 200, 
            body: "Added car"
         };
    }
});

