import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Payment } from "../typeorm/entities/Payment";
import { CreatePaymentDto } from "./dto/CreatePayment.dto";

@Injectable()
export class PaymentsService {
    constructor(@InjectRepository(Payment) private paymentRepo: Repository<Payment>) { }

    createPayment(createPaymentDto: CreatePaymentDto) {
        const newPayment = this.paymentRepo.create(createPaymentDto)
        return this.paymentRepo.save(newPayment)
    }
}