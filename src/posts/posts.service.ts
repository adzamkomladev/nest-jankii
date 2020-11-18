import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { PostsRepository } from './posts.repository';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  create(createPostDto: CreatePostDto): Promise<Post> {
    const post = new Post();
    post.body = createPostDto.body;

    return this.postsRepository.save(post);
  }

  findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  findOneById(id: string): Promise<Post> {
    return this.findOneByUuid(id);
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<void> {
    const post = await this.findOneByUuid(id);

    try {
      post.body = updatePostDto.body;
      await this.postsRepository.save(post);
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to update Post with id - ${id}!`,
      );
    }
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
