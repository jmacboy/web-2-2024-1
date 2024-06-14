import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "../../personas/dto/Persona";

@Entity()
export class Mascota {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    tipo: number;

    @ManyToOne(() => Persona, persona => persona.mascotas, { onDelete: "CASCADE" })
    persona: Persona;
}
