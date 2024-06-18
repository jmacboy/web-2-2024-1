import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./dto/User";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
