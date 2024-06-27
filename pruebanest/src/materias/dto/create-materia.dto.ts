import { IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateMateriaDto {
    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsPositive()
    @IsNotEmpty()
    readonly creditos: number;
}
