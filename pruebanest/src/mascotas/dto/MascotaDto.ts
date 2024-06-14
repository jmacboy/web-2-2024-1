import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class MascotaDto {
    @IsString()
    @IsNotEmpty()
    readonly nombre: string;
    @IsNumber()
    readonly tipo: number;
    @IsNumber()
    readonly personaId: number;
}
