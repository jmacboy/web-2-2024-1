import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PersonasController } from "./personas/personas.controller";
import { PersonasService } from "./personas/personas.service";

@Module({
    imports: [],
    controllers: [AppController, PersonasController],
    providers: [AppService, PersonasService],
})
export class AppModule {}
