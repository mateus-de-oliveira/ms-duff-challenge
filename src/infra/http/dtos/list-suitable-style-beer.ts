import { IsInt, IsNotEmpty } from 'class-validator';

export class ListSuitableStyleBodyDTO {
  @IsNotEmpty()
  @IsInt()
  temperature: number;
}
