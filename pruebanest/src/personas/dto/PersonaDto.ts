import { IsDateString, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class PersonaDto {
    @IsString()
    @IsNotEmpty()
    readonly nombres: string;
    @IsString()
    @IsNotEmpty()
    readonly apellidos: string;
    @IsString()
    @IsNotEmpty()
    readonly ciudad: string;
    @IsNumber()
    @IsPositive()
    readonly edad: number;
    @IsDateString()
    @IsNotEmpty()
    readonly fechaNacimiento: Date;
}
