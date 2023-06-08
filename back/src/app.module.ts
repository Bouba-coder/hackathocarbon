import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConsultantModule } from './consultant/consultant.module';
import { FormationsModule } from './formations/formations.module';
import { EntreprisesModule } from './entreprises/entreprises.module';

@Module({
  imports: [UserModule, AuthModule, ConsultantModule, FormationsModule, EntreprisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
