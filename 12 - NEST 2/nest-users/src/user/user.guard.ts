import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private JwtService: JwtService) {}

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    //Bearer sdfsdhjkfjjdfksdfhksdf
    //[type: Bearer, token: fsdfsdfsdfsdfsdf]
    return type === 'Bearer' ? token : undefined;
  }

  private extractTokenFromCookies(request: Request): string | undefined {
    const token = request.cookies['token'];
    return token;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      // this.extractTokenFromCookies
      if (!token) throw new UnauthorizedException('unauthorized');
      const payload = await this.JwtService.verify(token, { secret: '1234' });
      request.user = payload;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
    return true;
  }
}
