export const formatPrice = (priceWithDecimals) => {
    if (!priceWithDecimals) {
        return 'Please add a product to cart'
    }

    const realPrice = parseInt(priceWithDecimals)
    return realPrice.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
    })
}