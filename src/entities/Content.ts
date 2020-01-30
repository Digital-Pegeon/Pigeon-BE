import {Column, Entity, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm";
import {Creator} from "./Creator";


@Entity({name: "mst_content"})
export class Content {
    @PrimaryColumn({generated: "uuid"})
    idContent: string;
    @Column({name: "title", type: "varchar", nullable: false})
    title: string;
    @Column({name: "date", type: "date", nullable: false})
    date: Date;
    @Column({name: "is_premium", type: "boolean", nullable: false, default: false})
    isPremium: boolean;
    @Column({name: "category", type: "varchar", nullable: true})
    category: string;
    @Column({name: "tag", type: "varchar", nullable: true})
    tag: string;
    @Column({name: "id_serial", type: "varchar", nullable: true})
    idSerial: string;
    @Column({name: "chapter_number", type: "varchar", nullable: true})
    chapterNumber: string;

    @ManyToOne(type => Creator, creator => creator.contents)
    @JoinColumn({name: "creator"})
    creator: Creator;
}