const { app } = require('@azure/functions');
const fs = require('fs').promises;
const path = require('path');

const unparsedPath = path.resolve(__dirname,"cars.json");

app.http('removeCar', {
    methods: ['DELETE'],
    authLevel: `cars/{carID}`,
    handler: async (request, context) => {
        const jsonSet = await fs.readFile(unparsedPath, "utf8");
        
        let carList = JSON.parse(jsonSet)
        carID = request.params.carID
        carList.splice(carID, 1)
        
        const out = JSON.stringify(carList)
        await fs.writeFile(unparsedPath,out,"utf-8")
        return {
            status:200,
             body: out
        };
    }
});
