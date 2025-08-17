import { Injectable } from '@nestjs/common';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  getAllNinjas() {
    return 'ninja mk';
  }

  getNinjaById(id: string) {
    return 'ninja ' + id;
  }

  deleteNinjaById(id: string) {
    return 'deleted ninja ' + id;
  }

  updateNinja(id: string, data: UpdateNinjaDto) {
    return {
      updatedNinja: {
        id: id,
        data: data,
      },
    };
  }

  createNinja(id: string) {
    return 'ninja created ' + id;
  }
}
