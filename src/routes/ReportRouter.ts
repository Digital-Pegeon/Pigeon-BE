import {ReportService} from "../services/ReportService";
import * as hapi from '@hapi/hapi'


const reportService = new ReportService();
const ReportRouter = [
    {
        method: 'GET',
        path: '/reports',
        handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
            return response.response({
                report: await reportService.findAllReport()
            })
        }
    },
    {
        method: 'POST',
        path: '/report',
        handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
            let report = request.payload
            return response.response({
                report: await reportService.createReport(report)
            })
        }
    },
    {
        method: 'GET',
        path: '/hashtagreport/{hashtag}',
        handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
            console.log(request.payload)
            let report = request.params
            return response.response({
                report: await reportService.findReportByHastag(report)
            })
        }
    }
]
export default ReportRouter