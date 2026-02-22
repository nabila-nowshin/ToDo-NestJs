import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { createProfileDTO } from './DTO/create-profile-dto.dto';
import { updateProfileDTO } from './DTO/update-profile-dto.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Brianna Watts',
      description: `Looking for someone to merge with my heart. I’m a full-stack romantic who refactors my feelings until they pass all tests. Bonus points if you can debug my issues while we pair program over coffee. Let’s commit to something beautiful together.`,
    },
    {
      id: randomUUID(),
      name: 'Jasper Quinn',
      description: `Seeking a partner in crime to compile my heart. Must be comfortable with the terminal because I only speak fluent bash. Swipe right if you can appreciate a good kernel panic every now and then.`,
    },
    {
      id: randomUUID(),
      name: 'Leo Park',
      description: `You think you know VIM? Try Neovim. I'll make your modal dreams come true. Want to escape the matrix and explore the perfect keyboard shortcut for love?`,
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    const matchingProfile = this.profiles.find((profile) => profile.id === id);
    if (!matchingProfile) {
      throw new NotFoundException(`${id} Not Found.`);
    }
    return matchingProfile;
  }

  create(createProfileDTO: createProfileDTO) {
    this.profiles.push({ id: randomUUID(), ...createProfileDTO });
  }

  update(id: string, updateProfileDTO: updateProfileDTO) {
    const filtered = this.profiles.find((profile) => profile.id == id);
    if (!filtered) throw new NotFoundException();
    filtered.name = updateProfileDTO.name;
    filtered.description = updateProfileDTO.description;
  }

  delete(id: string) {
    const matchingProfileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );

    if (matchingProfileIndex > -1) {
      this.profiles.splice(matchingProfileIndex, 1);
    } else throw new NotFoundException();
  }
}
