export function dateFormat(str) {
  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  };

  const date = new Date(str);
  return date.toLocaleString('ru', options);
}
