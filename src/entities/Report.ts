import {Entity, Column, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm";
import {Creator} from "./Creator";

@Entity({name:"mst_report"})
export class Report{
    @PrimaryColumn({generated:"uuid"})
    idReport: string;
    @Column({name:"id_content", type:"varchar", nullable: false})
    idContent: string;
    @Column({name:"reason", type:"varchar", nullable: false})
    reason: string;
    @Column({name:"username", type:"varchar", nullable: false})
    username: string;
  
    @ManyToOne( type => Creator, creator => creator.reports)
    @JoinColumn({name:"creator"})
    creator: Creator;

}