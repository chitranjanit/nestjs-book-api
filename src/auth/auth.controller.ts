import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiResponse({
    status: 200,
    description: 'create the user.',
  })
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @ApiResponse({
    status: 200,
    description: 'login the user.',
  })
  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
