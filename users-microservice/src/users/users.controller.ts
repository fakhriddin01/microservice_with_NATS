import { Controller } from "@nestjs/common";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UsersService } from "./users.service";

@Controller()
export class UsersMicroserviceController{

    constructor(private userService: UsersService){}

    @MessagePattern({cmd: 'createUser'})
    createUser(@Payload() data: CreateUserDto){
        return this.userService.createUser(data)
    }

    @EventPattern('paymentCreated')
    paymentCreated(@Payload() data: any){
        console.log(data, 'users-microserv');
    }
}