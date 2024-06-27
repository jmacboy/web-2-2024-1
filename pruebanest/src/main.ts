import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
        .addBearerAuth()
        .setTitle("API Web II")
        .setDescription("Api de prueba para la clase de web II")
        .setVersion("1.0")
        .addTag("personas", "CRUD de personas")
        .addTag("materias", "CRUD de materias")
        .addTag("mascotas", "CRUD de mascotas")
        .addTag("auth", "Autenticación de usuarios")
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);

    await app.listen(3000);
}
bootstrap();
