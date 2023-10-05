// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { makeConnectionToDb } from '@/utils/mongoDbConnection';
import { userModel } from '@/models/userModel';

type Data = {
    user:string|undefined|string[];
 
    }


export default async function handler(

  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   await  makeConnectionToDb()
   const Users=await userModel.find();
  res.status(200).json({ user:req.query.test })
}