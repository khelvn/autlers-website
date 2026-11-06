import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const args=process.argv.slice(2);const port=Number(args[args.indexOf('--port')+1])||5173;
const root=path.resolve('dist');
http.createServer(async(req,res)=>{try{let name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(name.endsWith('/'))name+='index.html';const file=path.resolve(root,'.'+name);if(!file.startsWith(root+path.sep))throw Error();const bytes=await readFile(file);const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.png':'image/png'};res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(bytes);}catch{res.writeHead(404);res.end('Not found');}}).listen(port,'0.0.0.0',()=>console.log(`Serving on ${port}`));
