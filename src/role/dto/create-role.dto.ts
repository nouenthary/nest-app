import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    roleName:
    string;
}
