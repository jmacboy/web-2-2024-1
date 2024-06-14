import { Mascota } from "./dto/Mascota";
import { MascotaDto } from "./dto/MascotaDto";
import { MascotaUpdateDto } from "./dto/MascotaUpdateDto";
import { MascotasService } from "./mascotas.service";
import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put } from "@nestjs/common";
@Controller("mascotas")
export class MascotasController {
    constructor(private readonly mascotasService: MascotasService) {}
    @Get()
    getMascotas(): Promise<Mascota[]> {
        return this.mascotasService.getMascotaList();
    }
    @Get(":id")
    async getMascotaById(@Param("id") id: number): Promise<Mascota | null> {
        const objMascota = await this.mascotasService.getMascotaById(id);
        if (!objMascota) {
            throw new NotFoundException();
        }
        return objMascota;
    }

    @Post()
    insert(@Body() mascota: MascotaDto): Promise<Mascota> {
        return this.mascotasService.insertMascota(mascota);
    }
    @Put(":id")
    async updatePut(@Param("id") id: number, @Body() mascota: MascotaDto): Promise<Mascota> {
        const objMascota = await this.mascotasService.getMascotaById(id);
        if (!objMascota) {
            throw new NotFoundException();
        }
        return this.mascotasService.updateMascota(id, mascota);
    }
    @Patch(":id")
    async updatePatch(@Param("id") id: number, @Body() mascota: MascotaUpdateDto): Promise<Mascota> {
        const objMascota = await this.mascotasService.getMascotaById(id);
        if (!objMascota) {
            throw new NotFoundException();
        }
        return this.mascotasService.updateMascota(id, {
            ...mascota,
        });
    }
    @Delete(":id")
    async delete(@Param("id") id: number): Promise<void> {
        const objMascota = await this.mascotasService.getMascotaById(id);
        if (!objMascota) {
            throw new NotFoundException();
        }
        return this.mascotasService.deleteMascota(id);
    }
}
