import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class RegisterAuthorInput {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  age: number;
}