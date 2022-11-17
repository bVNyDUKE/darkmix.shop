export function formatPrice(price:number){
    return (price / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

export function formatRegularPrice (discount: any, price:number){
    const numDiscount = (discount !== null ? Number(discount.substring(0, discount.length - 1)) : 0)
    const decimal = (numDiscount / 100) + 1;

    return formatPrice(price * decimal);
}