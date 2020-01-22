import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import '@vista-point/common/lib/dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.BACKEND_PORT);
  console.log(`listening on port ${process.env.BACKEND_PORT}`);
}
bootstrap();
