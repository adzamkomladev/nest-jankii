import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseUUIDPipe,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { PostsService } from './posts.service';

import { Post as PostEntity } from './post.entity';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('api/v1.0/posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a post.' })
  @ApiCreatedResponse({
    description: 'The post has been successfully created.',
    type: PostEntity,
  })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  create(@Body(ValidationPipe) createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all posts.' })
  @ApiOkResponse({ description: 'Posts found.', type: [PostEntity] })
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a post.' })
  @ApiOkResponse({ description: 'Post found.', type: PostEntity })
  @ApiNotFoundResponse({ description: 'Post not found.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.postsService.findOneById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a post.' })
  @ApiNoContentResponse({ description: 'Post updated.' })
  @ApiNotFoundResponse({ description: 'Post not found.' })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(ValidationPipe) updatePostDto: UpdatePostDto,
  ) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a post.' })
  @ApiNoContentResponse({ description: 'Post deleted.' })
  @ApiNotFoundResponse({ description: 'Post not found.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.postsService.remove(id);
  }
}
