import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateMateriaDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly nombre: string;

    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    readonly creditos: number;
}
