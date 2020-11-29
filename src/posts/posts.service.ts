import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { PostsRepository } from './posts.repository';

import { Post } from './post.entity';

import { CreatePostDto } from './create-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  create(createPostDto: CreatePostDto): Promise<Post> {
    try {
      return this.postsRepository.createPost(createPostDto);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create Post!');
    }
  }

  findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  findOneById(id: string): Promise<Post> {
    return this.findOneByUuid(id);
  }

  async remove(id: string): Promise<void> {
    const post = await this.findOneByUuid(id);

    try {
      await this.postsRepository.remove(post);
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to remove Post with id - ${id}!`,
      );
    }
  }

  private findOneByUuid(uuid: string): Promise<Post> {
    try {
      return this.postsRepository.findOneOrFail(uuid);
    } catch (error) {
      throw new NotFoundException(`Post with id - ${uuid} does not exist`);
    }
  }
}
