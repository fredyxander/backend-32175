import { format } from "https://deno.land/std@0.181.0/datetime/mod.ts";

const today = format(new Date(),"MM-dd-yyyy hh:mm a");
console.log(today);