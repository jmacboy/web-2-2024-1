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
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { User } from "./users/dto/User";
import { MateriasModule } from "./materias/materias.module";
import { Materia } from "./materias/entities/materia.entity";

@Module({
    imports: [
        MulterModule.register({
            storage: diskStorage({
                destination: "./uploads", // Directorio donde se guardarán los archivos
                filename: (req, file, callback) => {
                    const idSuffix = req.params.id;
                    const extension = file.originalname.split(".").pop();
                    const filename = idSuffix + "." + extension;
                    callback(null, filename);
                },
            }),
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, "..", "uploads"),
            serveRoot: "/uploads", // La ruta desde la que se accederá a los archivos
        }),
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "pruebanest",
            entities: [Persona, Mascota, User, Materia],
            synchronize: true, //esto es solo para desarrollo
        }),
        TypeOrmModule.forFeature([Persona, Mascota]),
        AuthModule,
        UsersModule,
        MateriasModule,
    ],
    controllers: [AppController, PersonasController, MascotasController],
    providers: [AppService, PersonasService, MascotasService],
})
export class AppModule {}
