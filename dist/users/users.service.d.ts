import { User } from './users.model';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: User);
    findAll(req: any): Promise<User[]>;
    findById(id: string, req: any): Promise<User>;
    create(user: CreateUserDto): Promise<User>;
    login(user: CreateUserDto): Promise<User>;
    logout(req: any): Promise<User>;
    update(user: UpdateUserDto, req: any): Promise<User>;
    delete(id: string, req: any): Promise<User>;
    setModerator(id: string, req: any): Promise<User>;
    findOrCreateUser(googleId: string, firstName: string, email: string): Promise<any>;
}
