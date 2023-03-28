import { config } from "https://deno.land/x/dotenv/mod.ts";

console.log(config());
// config().PORT
const {PORT,MONGO_URL} = config();
console.log("puerto: ", PORT);