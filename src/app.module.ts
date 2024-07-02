import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from './user/user.module';
import {User} from "./user/entities/user.entity";
import {RoleModule} from './role/role.module';
import {ConfigModule} from "@nestjs/config";
import {Role} from "./role/entities/role.entity";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.HOST,
            port: parseInt(process.env.PORT, 10),
            username: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            entities: [
                User,
                Role
            ],
            synchronize: true,
            autoLoadEntities: true,
        }),
        UserModule,
        RoleModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
