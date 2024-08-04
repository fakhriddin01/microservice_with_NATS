import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../typeorm/entities/User";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/CreateUser.dto";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) { }

    createUser(createUserDto: CreateUserDto) {
        const newUser = this.userRepo.create(createUserDto)
        return this.userRepo.save(newUser)
    }
}