function calculateNumber(var1, var2) {
  return Math.round(var1) + Math.round(var2);
}
function divideBy(var1, var2) {
  if (var2 === 0) {
    return 'Error';
  }
  return Math.round(var1) / Math.round(var2);
}