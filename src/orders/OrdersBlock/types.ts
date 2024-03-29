export enum UnitStyle {
  "#" = "padding-left: 1em",
  "Ресторан" = "",
  "Дата поступления" = "justify-content: center",
  "Сумма" = "justify-content: center",
  "Поступит в ресторан" = "justify-content: flex-end;padding-right: 1em",
}

export interface OrderInfo {
  id: number;
  status: Status;
  restaurant: Restaurant;
  incomingDate: IncomingDate;
  summary: number;
  deliveryDate: DeliveryDate | null;
}

export interface Status {
  id: number;
  name?: string;
}

export interface Restaurant {
  name: string;
  adress: string;
  phone: string;
}

export interface IncomingDate {
  time: string;
  date: string;
}

export interface DeliveryDate {
  period: string;
  date: string;
}
