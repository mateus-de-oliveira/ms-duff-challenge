import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBeerBodyDTO {
  @IsNotEmpty()
  @IsString()
  styleName: string;

  @IsNotEmpty()
  @IsString()
  minimumTemperature: string;

  @IsNotEmpty()
  @IsString()
  maximumTemperature: string;
}
