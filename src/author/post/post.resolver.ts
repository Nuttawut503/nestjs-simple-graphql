import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreatePostInput } from "./post.input";
import { Post } from "./post.schema";
import { PostService } from "./post.service";

@Resolver(of => Post)
export class PostResolver {
  constructor(
    private readonly postService: PostService,
  ) {}

  @Query(returns => [Post])
  posts() {
    return this.postService.getAllPosts();
  }

  @Mutation(returns => Post)
  createPost(@Args('input') input: CreatePostInput) {
    const createdPost = this.postService.createPost(input);
    return createdPost;
  }
}