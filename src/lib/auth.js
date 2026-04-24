import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.DB_URI);//DB URL
const db = client.db('better-auth-2');//table name

export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),
    emailAndPassword: {
        enabled: true,
    },
});