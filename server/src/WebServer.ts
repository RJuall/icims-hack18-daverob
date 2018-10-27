import * as http from "http";
import * as express from "express";

export class WebServer{
    private _app:express.Application;
    private _httpServer:http.Server;

    constructor(){
        this._app = express().use(express.static(`${__dirname}/../../web/build`));
        this._httpServer = http.createServer(this._app);

        this.createRoutes();
        this.init();
    }

    private createRoutes():void{
        this._app.get("", (req, res) => res.sendFile("index.html"));
    }

    private init():void{
        let port:number = parseInt(process.env.PORT) || 8080;

        this._httpServer.listen(port, () => {
            console.log(`Http server listening on port ${port}.`);
        });
    }
}

if(require.main === module){
    new WebServer();
}