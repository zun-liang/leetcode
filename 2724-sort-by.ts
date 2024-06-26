type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number;

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  const mapped = arr.map((n) => ({ n, key: fn(n) }));
  mapped.sort((a, b) => a.key - b.key);
  const sorted = mapped.map((n) => n.n);
  return sorted;
}
