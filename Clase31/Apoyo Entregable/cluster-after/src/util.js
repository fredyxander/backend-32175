import path from "path";
import {fileURLToPath} from "url";

const filename =fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

export default __dirname;