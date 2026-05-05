import type { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { registerUseCase } from "@/service/register.js";

export async function register(req: FastifyRequest, rep: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { name, email, password } = registerBodySchema.parse(req.body);

  try {
    await registerUseCase({
      name,
      email,
      password,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return rep.status(409).send();
  }

  return rep.status(201).send();
}
