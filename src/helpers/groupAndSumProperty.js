export function groupAndSumByProperty(arr) {
  const grouped = {};

  arr.forEach((item) => {
    const target_date = item.target_date;

    if (!grouped[target_date]) {
      grouped[target_date] = {
        target_date: target_date,
        delivery_qty: 0,
        recommendation: 0,
        demand_qty: 0,
      };
    }
    grouped[target_date].delivery_qty += item.delivery_qty || 0;
    grouped[target_date].recommendation += item.recommendation || 0;
    grouped[target_date].demand_qty += item.demand_qty;
  });

  return Object.values(grouped);
}
