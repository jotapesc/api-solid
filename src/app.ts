import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

export const app = fastify();
export const prisma = new PrismaClient();

prisma.user.create({
  data: {
    name: "Kadu",
    email: "scotthopkins666@gmail.com",
  },
});
