import { Injectable } from "@nestjs/common";
import { Persona } from "./dto/Persona";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class PersonasService {
    constructor(
        @InjectRepository(Persona)
        private personasRepository: Repository<Persona>,
    ) {}

    getTest(): string {
        return "Lista de personas";
    }
    getPersonaList(): Promise<Persona[]> {
        return this.personasRepository.find();
    }
    getPersonaById(id: number): Promise<Persona | null> {
        return this.personasRepository.findOneBy({ id });
    }
    insertPersona(persona: Persona): Promise<Persona> {
        return this.personasRepository.save(persona);
    }
    async updatePersona(id: number, persona: Persona): Promise<Persona> {
        await this.personasRepository.update(id, persona);
        return this.personasRepository.findOneBy({ id });
    }
    async deletePersona(id: number): Promise<void> {
        await this.personasRepository.delete(id);
    }
}
