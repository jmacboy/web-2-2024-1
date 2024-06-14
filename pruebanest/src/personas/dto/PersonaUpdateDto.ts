import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

export class PersonaUpdateDto {
    @IsString()
    @IsOptional()
    readonly nombres: string;
    @IsString()
    @IsOptional()
    readonly apellidos: string;
    @IsString()
    @IsOptional()
    readonly ciudad: string;
    @IsNumber()
    @IsOptional()
    readonly edad: number;
    @IsDateString()
    @IsOptional()
    readonly fechaNacimiento: Date;
}
