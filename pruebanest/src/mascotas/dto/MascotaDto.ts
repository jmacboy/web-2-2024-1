import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class MascotaDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly nombre: string;
    @IsNumber()
    @ApiProperty()
    readonly tipo: number;
    @IsNumber()
    @ApiProperty()
    readonly personaId: number;
}
