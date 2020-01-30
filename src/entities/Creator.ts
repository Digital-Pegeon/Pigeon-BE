import {Entity, Column, PrimaryColumn, OneToMany, JoinColumn} from "typeorm";
import {Content} from "./Content";
import {Serial} from "./Serial";
import {Report} from "./Report";

@Entity({name:"mst_creator"})
export class Creator {
    @PrimaryColumn()
    username: string;
    @Column({name: "password", type:"varchar", nullable: false})
    password: string;
    @Column({name: "email", type:"varchar", nullable: false})
    email: string;
    @Column({name: "first_name", type:"varchar", nullable: false})
    firstName: string;
    @Column({name: "last_name", type:"varchar", nullable: false})
    lastName: string;
    @Column({name: "date", type: "date", nullable: false})
    bornDate: Date;
    @Column({name: "base", type: "varchar", nullable: false})
    base: string;
    @Column({name: "bio", type: "varchar", nullable: false})
    bio: string;
    @Column({name: "story", type: "varchar", nullable: false})
    story: string;


    @OneToMany(type => Content,
        content => content.creator,
        {cascade: true})
    contents: Array<Content>;

    @OneToMany(type => Serial,
        serial => serial.creator,
        {cascade: true})
    serials: Array<Serial>;

    @OneToMany(type => Report,
        report => report.creator,
        {cascade: true})
    reports: Array<Report>;
}