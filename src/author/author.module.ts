import { Module } from '@nestjs/common';
import { PostsModule } from 'src/posts/posts.module';
import { AuthorResolver } from './author.resolver';

@Module({
  providers: [AuthorResolver],
  imports: [PostsModule],
})
export class AuthorModule {}
