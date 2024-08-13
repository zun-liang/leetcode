const minPartitions = (n: string): number =>
  Math.max(...n.split("").map((s) => Number(s)));