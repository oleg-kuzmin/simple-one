export function getDateToday() {
  const today = new Date();

  const year = String(today.getFullYear());
  const month = String(today.getMonth() + 1);
  const day = String(today.getDate());

  const res = `${year}-${month}-${day}`;
  return res;
}
