import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateClientDto } from "./dto/create-client.dto";
import {Client } from './interfaces/client.interface'
import * as bcrypt from 'bcryptjs'
 import { BadRequestException } from '@nestjs/common';
export class ClientService {
    constructor(@InjectModel('Client') private readonly clientModel: Model<Client>){}
  
async create (createClientDto:CreateClientDto): Promise<Client>{
    createClientDto.password = await bcrypt.hash(createClientDto.password, 10);
 
    const IsEmail = await this.clientModel.findOne({email:createClientDto.email}).exec();
    if(IsEmail){
        throw new BadRequestException('El email ya existe');    }

    const newClient = new this.clientModel(createClientDto);

    return newClient.save()
}


async findAll(): Promise<Client[]>{
    return this.clientModel.find().exec();
}

async findOne(email: string): Promise<Client> {
    return this.clientModel.findOne({email}).exec();
  }
  async update(id: string, updateUserDto: CreateClientDto): Promise<Client> {
    return this.clientModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Client> {
    return this.clientModel.findByIdAndDelete(id).exec();
  }
 
}

