import { Client } from 'pg';

const pool = new Client({
    host: "localhost",
    port: 5432,
    user: "",
    password: "",
    database: "api",
});

pool.connect().then(()=>{
    console.log("connected to database");
});

export default Client;
