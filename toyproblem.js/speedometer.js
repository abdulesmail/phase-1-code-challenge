function calculateDemeritPoints (speed) {
  const speedLimit = 70;
  const kmPerDermeritPoint = 5;
  const maxDemeritPoints = 12;

  if(speed < speedLimit) {
  console.log("Ok");

} else {
  const demeritPoints = Math.floor((speed - speedLimit) / kmPerdemeritPoints);
  if (demeritPoints > maxDemritPoints) {
    console.log("License suspended");

  } else {
    console.log("Points: " + demeritPoints);
  }

}

// Example useage :
const speed = 80;
calculateDemeritPoints(speed);
