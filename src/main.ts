import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
	const isDev = process.env.NODE_ENV === 'development';
	const PORT = isDev ? 8641 : 80;
	const app = await NestFactory.create(AppModule);

	const swaggerConfig = new DocumentBuilder()
		.setTitle('Advanced backend lesson')
		.setDescription('Api documentation')
		.setVersion('1.0.0')
		.build();
	const document = SwaggerModule.createDocument(app, swaggerConfig);
	SwaggerModule.setup('/api/docs', app, document);

	await app.listen(PORT, () => console.log(`server started on ${PORT} port`));
}

start();
