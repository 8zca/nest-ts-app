import { Controller, Get } from '@nestjs/common'
import { DomainError } from '../errors'
import { CatsService } from './cats.service'

@Controller('cats')
export class CatsController {
  constructor(readonly _catsService: CatsService) {}

  @Get()
  index(): string[] {
    // throw new Error('standard error')
    throw new DomainError('domain error')
    // return this.catsService.findAll()
  }
}
