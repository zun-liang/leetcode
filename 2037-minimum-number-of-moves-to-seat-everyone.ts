const minMovesToSeat = (seats: number[], students: number[]): number => {
  const newSeats = seats.sort((a, b) => a - b);
  const newStudents = students.sort((a, b) => a - b);
  let moves: number = 0;
  for (let i = 0; i < newSeats.length; i++) {
    moves += Math.abs(newStudents[i] - newSeats[i]);
  }
  return moves;
};
