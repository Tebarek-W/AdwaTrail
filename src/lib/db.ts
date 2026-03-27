import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

// Strip sslmode=require from the parsed connection string so it doesn't override our manual 'ssl' object
const connectionString = `${process.env.DATABASE_URL}`.replace("?sslmode=require", "");

const prismaClientSingleton = () => {
  const pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false }, // Supabase pooler requires this locally and in prod
  });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
