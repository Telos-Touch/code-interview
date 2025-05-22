import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		cors: {
			origin: '*', // Allows requests from any origin
			methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specifies allowed HTTP methods
			preflightContinue: false,
			optionsSuccessStatus: 204,
			credentials: true, // Allows sending cookies and authorization headers
			allowedHeaders: 'Content-Type, Accept, Authorization, X-Requested-With'
		}
	});
	app.setGlobalPrefix('api');
	await app.listen(3001);
}
bootstrap();
