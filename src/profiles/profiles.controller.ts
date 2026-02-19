import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { createProfileDTO } from './DTO/create-profile-dto.dto';
import { updateProfileDTO } from './DTO/update-profile-dto.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private ProfilesService: ProfilesService) {}

  // Get /profiles
  //  @Get()
  //   findAll(): string {
  //     return 'This action returns all cats';
  //   }

  // @Get()
  // findAll(@Query('age') age: number) {
  //   return [{ age }];
  // }

  // Get /profiles/:id
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return { id };
  // }

  @Get()
  findAll() {
    return this.ProfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ProfilesService.findOne(id);
  }

  // POST /profiles
  /* Challenge:
    1. Create a DTO File for our create route's body. Hook that up in the controller.
    2. The class should have 2 fields (name ,age, description) which are both strings
    3. Return the body we're receiving back to the client
  */

  // @Post()
  // create(@Body() createProfileDTO: createProfileDTO) {
  //   return {
  //     name: createProfileDTO.name,
  //     age: createProfileDTO.age,
  //     description: createProfileDTO.description,
  //   };
  // }

  //  Challenge:
  //     1. Create a new `create` function in the service file. It'll take the body of the post request as a parameter, which will be the body that we’re getting in the controller.
  //     2. It needs to create a new profile and add it to the `profiles` array.
  //     3. Each profile has an `id`, `name`, and `description`.
  //     4. Remember, the backend is where you’ll typically create IDs for new resources, not the client. You’ll notice that in the original array, we’re creating unique IDs. We’ll need to create a new unique id for our new profile. Notice how we’re using `randomUUID()` to do that.
  //     5. We’ll also want to return the new profile we’ve created to the controller, and have that return it as a response to the client.
  //     6. You should receive a response from your Nest app with the unique `id`, `name`, and `description` if you’ve done this successfully. It'll have a status code of 201 and have the same response body as when we tried to retrieve a single profile.

  @Post()
  create(@Body() createProfileDTO: createProfileDTO) {
    this.ProfilesService.create(createProfileDTO);
    return this.ProfilesService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDTO: updateProfileDTO) {
    this.ProfilesService.update(id, updateProfileDTO);
    return this.ProfilesService.findAll();
  }

  //DELETE
  //set custom http code
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    this.ProfilesService.delete(id);
    return this.ProfilesService.findAll();
  }
}
