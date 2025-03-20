import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { StickerModule } from './modules/stickers/sticker.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UserModule, AuthModule, StickerModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
