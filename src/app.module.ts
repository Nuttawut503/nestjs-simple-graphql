import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    subscriptions: {
      'graphql-ws': true,
    },
  }), AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
