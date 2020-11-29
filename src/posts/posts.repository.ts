import { EntityRepository, Repository } from 'typeorm';

import { Post } from './post.entity';

import { CreatePostDto } from './create-post.dto';

@EntityRepository(Post)
export class PostsRepository extends Repository<Post> {
  createPost(createPostDto: CreatePostDto): Promise<Post> {
    const { body, url } = createPostDto;
    const post = new Post();
    post.body = body;
    post.url = url;

    return this.save(post);
  }
}
