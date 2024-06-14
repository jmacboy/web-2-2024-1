import { IsNumber, IsOptional, IsString } from "class-validator";

export class MascotaUpdateDto {
    @IsString()
    @IsOptional()
    readonly nombre: string;
    @IsNumber()
    @IsOptional()
    readonly tipo: number;
    @IsNumber()
    @IsOptional()
    readonly personaId: number;
}
