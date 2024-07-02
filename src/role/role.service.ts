import {Injectable} from '@nestjs/common';
import {CreateRoleDto} from './dto/create-role.dto';
import {UpdateRoleDto} from './dto/update-role.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Role} from "./entities/role.entity";

@Injectable()
export class RoleService {

    constructor(
        @InjectRepository(Role)
        private roleRepository: Repository<Role>,
    ) {
    }

    async create(createRoleDto: CreateRoleDto): Promise<Role> {
        const role = this.roleRepository.create({
            roleName: createRoleDto.roleName
        });
        return this.roleRepository.save(role);
    }

    async findAll() {
        return this.roleRepository.find();
    }

    async findOne(id: number) {
        return this.roleRepository.findOneBy({id: id});
    }

    async update(id: number, updateRoleDto: UpdateRoleDto) {
        return this.roleRepository.save(updateRoleDto);
    }

    async remove(id: number) {
        const role = await this.findOne(id);
        return await this.roleRepository.remove(role);
    }
}
