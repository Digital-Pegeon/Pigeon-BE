import {getRepository} from "typeorm";
import {Serial} from "../entities/Serial";

export class SerialService{
    serialRepository(){
        return getRepository(Serial)
    }

    async findAllSerial(){
        return await this.serialRepository().find()
    }

    async createSerial(serial : Serial){
        return await this.serialRepository().save(serial)
    }

    async findSerialById(serial: Serial){
        return await this.serialRepository().findOne(serial)
    }

    async updateSerial(serial: Serial){
        let serialId = await this.findSerialById(serial.idSerial)
        this.serialRepository().merge(serial, serialId)
        return await this.serialRepository().save(serial)
    }
}