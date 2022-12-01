import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';

describe('BooksService', () => { 
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => { 
    expect(service).toBeDefined();
  });

  it('should return Fizz when the number is multiple of 3', () => { 
    expect(service.bookId(3)).toBe('Fizz'); 
  });

  it('should return Buzz when the number is multiple of 5', () => {
    expect(service.bookId(5)).toBe('Buzz');
  });

  it('should return FizzBuzz when the number is multiple of 15', () => {
    expect(service.bookId(15)).toBe('FizzBuzz');
  });

  it('should return the number when then number is neither multiple of 3, 5 nor 15', () => {
    expect(service.bookId(2)).toBe(2);
  });

  it('should return nothing when the number is not between 1 and 100', () => { 
    expect(service.bookId(0)).toBe(undefined);
    expect(service.bookId(101)).toBe(undefined);
  });
});