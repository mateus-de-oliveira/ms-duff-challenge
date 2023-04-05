import { randomUUID } from 'node:crypto';

export interface BeerProps {
  styleName: string;
  minimumTemperature: string;
  maximumTemperature: string;
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

  public set minimumTemperature(minimumTemperature: string) {
    this.props.minimumTemperature = minimumTemperature;
  }

  public get minimumTemperature(): string {
    return this.props.minimumTemperature;
  }

  public set maximumTemperature(maximumTemperature: string) {
    this.props.maximumTemperature = maximumTemperature;
  }

  public get maximumTemperature(): string {
    return this.props.maximumTemperature;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
