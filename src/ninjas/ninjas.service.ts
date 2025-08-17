import { Injectable } from '@nestjs/common';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Injectable()
export class NinjasService {
  ninjas = [
    { id: '0', name: 'Hattori Hanzo', country: 'Japan', weapon: 'katana' },
    { id: '1', name: 'Fūma Kotarō', country: 'Japan', weapon: 'shuriken' },
    { id: '2', name: 'Kim Min-jun', country: 'Korea', weapon: 'twin daggers' },
    { id: '3', name: 'Park Ji-ho', country: 'Korea', weapon: 'rope dart' },
    { id: '4', name: 'Bohdan Koval', country: 'Ukraine', weapon: 'war scythe' },
    { id: '5', name: 'Oleh Shevchenko', country: 'Ukraine', weapon: 'longbow' },
    {
      id: '6',
      name: 'Giovanni Ricci',
      country: 'Italy',
      weapon: 'stiletto dagger',
    },
    { id: '7', name: 'Lorenzo Moretti', country: 'Italy', weapon: 'garrote' },
    { id: '8', name: 'Alejandro Cruz', country: 'Spain', weapon: 'rapier' },
    { id: '9', name: 'Mateo Santos', country: 'Spain', weapon: 'smoke bombs' },
    {
      id: '10',
      name: 'Marcus Blackthorn',
      country: 'England',
      weapon: 'short sword',
    },
    { id: '11', name: 'William Graves', country: 'England', weapon: 'longbow' },
    { id: '12', name: 'Diego Alvarez', country: 'Mexico', weapon: 'machete' },
    {
      id: '13',
      name: 'Aiden O’Connor',
      country: 'Ireland',
      weapon: 'sling blades',
    },
    {
      id: '14',
      name: 'Batu Khan',
      country: 'Turkic (Mongol-Tatar)',
      weapon: 'composite bow',
    },
    { id: '15', name: 'Timur Bek', country: 'Turkic (Uzbek)', weapon: 'sabre' },
    {
      id: '16',
      name: 'Nurbolat Sanzhar',
      country: 'Turkic (Kazakh)',
      weapon: 'horseman’s lance',
    },
    {
      id: '17',
      name: 'Alp Arslan',
      country: 'Turkey (Seljuk)',
      weapon: 'curved sword',
    },
    {
      id: '18',
      name: 'Osman Gazi',
      country: 'Turkey (Ottoman)',
      weapon: 'yatagan blade',
    },
    {
      id: '19',
      name: 'Mehmet Kara',
      country: 'Turkey (Modern)',
      weapon: 'dagger',
    },
  ];

  getAllNinjas(country?: string) {
    let ninjas = this.ninjas;

    if (country) {
      ninjas = ninjas.filter(
        (ninja) => ninja.country.toLowerCase() === country,
      );
    }
    return {
      ninjas: ninjas,
    };
  }

  getNinjaById(id: string) {
    const ninjas = this.ninjas;
    const ninja = ninjas.find((ni) => ni.id === id);

    return ninja;
  }

  deleteNinjaById(id: string) {
    const index = this.ninjas.findIndex((ni) => ni.id === id);
    if (index !== -1) {
      this.ninjas.splice(index, 1);
    }
    return this.ninjas;
  }

  updateNinja(id: string, data: UpdateNinjaDto) {
    const updatedNinja = {
      name: data.name ?? '',
      country: data.country ?? '',
      weapon: data.weapon ?? '',
    };

    const index = this.ninjas.findIndex((ni) => ni.id === id);
    if (index !== -1) {
      this.ninjas[index] = { id, ...updatedNinja };
    }
    return this.ninjas[index];
  }

  createNinja(dto: CreateNinjaDto) {
    const id = Math.floor(100000 + Math.random() * 900000).toString();
    const ninja = { id, ...dto };
    this.ninjas.push(ninja);
    return ninja;
  }
}
