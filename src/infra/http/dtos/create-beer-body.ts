import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBeerBodyDTO {
  @IsNotEmpty()
  @IsString()
  styleName: string;

  @IsNotEmpty()
  @IsNumber()
  minimumTemperature: number;

  @IsNotEmpty()
  @IsNumber()
  maximumTemperature: number;
}
