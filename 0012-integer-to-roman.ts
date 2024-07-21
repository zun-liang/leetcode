const intToRoman = (num: number): string => {
  let output: string = "";
  let remaining: number = num;
  while (remaining >= 1) {
    if (remaining >= 1000) {
      const thousand = Math.floor(remaining / 1000);
      for (let i = 0; i < thousand; i++) {
        output += "M";
      }
      remaining -= thousand * 1000;
    } else if (remaining >= 900) {
      output += "CM";
      remaining -= 900;
    } else if (remaining >= 500) {
      output += "D";
      remaining -= 500;
    } else if (remaining >= 400) {
      output += "CD";
      remaining -= 400;
    } else if (remaining >= 100) {
      const hundred = Math.floor(remaining / 100);
      for (let i = 0; i < hundred; i++) {
        output += "C";
      }
      remaining -= hundred * 100;
    } else if (remaining >= 90) {
      output += "XC";
      remaining -= 90;
    } else if (remaining >= 50) {
      output += "L";
      remaining -= 50;
    } else if (remaining >= 40) {
      output += "XL";
      remaining -= 40;
    } else if (remaining >= 10) {
      const ten = Math.floor(remaining / 10);
      for (let i = 0; i < ten; i++) {
        output += "X";
      }
      remaining -= ten * 10;
    } else if (remaining >= 9) {
      output += "IX";
      remaining -= 9;
    } else if (remaining >= 5) {
      output += "V";
      remaining -= 5;
    } else if (remaining >= 4) {
      output += "IV";
      remaining -= 4;
    } else {
      for (let i = 0; i < remaining; i++) {
        output += "I";
        remaining -= 1;
      }
    }
  }
  return output;
};
