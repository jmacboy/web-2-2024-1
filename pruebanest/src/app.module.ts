import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PersonasController } from "./personas/personas.controller";
import { PersonasService } from "./personas/personas.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Persona } from "./personas/dto/Persona";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "pruebanest",
            entities: [Persona],
            synchronize: true, //esto es solo para desarrollo
        }),
        TypeOrmModule.forFeature([Persona]),
    ],
    controllers: [AppController, PersonasController],
    providers: [AppService, PersonasService],
})
export class AppModule {}
