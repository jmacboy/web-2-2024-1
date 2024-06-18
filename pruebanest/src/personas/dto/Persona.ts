import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Mascota } from "../../mascotas/dto/Mascota";
import { User } from "../../users/dto/User";

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

    @OneToOne(() => User, user => user.persona)
    user?: User;
}
