const {MongoClient} = require('mongodb');

async function main(){

    const uri = 'mongodb+srv://paiged:<G2m2YxdGCOkBbFUY>@cluster0.9jk8vwf.mongodb.net/?retryWrites=true&w=majority';

    const client = new MongoClient(uri);

    try{
       await client.connect(); 

       await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally{
        await client.close();
    }
    
}

main().catch(console.error);

async function listDatabases(client) {
   const databasesList = await client.db().admin().listDatabases();

   console.log("Databases:");
   databasesList.dabases.forEach(db => {
    console.log(`- ${db.name}`);
   });
}