export type TService = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  duration?: string;
  createdAt?: Date;
};

export type TSlot = {
  _id: string;
  service: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: string;
};

export type TFormProps = {
  form?: any;
  onSubmit?: any;
  title?: any;
  data?: any;
  setOpen?: any;
};
