import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Comment {
  @Field(() => String)
  name: number;

  @Field(() => String)
  email: number;

  @Field(() => String)
  message: number;
}
