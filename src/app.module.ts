import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConcursosModule } from './concursos/concursos.module';

@Module({
  imports: [ConcursosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
