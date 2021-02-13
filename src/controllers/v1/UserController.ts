import {
  JsonController,
  Param,
  Get,
  Post,
  Body,
  Put,
  Delete,
  QueryParams,
  HttpCode,
  NotFoundError,
} from 'routing-controllers';

import { UserDTO, CreateUserDTO, UpdateUserDTO, ResponseUserDTO, ResponseDTO, PaginationParams } from '../../dtos';
import { User } from '../../models';
import { SearchCriteria } from '../../common';
import { UserService } from '../../services';

@JsonController('/api/v1/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAll(@QueryParams() paginationParams: PaginationParams): Promise<ResponseDTO<Array<ResponseUserDTO>>> {
    const searchCriteria = SearchCriteria.getSearchCriteriaFromPagination(paginationParams as any);
    const [users, totalCount] = await this.userService.search(searchCriteria);
    const usersDTO: Array<ResponseUserDTO> = users.map(UserDTO.fromModel);
    const responseDTO = new ResponseDTO<Array<ResponseUserDTO>>(usersDTO, totalCount);
    return responseDTO;
  }

  @Get('/:id')
  async get(@Param('id') id: string): Promise<ResponseDTO<ResponseUserDTO>> {
    const user = await this.userService.getById(id);
    if (!user) {
      return Promise.reject(new NotFoundError('User not found'));
    }
    return new ResponseDTO<ResponseUserDTO>(UserDTO.fromModel(user));
  }

  @HttpCode(201)
  @Post()
  async create(@Body({ required: true }) userDTO: CreateUserDTO): Promise<ResponseDTO<ResponseUserDTO>> {
    let createdUser: User;
    try {
      const user = userDTO.toModel();
      createdUser = await this.userService.create(user);

      return new ResponseDTO<ResponseUserDTO>(UserDTO.fromModel(createdUser));
    } catch (error) {
      return Promise.reject(error);
    }
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body({ required: true }) userDTO: UpdateUserDTO,
  ): Promise<ResponseDTO<ResponseUserDTO>> {
    const user: User = userDTO.toModel();
    const updatedUser = await this.userService.update(id, user);
    return new ResponseDTO<ResponseUserDTO>(UserDTO.fromModel(updatedUser));
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<ResponseDTO<boolean>> {
    const status = await this.userService.delete(id);
    return new ResponseDTO<boolean>(status);
  }
}
