import {ContentService} from "../services/ContentService"
import * as hapi from "@hapi/hapi";

const contentService = new ContentService();
const ContentRouter = [
    {
        method: "GET",
        path: "/contents",
        handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
            return response.response({
                content: await contentService.findAllContent(),
            })
        }
    },
    {
        method: "POST",
        path: "/content",
        handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
            let content = request.payload;
            content = await contentService.createContent(content);
            return response.response({
                content
            }).code(201);
        }
    },
    {
        method: "PUT",
        path: "/content",
        handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
            let content = request.payload;
            content = await contentService.updateContent(content);
            return response.response({
                content
            }).code(201);
        }
    },
    {
        method: "GET",
        path: `/content/{idContent}`,
        handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
            let content = request.params;
            return response.response({
                content: await contentService.findById(content),

            })
        }
    },
    {
        method: "GET",
        path: `/title/{title}`,
        handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
            let content = request.params;
            return response.response({
                content: await contentService.findBYTitle(content),
            })
        }
    },
];
export default ContentRouter;

