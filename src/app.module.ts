import { Module } from '@nestjs/common'
import { CatsModule } from './cats/cats.module'
// import { HandleErrorFilter, UnhandleErrorFilter } from './errors'

@Module({
  imports: [CatsModule],
  // providers: [
  //   {
  //     provide: APP_FILTER,
  //     useClass: HandleErrorFilter,
  //   },
  //   {
  //     provide: APP_FILTER,
  //     useClass: UnhandleErrorFilter,
  //   },
  // ],
})
export class AppModule {}
