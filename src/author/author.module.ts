import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { PostService } from './post/post.service';
import { PostResolver } from './post/post.resolver';
import { PubsubService } from './pubsub.service';

@Module({
  providers: [
    AuthorService, PostService,
    AuthorResolver, PostResolver,
    PubsubService,
  ]
})
export class AuthorModule {}
