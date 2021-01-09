export enum UnitStyle {
  "#" = "padding-left: 1em",
  "Ресторан" = "",
  "Дата поступления" = "justify-content: center",
  "Сумма" = "justify-content: center",
  "Поступит в ресторан" = "justify-content: flex-end;padding-right: 1em",
}

export interface OrderInfo {
  id: string;
  status: Status;
  restaurant: Restaurant;
  incomingDate: IncomingDate;
  summary: string;
  deliveryDate: DeliveryDate | null;
}

export interface Status {
  id: number;
  name: string;
}

interface Restaurant {
  name: string;
  adress: string;
  phone: string;
}

interface IncomingDate {
  time: string;
  date: string;
}

interface DeliveryDate {
  period: string;
  date: string;
}
