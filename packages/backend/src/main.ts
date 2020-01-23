import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BACKEND_PORT } from '@vista-point/common/lib/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.BACKEND_PORT);
  console.log(`listening on port ${BACKEND_PORT}`);
}
bootstrap();
