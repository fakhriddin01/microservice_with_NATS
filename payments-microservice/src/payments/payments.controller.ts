import { Controller, Inject } from "@nestjs/common";
import { ClientProxy, EventPattern, Payload } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dto/CreatePayment.dto";

@Controller()
export class PaymentsMicroserviceController{

    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

    @EventPattern('createPayment')
    createUser(@Payload() createPaymentDto: CreatePaymentDto){
        console.log(createPaymentDto);
        this.natsClient.emit('paymentCreated', createPaymentDto)
    }
}