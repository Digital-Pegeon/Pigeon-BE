import {createConnection} from "typeorm";
import {Creator} from "../entities/Creator";
import {Content} from "../entities/Content";
import {Report} from "../entities/Report";
import {Serial} from "../entities/Serial";
import {AdminAccount} from "../entities/Admin";


async function createDbConnection(){
    const connection = await createConnection(
        {
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "amanullah",
            database: "dkey",
            entities: [
                Creator,
                Content,
                Report,
                Serial,
                //AdminAccount,
            ],
            synchronize: true,
            logging: true
            // type : process.env.DB_DRIVER,
            // host : process.env.DB_HOST,
            // port : process.env.DB_PORT,
            // username : process.env.DB_USERNAME,
            // password : process.env.DB_PASSWORD,
            // database : process.env.DB_NAME,
            // entities : [
            //     Creator,
            //     Content,
            //     Report,
            //     Serial,
            //     //AdminAccount,
            // ],
            // synchronize : true,
            // logging : true
        }
    )
    return connection
}
export default createDbConnection;











