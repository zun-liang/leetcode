type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
const argumentsLength = (...arg: JSONValue[]): number => arg.length;
