export function getTotal(data: any[] = [], field: string) {
  return data.reduce((total, curr) => {
    return (total += curr[field]);
  }, 0);
}
