import mongoose from "mongoose";

type dbCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const mongoGlobal = global as typeof globalThis & {
  mongoose: dbCache;
};

const MONGODB_URI = process.env.DATABASE_URL as string;

if (!MONGODB_URI) {
  throw new Error("Please define the DATABASE_URL environment variable");
}

const cached = mongoGlobal.mongoose ?? { conn: null, promise: null };
mongoGlobal.mongoose = cached;
async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
const conn = await dbConnect();
const db = conn.connection.db;
export { db };
