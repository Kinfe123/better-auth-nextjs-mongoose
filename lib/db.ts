import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/database");
export const db = client.db();
