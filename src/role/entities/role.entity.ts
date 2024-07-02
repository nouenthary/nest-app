import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    roleName: string;
}
