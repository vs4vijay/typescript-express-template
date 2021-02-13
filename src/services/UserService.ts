import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { User } from '../models';
import { BaseService } from './BaseService';
import { UserRepository } from '../repositories';

@Service()
export class UserService extends BaseService {
  @OrmRepository()
  private userRepository: UserRepository;

  constructor() {
    super();
  }

  public async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public async search({
    page = this.defaultPage,
    limit = this.defaultLimit,
    orderBy = this.defaultOrderBy,
  }): Promise<[User[], number]> {
    const skipOffset = (page - 1) * limit;
    // return this.userRepository.findAndCount({ skip: skipOffset, take: limit, order: orderBy });
    return this.userRepository.findAndCount({});
  }

  public async getById(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  public async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  public async update(id: string, user: User): Promise<User> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const updateResult = this.userRepository.update(id, user);
    // TODO: Put check on updateResult
    const updatedUser = await this.getById(id);
    return updatedUser;
  }

  public async delete(id: string): Promise<boolean> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const deleteResult = await this.userRepository.softDelete({ id });
    // TODO: Put check on deleteResult
    return Promise.resolve(true);
  }
}
