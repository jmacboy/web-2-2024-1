import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class PersonaDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly nombres: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly apellidos: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly ciudad: string;
    @IsNumber()
    @IsPositive()
    @ApiProperty()
    readonly edad: number;
    @IsDateString()
    @IsNotEmpty()
    @ApiProperty()
    readonly fechaNacimiento: Date;
}
