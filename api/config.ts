import path from "path";
import { configDotenv } from 'dotenv';
import {CorsOptions} from "cors";

const envFile = process.env['NODE_ENV']
    ? `.${process.env['NODE_ENV']}.env`
    : '.env';


configDotenv({ path: envFile });

const rootPath  = __dirname;

const corsWhitelist = [
    'http://localhost:5173',
    'http://localhost:5183',
];

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (!origin || corsWhitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};

const config =  {
    port: process.env.PORT || 8000,
    rootPath,
    publicPath: path.join(rootPath, 'public'),
    corsOptions,
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      secretId: process.env.GOOGLE_SECRET_ID,
    },
    db: process.env.MONGO_DB_URL ||  'mongodb://localhost:27018/shop',
};


export default config;