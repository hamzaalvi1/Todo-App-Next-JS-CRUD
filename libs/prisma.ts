import { PrismaClient } from "@prisma/client";

// Declare the global variable if it doesn't exist
declare global {
  var prisma: PrismaClient | undefined;
}

// Create a function to initialize the Prisma client
const initializePrisma = () => {
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    return global.prisma;
  }
};

// Initialize the Prisma client
const prismaInstance = initializePrisma();

export default prismaInstance;
