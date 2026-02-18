import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { createProfileDTO } from './DTO/create-profile-dto.dto';

@Controller('profiles')
export class ProfilesController {
  // Get /profiles

  //  @Get()
  //   findAll(): string {
  //     return 'This action returns all cats';
  //   }

  @Get()
  findAll(@Query('age') age: number) {
    return [{ age }];
  }

  // Get /profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() createProfileDTO: createProfileDTO) {
    return {
      name: createProfileDTO.name,
      age: createProfileDTO.age,
      description: createProfileDTO.description,
    };
  }
}
