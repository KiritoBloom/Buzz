// route.ts
import { NextApiRequest, NextApiResponse } from "next";
import authHandler from "./auth-config";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await authHandler(req, res);
}
