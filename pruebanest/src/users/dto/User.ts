import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "../../personas/dto/Persona";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToOne(() => Persona, persona => persona.user)
    persona: Persona;
}
