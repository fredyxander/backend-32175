import { serve } from "https://deno.land/std@0.178.0/http/server.ts";

const PORT = 8080;

const handler = (request:Request)=>{
    console.log(request)
    const body = "hello from server with deno and http";
    return new Response(body,{status:200});
};

await serve(handler,{port:PORT});