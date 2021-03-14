const currency = [
    { name: 'USD', value: '$' },
    { name: 'EUR', value: '€' },
  ]
  
  function getCurrency(name) {
    const currentCerrency = currency.filter(o => o.name === name)[0]
    if (currentCerrency) {
      return currentCerrency.value
    }
  }
  
  export function getPrice(name, price) {
    const currency = getCurrency(name)
  
    if (currency) {
      return `${currency}${price}`
    } else {
      return `${price} ${name}`
    }
  }
  
  export function getDescription(title) {
    if (title.length > 50) {
      return `${title.substring(0, 50)}_`
    }
    return title
  }

  export function getClassName(stock) {
    if (stock < 10) {
      return 'item-quantity level-low'
    }
  
    if (stock < 20) {
      return 'item-quantity level-medium'
    }
  
    return 'item-quantity level-high'
  }
  

   
  export default getPrice