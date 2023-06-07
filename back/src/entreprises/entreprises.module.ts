import { Module } from '@nestjs/common';
import { EntreprisesService } from './entreprises.service';
import { EntreprisesController } from './entreprises.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EntreprisesController],
  providers: [EntreprisesService],
  imports: [PrismaModule],
})
export class EntreprisesModule {}
