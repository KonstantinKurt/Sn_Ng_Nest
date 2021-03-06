import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ProfileController} from './profile.controller';
import {ProfileService} from './profile.service';
import {ProfileEntity} from './entity/profile.entity';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {LoggerMiddleware} from '../middlewares/logger.middleware';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ProfileEntity,
        ]),
        JwtModule.register({
            secret: process.env.AUTH_SECRET,
            signOptions: {
                expiresIn: process.env.AUTH_TOKEN_EXPIRES_IN,
            },
        }),
        PassportModule.register({
            defaultStrategy: 'jwt',
        }),

    ],
    controllers: [
        ProfileController,
    ],
    providers: [
        ProfileService,
    ],
})
export class ProfileModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes({path: 'profile', method: RequestMethod.ALL});
    }
}
