import { User } from './users.model';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { RoleUserDto } from './dto/role.user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(user: CreateUserDto): Promise<User>;
    login(user: CreateUserDto): Promise<User>;
    logout(request: any): Promise<User>;
    findAll(request: any): Promise<User[]>;
    findById(id: string, request: any): Promise<User>;
    update(user: UpdateUserDto, request: any): Promise<User>;
    delete(id: string, request: any): Promise<User>;
    setBoss(id: string, request: any): Promise<User>;
    setRole(id: string, role: RoleUserDto, request: any): Promise<User>;
}