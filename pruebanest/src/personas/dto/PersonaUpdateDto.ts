import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

export class PersonaUpdateDto {
    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly nombres: string;
    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly apellidos: string;
    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly ciudad: string;
    @IsNumber()
    @IsOptional()
    @ApiProperty()
    readonly edad: number;
    @IsDateString()
    @IsOptional()
    @ApiProperty()
    readonly fechaNacimiento: Date;
}
