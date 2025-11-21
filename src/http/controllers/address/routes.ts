import { FastifyInstance } from "fastify";
import { findAddress } from "./find-address";
import { create } from "./create";

export async function addressRoutes(app: FastifyInstance){
    app.post('/address', create);
    app.get('/address/person/:personId', findAddress)
}