import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
//npm i cookie-parser
//import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.use(cookieParser());
  const options = new DocumentBuilder().addBearerAuth()
    .setTitle('API USERS')
    .setDescription('Api Nest Documentation')
    .setVersion('1.0.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)

  await app.listen(3000);
}
bootstrap();
