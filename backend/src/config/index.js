import { configDev } from "./dev.js";
import { configProd } from "./prod.js";

let config;

if (process.env.NODE_ENV === 'dev') {
    config = configDev;
}
if (process.env.NODE_ENV === 'prod') {
    config = configProd;
}

export { config };