import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Mascota } from "../../mascotas/dto/Mascota";

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

    @OneToMany(() => Mascota, mascota => mascota.persona)
    mascotas?: Mascota[];
}
