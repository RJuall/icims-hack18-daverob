import * as http from "http";
import * as https from "https";

export class APIRequest{
    private static readonly PORTS:{[protocol:string]: number} = {
        "http": 80, "https": 443
    };

    public static request(method:string, hostname:string, path:string, port:number=443):Promise<any>{
        return new Promise((resolve, reject) => {
            let options = {
                port,
                path,
                hostname,
                method
            };

            let req:http.ClientRequest = https.request(options, res => {
                let data:string = "";

                res.on("data", chunk => data += chunk);

                res.on("end", () => resolve(JSON.parse(data)));
            });

            req.on("error", err => reject(err));
        });
    }

    public static get(hostname:string, path:string):Promise<any>{
        return APIRequest.request("GET", hostname, path);
    }
}