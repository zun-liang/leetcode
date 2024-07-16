const isPalindrome = (s: string) =>
  s.replace(/[^a-z0-9]/gi, "").toLowerCase() ===
  s
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
