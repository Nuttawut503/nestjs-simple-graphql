import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreatePostInput {
  @Field()
  authorID: string;

  @Field()
  title: string;

  @Field()
  content: string;
}
