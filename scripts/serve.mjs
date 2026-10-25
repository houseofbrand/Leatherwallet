import http from "node:http";
import {readFile, stat} from "node:fs/promises";
import {join, extname} from "node:path";
import {fileURLToPath} from "node:url";
const root=fileURLToPath(new URL("../dist/",import.meta.url)); const port=process.env.PORT||4173;
const types={".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".xml":"application/xml; charset=utf-8",".txt":"text/plain; charset=utf-8"};
http.createServer(async(req,res)=>{try{const u=new URL(req.url,"http://localhost"); let p=join(root,decodeURIComponent(u.pathname)); if((await stat(p)).isDirectory())p=join(p,"index.html"); const data=await readFile(p);res.writeHead(200,{"Content-Type":types[extname(p)]||"application/octet-stream","Cache-Control":"no-cache"});res.end(data)}catch{res.writeHead(404,{"Content-Type":"text/plain"});res.end("Not found")}}).listen(port,()=>console.log(`Local: http://localhost:${port}`));
