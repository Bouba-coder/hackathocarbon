import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findByEmail(email);

        if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) throw new HttpException('Password is incorrect', HttpStatus.BAD_REQUEST);

        return {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
        };
    };

    async login(user: any) {
        const payload = { email: user.email, sub: user.id };

        return {
            data: user,
            access_token: this.jwtService.sign(payload),
        };
    };

    async profile(user: any) {
        return this.userService.findOne(user.id);
    }
}
