const { Pool } = require('pg');

/*
this is a link to eli's elephantSQL. it would be better practice to store the db key in the .env
file and access it via process.env.whateryouwanttonameyourkey and build a string like so: 

const PG_URI = 'postgres://' += process.env.whateveryouwanttonameyourkey += '@raja.db.elephantsql.com:5432/mowfpguv'

*/

const PG_URI = 'postgres://mowfpguv:mVDfILFuxpfO_uZrMEcOj38C324BYU39@raja.db.elephantsql.com:5432/mowfpguv'

const pool = new Pool({
  connectionString: PG_URI
});
// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/images/schema.png?raw=true
// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};