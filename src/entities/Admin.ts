import {Column, Entity} from "typeorm";


@Entity()
export class AdminAccount {
    @Column({})
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}