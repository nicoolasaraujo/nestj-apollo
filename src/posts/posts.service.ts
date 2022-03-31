import { Injectable } from '@nestjs/common';
import { Post } from 'src/graphql';

@Injectable()
export class PostsService {
  getPostsByUserId(authorId: number): Post[] {
    console.log(authorId);
    return [
      {
        id: 1,
        title: 'Post',
        votes: 10,
      },
      {
        id: 1,
        title: 'Post',
        votes: 10,
      },
    ];
  }
}
