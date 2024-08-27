import { connect } from "mongoose";
// import 'dotenv/config'
import dotenv from 'dotenv';
const ENV = process.argv[2];
dotenv.config({ path: ENV === 'prod' ? './.env.prod' : './.env.dev' })

const MONGO_URL = process.env.MONGO_URL

console.log(MONGO_URL);


// switch (process.env.NODE_ENV) {
//     case 'dev':
//         MONGO_URL = process.env.MONGO_LOCAL_URL;
//         console.log('mongo local');
//         break;
//     case 'prod':
//         MONGO_URL = process.env.MONGO_ATLAS_URL;
//         console.log('mongo prod');
//     default:
//         // MONGO_URL = process.env.MONGO_LOCAL_URL;
//         // console.log('mongo local');
//         break;
// }

try {
    await connect(MONGO_URL)
    console.log('conectado a la base de datos');
} catch (error) {
    console.log(error);
    
}
