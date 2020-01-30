import {CreatorService} from '../services/CreatorService';
import * as hapi from '@hapi/hapi';

const creatorService = new CreatorService();
const CreatorRouter = [
    {
        method: 'GET',
        path: '/creators',
        handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
            return response.response({
                creator: await creatorService.findAllCreator()
            })
        }
    },
    {
        method: 'POST',
        path: '/creator',
        handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
            let creator = request.payload
            return response.response({
                creator: await creatorService.createCreator(creator)
            })
        }
    },
    {
        method: 'GET',
        path: '/creatorid/{id}',
        handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
            let creator = request.params
            return response.response({
                creator: await creatorService.createCreator(creator)
            })

        }
    },
    {
        method: 'GET',
        path: '/creatorname/{name}',
        handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
            let creator = request.params
            return response.response({
                creator : await creatorService.findCreatorByName(creator)
            })
        }
    },
    {
        method: 'PUT',
        path: '/creator',
        handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
            let creator = request.payload
            return response.response({
                creator: await creatorService.updateCreator(creator)
            })
        }
    }
];

export default CreatorRouter;
