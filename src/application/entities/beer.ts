import { randomUUID } from 'node:crypto';

export interface BeerProps {
  styleName: string;
  minimumTemperature: number;
  maximumTemperature: number;
  createdAt?: Date;
}

export class Beer {
  private _id: string;

  private props: BeerProps;

  constructor(props: BeerProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set styleName(styleName: string) {
    this.props.styleName = styleName;
  }

  public get styleName(): string {
    return this.props.styleName;
  }

  public set minimumTemperature(minimumTemperature: number) {
    this.props.minimumTemperature = minimumTemperature;
  }

  public get minimumTemperature(): number {
    return this.props.minimumTemperature;
  }

  public set maximumTemperature(maximumTemperature: number) {
    this.props.maximumTemperature = maximumTemperature;
  }

  public get maximumTemperature(): number {
    return this.props.maximumTemperature;
  }

  public get roundedAverageTemperature(): number {
    const roundedAverageTemperature =
      (this.props.minimumTemperature + this.props.maximumTemperature) / 2;

    const roundedMean = Math.round(roundedAverageTemperature);
    return roundedMean;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
