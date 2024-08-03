import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(32)
    username: string;

    @IsOptional()
    @MaxLength(64)
    @IsString()
    displayName?: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;
}