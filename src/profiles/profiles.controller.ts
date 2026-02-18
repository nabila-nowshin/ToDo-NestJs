import { Controller, Get, Param, Query } from '@nestjs/common';

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
}
