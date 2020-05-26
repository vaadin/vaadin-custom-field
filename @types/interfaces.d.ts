export type CustomFieldParseValueFn<T> = (value: T) => Array<T>;

export type CustomFieldFormatValueFn<T> = (inputValues: Array<T>) => T;

export type CustomFieldI18n = {
  parseValue: CustomFieldParseValueFn<string>;
  formatValue: CustomFieldFormatValueFn<string>;
};
