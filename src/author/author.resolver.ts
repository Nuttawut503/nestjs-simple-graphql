import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { RegisterAuthorInput } from "./author.input";
import { Author } from "./author.schema";
import { AuthorService } from "./author.service";
import { PostService } from "./post/post.service";

@Resolver(of => Author)
export class AuthorResolver {
  constructor(
    private readonly authorService: AuthorService,
    private readonly postService: PostService,
  ) {}

  @Query(returns => [Author])
  authors() {
    return this.authorService.getAllAuthors();
  }

  @Query(returns => Author)
  author(@Args('id') authorID: string) {
    return this.authorService.getAuthorByID(authorID); 
  }

  @Mutation(returns => Author)
  registerAuthor(@Args('input') input: RegisterAuthorInput) {
    const registeredAutor =  this.authorService.registerAuthor(input);
    return registeredAutor;
  }

  @ResolveField()
  posts(@Parent() author: Author) {
    const { id } = author;
    return this.postService.getAuthorPosts(id);
  }
}
