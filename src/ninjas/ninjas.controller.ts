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
  getAllNinjas(@Query('country') country: string) {
    return this.ninjaService.getAllNinjas(country);
  }

  @Get(':id')
  getNinjaById(@Param('id') id: string) {
    return this.ninjaService.getNinjaById(id);
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjaService.createNinja(createNinjaDto);
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
