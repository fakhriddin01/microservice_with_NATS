import { Module } from "@nestjs/common";
import { UsersMicroserviceController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../typeorm/entities/User";
import { UsersService } from "./users.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
    controllers: [UsersMicroserviceController],
    providers: [UsersService],
})

export class UsersModule { }