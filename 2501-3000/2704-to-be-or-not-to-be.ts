type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  function toBe(val1) {
    if (val === val1) {
      return true;
    } else {
      throw new Error("Not Equal");
    }
  }
  function notToBe(val2) {
    if (val !== val2) {
      return true;
    } else {
      throw new Error("Equal");
    }
  }
  return {
    toBe,
    notToBe,
  };
}
