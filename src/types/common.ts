export interface IOption<TValue extends string | number | boolean> {
  label: string;
  value: TValue;
}

export type DropdownType = {
  value: string | number;
  label: string;
};

export type IPlainObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};
