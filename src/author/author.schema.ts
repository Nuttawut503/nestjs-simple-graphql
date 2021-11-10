import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Post } from './post/post.schema';

@ObjectType()
export class Author {
  @Field()
  id: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field(type => Int)
  age: number;

  @Field(type => [Post])
  posts: Post[];
}
