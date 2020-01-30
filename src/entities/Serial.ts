import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {Creator} from "./Creator";

@Entity({name: "mst_serial"})
export class Serial {
    @PrimaryColumn({generated: "uuid"})
    idSerial: string;
    @Column({name: "serial_title", type: "varchar", nullable: false})
    serialTitle: string;
    @Column({name: "username", type: "varchar", nullable: false})
    username: string;

    @ManyToOne(type => Creator, creator => creator.serials)
    @JoinColumn({name: "creator"})
    creator: Creator;
}