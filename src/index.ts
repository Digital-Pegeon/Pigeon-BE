import * as hapi from 'hapi';
import configure from './config';
import createDbConnection from "./database/Connection";
import routes from "./routes/Index"

process.on('unhandledRejection', (error)=>{
    console.error(error);
    process.exit(1);
});

async function server(){
    configure();
    const connection = await createDbConnection();
    const server : hapi.Server = new hapi.Server({
        port: process.env.APP_PORT,
        host:process.env.APP_HOST,
    });
    server.route(routes)
    if(connection.isConnected){
        await server.start();
        console.log(`DB name ${process.env.DB_NAME}`)
        console.log(`Server ${process.env.APP_NAME} running on ${process.env.APP_PORT}`)
    }
    return server.listener;
}

server();