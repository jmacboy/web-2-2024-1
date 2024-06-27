import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class MascotaUpdateDto {
    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly nombre: string;
    @IsNumber()
    @IsOptional()
    @ApiProperty()
    readonly tipo: number;
    @IsNumber()
    @IsOptional()
    @ApiProperty()
    readonly personaId: number;
}
