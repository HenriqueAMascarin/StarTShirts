export function formatCurrency(value: number) {
  const newValue = '$' + value?.toFixed(2);

  return newValue;
}
