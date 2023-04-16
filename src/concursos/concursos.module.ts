import { Module } from '@nestjs/common';
import { ConcursosService } from './concursos.service';
import { ConcursosController } from './concursos.controller';

@Module({
  controllers: [ConcursosController],
  providers: [ConcursosService]
})
export class ConcursosModule {}
