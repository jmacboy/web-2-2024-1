import { Injectable } from "@nestjs/common";
import { CreateMateriaDto } from "./dto/create-materia.dto";
import { UpdateMateriaDto } from "./dto/update-materia.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Materia } from "./entities/materia.entity";
import { Repository } from "typeorm";

@Injectable()
export class MateriasService {
    constructor(
        @InjectRepository(Materia)
        private materiasRepository: Repository<Materia>,
    ) {}

    create(createMateriaDto: CreateMateriaDto) {
        return this.materiasRepository.save(createMateriaDto);
    }

    findAll() {
        return this.materiasRepository.find();
    }

    findOne(id: number) {
        return this.materiasRepository.findOneBy({ id });
    }

    async update(id: number, updateMateriaDto: UpdateMateriaDto) {
        await this.materiasRepository.update(id, updateMateriaDto);
        return this.materiasRepository.findOneBy({ id });
    }

    async remove(id: number) {
        await this.materiasRepository.delete(id);
    }
}
