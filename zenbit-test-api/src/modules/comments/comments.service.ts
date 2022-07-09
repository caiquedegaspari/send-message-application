import { Injectable } from '@nestjs/common';
import { CreateCommentInput } from './dto/create-comment.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  create(createCommentInput: CreateCommentInput) {
    return this.prisma.comment.create({
      data: {
        ...createCommentInput,
      },
    });
  }
}
