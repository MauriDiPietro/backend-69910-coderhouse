import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { RequestUser, UserLogin } from './types/user';
import { UserGuard } from './user.guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  // @ApiResponse({ status: 200, type: UserDocument })  //recibe una clase como la de createUserDto
  @ApiResponse({ status: 200, description: 'User register ok' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async register(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response,
  ): Promise<void> {
    // return this.userService.register(createUserDto);
    try {
      const response = await this.userService.register(createUserDto);
      if (!response) throw new BadRequestException('User exists');
      else res.status(HttpStatus.OK).json(response);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  @Post('/login')
  async login(@Body() user: UserLogin, @Res() res: Response): Promise<void> {
    try {
      const response = await this.userService.login(user);
      if (!response) throw new ForbiddenException('Invalid Credentials');
      else res.status(HttpStatus.OK)
                      // .cookie('token', response, { httpOnly: true })
                      .json(response);
    } catch (error) {
      res.status(HttpStatus.FORBIDDEN).json({ message: error.message });
    }
  }

  @Get('/profile')
  @UseGuards(UserGuard)
  profile(@Request() req: RequestUser) {
    return this.userService.profile(req);
  }
}
