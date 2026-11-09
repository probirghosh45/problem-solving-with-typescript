function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}


function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } 
  else if (typeof value === "number") {
    return value * 10;
  } 
  else {
    return value ? "Active" : "Inactive";
  }
}


function formatCoordinate(
  coordinate: readonly [number, number, string]
): string {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}