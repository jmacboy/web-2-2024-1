import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombres: string;

    @Column()
    apellidos: string;

    @Column()
    ciudad: string;

    @Column()
    edad: number;

    @Column()
    fechaNacimiento: Date;
}
