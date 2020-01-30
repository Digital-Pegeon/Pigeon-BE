import * as dotenv from 'dotenv';
import { dirname, resolve } from 'path';

export default function configure(){
    if(process.env.NODE_ENV === 'test'){
        dotenv.config({path:resolve('test.env')})
    }else{
        dotenv.config();
    }

    if(!process.env.APP_NAME){
        console.error('.env not found');
        process.exit(1);
    }
    process.env.BASE_PATH = dirname(resolve('index.ts'));
}