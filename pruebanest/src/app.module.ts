import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PersonasController } from "./personas/personas.controller";
import { PersonasService } from "./personas/personas.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Persona } from "./personas/dto/Persona";
import { Mascota } from "./mascotas/dto/Mascota";
import { MascotasController } from "./mascotas/mascotas.controller";
import { MascotasService } from "./mascotas/mascotas.service";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "pruebanest",
            entities: [Persona, Mascota],
            synchronize: true, //esto es solo para desarrollo
        }),
        TypeOrmModule.forFeature([Persona, Mascota]),
    ],
    controllers: [AppController, PersonasController, MascotasController],
    providers: [AppService, PersonasService, MascotasService],
})
export class AppModule {}
