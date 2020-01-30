import {getRepository} from "typeorm";
import {Creator} from "../entities/Creator";

export class CreatorService {
    creatorRepository(){
        return getRepository(Creator);
    }

    async findAllCreator(){
        return await this.creatorRepository().find();
    }

    async createCreator(creator: Creator){
        return await this.creatorRepository().save(creator);
    }

    async findCreatorById(creator: Creator){
        return await this.creatorRepository().findOne(creator);
    }

    async findCreatorByName(creator: Creator){
        return await this.creatorRepository().findOne(creator);
    }
    async updateCreator(creator: Creator){
        let creatorId = await this.findCreatorById(creator.username)
        this.creatorRepository().merge(creatorId, creator)
        return await this.creatorRepository().save(creator)
    }
}
