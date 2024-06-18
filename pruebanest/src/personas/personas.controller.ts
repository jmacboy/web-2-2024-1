import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { PersonasService } from "./personas.service";
import { Persona } from "./dto/Persona";
import { PersonaDto } from "./dto/PersonaDto";
import { PersonaUpdateDto } from "./dto/PersonaUpdateDto";
import { FileInterceptor } from "@nestjs/platform-express";
import { promisify } from "util";
import { unlink } from "fs";
import { AuthGuard } from "../auth/auth.guard";
const unlinkAsync = promisify(unlink);
@Controller("personas")
export class PersonasController {
    constructor(private readonly personasService: PersonasService) {}
    @Get("test")
    getTestPersonas(): string {
        return this.personasService.getTest();
    }

    @Get()
    @UseGuards(AuthGuard)
    getPersonas(): Promise<Persona[]> {
        return this.personasService.getPersonaList();
    }
    @Get(":id")
    async getPersonaById(@Param("id") id: number): Promise<Persona | null> {
        const objPersona = await this.personasService.getPersonaById(id);
        if (!objPersona) {
            throw new NotFoundException();
        }
        return objPersona;
    }

    @Post()
    insert(@Body() persona: PersonaDto): Promise<Persona> {
        return this.personasService.insertPersona({
            id: 0,
            nombres: persona.nombres,
            apellidos: persona.apellidos,
            ciudad: persona.ciudad,
            edad: persona.edad,
            fechaNacimiento: persona.fechaNacimiento,
        });
    }
    @Put(":id")
    async updatePut(@Param("id") id: number, @Body() persona: PersonaDto): Promise<Persona> {
        const objPersona = await this.personasService.getPersonaById(id);
        if (!objPersona) {
            throw new NotFoundException();
        }
        return this.personasService.updatePersona(id, {
            id,
            nombres: persona.nombres,
            apellidos: persona.apellidos,
            ciudad: persona.ciudad,
            edad: persona.edad,
            fechaNacimiento: persona.fechaNacimiento,
        });
    }
    @Patch(":id")
    async updatePatch(@Param("id") id: number, @Body() persona: PersonaUpdateDto): Promise<Persona> {
        const objPersona = await this.personasService.getPersonaById(id);
        if (!objPersona) {
            throw new NotFoundException();
        }
        return this.personasService.updatePersona(id, {
            ...persona,
            id,
        });
    }
    @Delete(":id")
    async delete(@Param("id") id: number): Promise<void> {
        const objPersona = await this.personasService.getPersonaById(id);
        if (!objPersona) {
            throw new NotFoundException();
        }
        return this.personasService.deletePersona(id);
    }

    @Post(":id/profile-picture")
    @UseInterceptors(FileInterceptor("file"))
    async profilePicture(@Param("id") id: number, @UploadedFile() file: Express.Multer.File) {
        console.log(file);
        const objPersona = await this.personasService.getPersonaById(id);
        if (!objPersona) {
            await unlinkAsync(file.path);
            throw new NotFoundException();
        }
        return {
            originalname: file.originalname,
            filename: file.filename,
            path: file.path,
        };
    }
}
