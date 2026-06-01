import Fastify from "fastify";
import cors from "@fastify/cors";
import cachedData from "./sentences.json";

const app = Fastify({
    logger: true,
});

app.register(cors, {
    origin: true
});

const len: number = cachedData.length;

app.get("/", async (request, reply) => {
    return reply.send(cachedData[Math.floor(Math.random() * len)]);
});

app.get("/favicon.ico", async (request, reply) => {
    return reply.status(200).send();
});

export default app;