import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Author, Post } from 'src/graphql';
import { PostsService } from 'src/posts/posts.service';

@Resolver('Author')
export class AuthorResolver {
  constructor(private postsService: PostsService) {}
  @Query()
  async author(): Promise<Author> {
    return {
      id: 1,
      firstName: 'String',
      lastName: 'String',
    };
  }

  @ResolveField()
  async posts(@Parent() author): Promise<Post[]> {
    const { id } = author;
    return this.postsService.getPostsByUserId(id);
  }
}
