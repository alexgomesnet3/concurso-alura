import { Injectable } from '@nestjs/common';
import { CreateConcursoDto } from './dto/create-concurso.dto';
import { UpdateConcursoDto } from './dto/update-concurso.dto';

@Injectable()
export class ConcursosService {
  create(createConcursoDto: CreateConcursoDto) {
    return 'This action adds a new concurso';
  }

  findAll() {
    return `This action returns all concursos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} concurso`;
  }

  update(id: number, updateConcursoDto: UpdateConcursoDto) {
    return `This action updates a #${id} concurso`;
  }

  remove(id: number) {
    return `This action removes a #${id} concurso`;
  }
}
