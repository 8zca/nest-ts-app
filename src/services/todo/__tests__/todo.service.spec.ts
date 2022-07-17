import { HttpException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { TodoService } from '../todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      providers: [TodoService],
      imports: [HttpException],
    }).compile();

    service = app.get(TodoService);
  });

  describe('create', () => {
    it('登録できる', () => {
      expect(service.create('test')).toMatchObject({
        status: 'todo',
        body: 'test',
      });
    });
  });

  describe('all', () => {
    beforeEach(() => {
      service.create('test');
    });

    it('一覧を取得できる', () => {
      expect(service.all()).toHaveLength(1);
    });
  });

  describe('find', () => {
    beforeEach(() => {
      service.create('test');
    });

    it('1件取得できる', () => {
      expect(service.find(1)).toMatchObject({ body: 'test', status: 'todo' });
    });
  });

  describe('update', () => {
    beforeEach(() => {
      service.create('test');
    });

    it('更新できる', () => {
      expect(service.update(1, { body: 'test2' })).toMatchObject({
        body: 'test2',
        status: 'todo',
      });
    });

    it('見つからないときは例外が発生する', () => {
      // 無名関数を挟むこと(ただしasyncは `expect(method).rejects.toThrow()` )
      expect(() => service.update(9, { body: 'test2' })).toThrow(HttpException);
    });
  });
});
