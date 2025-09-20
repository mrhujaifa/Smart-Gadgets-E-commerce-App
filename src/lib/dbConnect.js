// src/lib/dbConnect.js
import { MongoClient } from "mongodb";

// তোমার MongoDB কানেকশন লিংক (.env.local এ থাকবে)
const uri = process.env.MONGO_DB_URI;
const dbName = process.env.DB_NAME;

// client আর db cache করার জন্য global variable ব্যবহার
let client;
let db;

export async function dbConnect() {
  if (db) {
    // যদি আগেই connect হয়ে থাকে, তবে direct সেই db return করবে
    return db;
  }

  // নতুন client বানাও
  client = new MongoClient(uri);
  await client.connect(); // MongoDB তে connect হও
  db = client.db(dbName); // নির্দিষ্ট database select করো

  return db;
}
