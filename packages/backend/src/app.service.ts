import { Injectable } from '@nestjs/common';
import { Resolver, Query, Args, Parent, ResolveProperty } from '@nestjs/graphql';
import { PostsService } from './posts/posts.service';
import { AuthorsService } from './authors/authors.service';

@Resolver('Author')
export class AppService {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly postsService: PostsService,
  ) { }

  @Query()
  async author(@Args('id') id: number) {
    return this.authorsService.findOneById(id);
  }

  @ResolveProperty()
  async posts(@Parent() author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }

  getHello(): string {
    return JSON.stringify({
      hello: 'world',
    });
  }
}
