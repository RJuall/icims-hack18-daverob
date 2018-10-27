import { Request, Response } from "express";
import  { fetchFromTwitter } from "twitter-api-ts";

export class TwitterRoute{
    public static get(req:Request, res:Response){
        fetchFromTwitter();
    }
}