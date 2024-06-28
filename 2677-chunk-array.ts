type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  let newArr: Obj[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, size + i));
  }
  return newArr;
}
