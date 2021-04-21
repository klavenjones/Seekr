export function currencyFormatter(number) {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  console.log('FORMATTER', formatter.format(number))
  return formatter.format(number)
}
