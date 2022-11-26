//uuid module
import * as mod from "https://deno.land/std@0.166.0/uuid/mod.ts";
const uid = mod.v5.generate;

console.log(uid);
////fs module

// import{readJson,writeJson} from 'https://deno.land/std/fs/mod.ts';


//const jsonObj = Deno.Command

//http module
import *as httpMod  from 'https://deno.land/std/http/server.ts';
const s = httpMod.serve((req:Request) => new Response('Hello world'), { port: 3000 });

console.log('Listening on port 3000');


