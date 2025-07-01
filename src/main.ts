import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
	const isDev = process.env.NODE_ENV === 'development';
	const PORT = isDev ? 8641 : 80;
	const app = await NestFactory.create(AppModule);

	await app.listen(PORT, () => console.log(`server started on ${PORT} port`));
}

start();
