import Client from "coinbase/lib/Client.js";
import { getAuth } from "./config-service";

let auth = getAuth();

const client = new Client({
    'apiKey': auth.COINBASE_API_KEY,
    'apiSecret': auth.COINBASE_API_SECRET,
    'strictSSL': false,
});

export { client }
