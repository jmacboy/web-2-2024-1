import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Mascota } from "./dto/Mascota";
import { Repository } from "typeorm";
import { Persona } from "../personas/dto/Persona";
import { MascotaDto } from "./dto/MascotaDto";
import { MascotaUpdateDto } from "./dto/MascotaUpdateDto";

@Injectable()
export class MascotasService {
    constructor(
        @InjectRepository(Mascota)
        private mascotasRepository: Repository<Mascota>,

        @InjectRepository(Persona)
        private readonly personaRepository: Repository<Persona>,
    ) {}

    getMascotaList(): Promise<Mascota[]> {
        return this.mascotasRepository.find({ relations: ["persona"] });
    }
    getMascotaById(id: number): Promise<Mascota | null> {
        return this.mascotasRepository.findOne({ relations: ["persona"], where: { id } });
    }
    async insertMascota(mascota: MascotaDto): Promise<Mascota> {
        const persona = await this.personaRepository.findOneBy({ id: mascota.personaId });
        if (!persona) {
            throw new NotFoundException("Persona not found");
        }
        return this.mascotasRepository.save(mascota);
    }
    async updateMascota(id: number, mascota: MascotaUpdateDto): Promise<Mascota> {
        const persona = await this.personaRepository.findOneBy({ id: mascota.personaId });
        if (!persona) {
            throw new NotFoundException("Persona not found");
        }
        const mascotaDb = await this.mascotasRepository.findOneBy({ id });
        if (!mascotaDb) {
            throw new NotFoundException("Mascota not found");
        }
        if (persona) {
            mascotaDb.persona = persona;
        }
        await this.mascotasRepository.update(id, mascotaDb);
        return this.mascotasRepository.findOneBy({ id });
    }
    async deleteMascota(id: number): Promise<void> {
        await this.mascotasRepository.delete(id);
    }
}
