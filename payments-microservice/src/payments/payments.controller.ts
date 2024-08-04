import { Controller, Inject } from "@nestjs/common";
import { ClientProxy, EventPattern, Payload } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dto/CreatePayment.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { PaymentsService } from "./payments.service";

@Controller()
export class PaymentsMicroserviceController{

    constructor(
        @Inject('NATS_SERVICE') private natsClient: ClientProxy,
        private paymentService: PaymentsService
    ) {}

    @EventPattern('createPayment')
    async createPayment(@Payload() createPaymentDto: CreatePaymentDto){
        console.log(createPaymentDto);
        const newPayment = await this.paymentService.createPayment(createPaymentDto)
        this.natsClient.emit('paymentCreated', newPayment)
    }
}