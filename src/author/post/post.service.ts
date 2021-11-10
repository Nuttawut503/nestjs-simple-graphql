import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './post.input';
import { Post } from './post.schema';

@Injectable()
export class PostService {
  private posts: Post[] = [];

  createPost(input: CreatePostInput): Post {
    const id = `${Math.random()*1_000_000 >> 0}`;
    const newPost: Post = {
      id,
      ...input
    };
    this.posts.push(newPost);
    return newPost;
  }

  getAuthorPosts(authorID: string): Post[] {
    return this.posts.filter(post => post.authorID === authorID);
  }

  getAllPosts(): Post[] {
    return this.posts;
  }
}
