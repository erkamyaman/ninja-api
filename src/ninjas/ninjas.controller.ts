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
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  constructor(private ninjaService: NinjasService) {}

  @Get()
  getAllNinjas(@Query('type') type: string) {
    return type;
  }

  @Get(':id')
  getNinjaById(@Param('id') id: string) {
    return this.ninjaService.getNinjaById(id);
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      data: { name: createNinjaDto.name, id: 343 },
    };
  }

  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjaService.updateNinja(id, updateNinjaDto);
  }

  @Delete(':id')
  deleteNinjaById(@Param('id') id: string) {
    return this.ninjaService.deleteNinjaById(id);
  }
}
