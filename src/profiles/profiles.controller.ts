import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { createProfileDTO } from './DTO/create-profile-dto.dto';
import { updateProfileDTO } from './DTO/update-profile-dto.dto';

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

  // POST /profiles
  /* Challenge:
    1. Create a DTO File for our create route's body. Hook that up in the controller.
    2. The class should have 2 fields (name ,age, description) which are both strings
    3. Return the body we're receiving back to the client
  */

  @Post()
  create(@Body() createProfileDTO: createProfileDTO) {
    return {
      name: createProfileDTO.name,
      age: createProfileDTO.age,
      description: createProfileDTO.description,
    };
  }

  @Put(':name')
  update(
    @Param('name') name: string,
    @Body() updateProfileDTO: updateProfileDTO,
  ) {
    return [
      {
        message: `This will update ${name}`,
      },
      {
        name: updateProfileDTO.name,
      },
    ];
  }

  //DELETE
  @Delete(':name')
  remove(@Param('name') name: string) {
    return `This action removes a ${name}`;
  }
}
