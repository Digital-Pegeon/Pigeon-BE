import {getRepository} from "typeorm";
import {Report} from '../entities/Report'

export class ReportService {
    reportRepository(){
        return getRepository(Report)
    }

    async findAllReport() {
        return await this.reportRepository().find()
    }

    async createReport(report : Report){
        return await this.reportRepository().save(report)
    }

    async findReportByHastag(report : Report){
        return await this.reportRepository().findOne(report)
    }
}