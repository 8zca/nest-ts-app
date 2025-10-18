import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { AppModule } from './app.module'
import { HandleErrorFilter, UnhandleErrorFilter } from './errors'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  )

  app.useGlobalFilters(new HandleErrorFilter(), new UnhandleErrorFilter())

  await app.listen({
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
  })
}
bootstrap()
