import { Injectable } from '@nestjs/common';
import { RegisterAuthorInput } from './author.input';
import { Author } from './author.schema';

@Injectable()
export class AuthorService {
  private authors: Author[] = [];

  getAllAuthors(): Author[] {
    return this.authors;
  }

  getAuthorByID(id: string): Author {
    return this.authors.find(author => author.id === id);
  }

  registerAuthor(author: RegisterAuthorInput): Author {
    const id = `${Math.random()*1_000_000 >> 0}`;
    const newAuthor: Author = {
      id,
      ...author,
      posts: []
    };
    this.authors.push(newAuthor);
    return newAuthor;
  }
}
