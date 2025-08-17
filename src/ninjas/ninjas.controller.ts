import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
export class NinjasController {
  constructor(private ninjaService: NinjasService) {}

  @Get()
  getAllNinjas(@Query('country') country: string) {
    return this.ninjaService.getAllNinjas(country);
  }

  @Get(':id')
  getNinjaById(@Param('id') id: string) {
    try {
      return this.ninjaService.getNinjaById(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post()
  createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    return this.ninjaService.createNinja(createNinjaDto);
  }

  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjaService.updateNinja(id, updateNinjaDto);
  }

  @Delete(':id')
  @UseGuards(BeltGuard)
  deleteNinjaById(@Param('id') id: string) {
    try {
      return this.ninjaService.deleteNinjaById(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
