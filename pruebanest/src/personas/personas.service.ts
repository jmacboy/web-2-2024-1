import { Injectable } from "@nestjs/common";

@Injectable()
export class PersonasService {
    getPersonas(): string {
        return "Lista de personas";
    }
}
