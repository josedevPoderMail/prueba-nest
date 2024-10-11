import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateClientDto {
  @IsString()
  @IsNotEmpty({message:'El nombre campo es obligatorio'})
  name: string;

  @IsString()
  @IsNotEmpty(
    {message:'El email campo es obligatorio'}
  )
  @IsEmail(
    {},
    {message:'El email no es valido'}
  )
  email: string;

  @IsString()
  @IsNotEmpty(
    {message:'El telefono campo es obligatorio'}
  )
  phone: string;

  @IsString()
  @IsNotEmpty(
    {message:'El password campo es obligatorio'}
  )
  @Length(8,16,
    {message:'El password debe tener entre 8 y 16 caracteres'}
  )
  password: string;
}