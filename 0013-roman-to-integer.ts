const romanToInt = (s: string): number => {
  let output: number = 0;
  let remaining: string = s;
  while (remaining.length > 0) {
    if (remaining.startsWith("MMM")) {
      output += 3000;
      remaining = remaining.slice(3);
    } else if (remaining.startsWith("MM")) {
      output += 2000;
      remaining = remaining.slice(2);
    } else if (remaining.startsWith("M")) {
      output += 1000;
      remaining = remaining.slice(1);
    } else if (remaining.startsWith("CM")) {
      output += 900;
      remaining = remaining.slice(2);
    } else if (remaining.startsWith("D")) {
      output += 500;
      remaining = remaining.slice(1);
    } else if (remaining.startsWith("CD")) {
      output += 400;
      remaining = remaining.slice(2);
    } else if (remaining.startsWith("CCC")) {
      output += 300;
      remaining = remaining.slice(3);
    } else if (remaining.startsWith("CC")) {
      output += 200;
      remaining = remaining.slice(2);
    } else if (remaining.startsWith("C")) {
      output += 100;
      remaining = remaining.slice(1);
    } else if (remaining.startsWith("XC")) {
      output += 90;
      remaining = remaining.slice(2);
    } else if (remaining.startsWith("L")) {
      output += 50;
      remaining = remaining.slice(1);
    } else if (remaining.startsWith("XL")) {
      output += 40;
      remaining = remaining.slice(2);
    } else if (remaining.startsWith("XXX")) {
      output += 30;
      remaining = remaining.slice(3);
    } else if (remaining.startsWith("XX")) {
      output += 20;
      remaining = remaining.slice(2);
    } else if (remaining.startsWith("X")) {
      output += 10;
      remaining = remaining.slice(1);
    } else if (remaining.startsWith("IX")) {
      output += 9;
      remaining = remaining.slice(2);
    } else if (remaining.startsWith("V")) {
      output += 5;
      remaining = remaining.slice(1);
    } else if (remaining.startsWith("IV")) {
      output += 4;
      remaining = remaining.slice(2);
    } else if (remaining.startsWith("III")) {
      output += 3;
      remaining = remaining.slice(3);
    } else if (remaining.startsWith("II")) {
      output += 2;
      remaining = remaining.slice(2);
    } else if (remaining.startsWith("I")) {
      output += 1;
      remaining = remaining.slice(1);
    }
  }
  return output;
};
