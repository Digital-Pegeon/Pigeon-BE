import {getRepository} from "typeorm";
import {Content} from "../entities/Content";

export class ContentService {
    contentRepository(){
        return getRepository(Content);
    }
    async findAllContent(){
        return await this.contentRepository().find();
    }
    async createContent(content: Content){
        return await this.contentRepository().save(content);
    }
    async findById(content: Content){
        return await this.contentRepository().findOne(content);
    }
    async findBYTitle(content: Content){
        console.log(content, "ini apaan sih")
        return await this.contentRepository().findOne(content);
    }
    async updateContent(content: Content){
        let contentId = await this.findById(content.idContent)
         this.contentRepository().merge(contentId, content)
        return await this.contentRepository().save(content)
    }
}
