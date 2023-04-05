import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBeerBody {
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
