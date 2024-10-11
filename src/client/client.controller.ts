import { Controller, Get, Post, Body, Param, Put, Delete } from "@nestjs/common";
import { ClientService } from "./client.service";
import { CreateClientDto } from "./dto/create-client.dto";

@Controller('users')
export class ClientController{
    constructor(private readonly clientService:ClientService){}

    @Post()
    async create(@Body() createClientDto: CreateClientDto) {
      return this.clientService.create(createClientDto);
    }


    @Get()
    async findAll() {
      return this.clientService.findAll();
    }
  
    @Get(':email')
    async findOne(@Param('email') id: string) {
      return this.clientService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: CreateClientDto) {
      return this.clientService.update(id, updateUserDto);
    }
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.clientService.delete(id);
    }

  
}