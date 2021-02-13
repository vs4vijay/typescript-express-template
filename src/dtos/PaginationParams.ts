import { IsArray, IsNumber, IsOptional, Min } from 'class-validator';

export class PaginationParams {
  @IsOptional()
  @Min(1)
  @IsNumber()
  page?: number;

  @IsOptional()
  @Min(1)
  @IsNumber()
  limit?: number;

  @IsOptional()
  @IsArray()
  orderBy?: Array<string>; // e.g. ["createdAt", "-updatedAt"]
}
