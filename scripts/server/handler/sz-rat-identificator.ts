import { Response } from "express";
import { useEffect } from "react";
import { RequestHandler } from "express-serve-static-core";

const STD_RESPONSE_BODY = "__SZRAT_SERVER__";
export default function useSZRatIdentificator():RequestHandler{
    return (req,res)=>{
        res.send(STD_RESPONSE_BODY);
    }
}