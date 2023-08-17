export function isEmpty(value: string | number) {
  return value === undefined || value === null || value === "";
}

export const returnZeroIfEmpty = (recommendation: number) => {
  if (isEmpty(recommendation)) {
    return 0;
  } else return recommendation;
};
