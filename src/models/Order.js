export default class Order {
    constructor() {
        this.order = []
    }



    addItem(id, price, title, image) {

        const orderItem = {
                id,
                price,
                title,
                image,
                count: 1,
                newPrice: price

            }
            //=====Checks to see if the item is in the array already
        if (this.order.find(el => el.id === orderItem.id)) {
            return
        }
        this.order.push(orderItem)
        return orderItem

    }

    deleteItem(id) {
        const index = this.order.findIndex(el => el.id === id);
        this.order.splice(index, 1);

    }
    updateCounter(id, type) {
        const item = this.order.find(el => {
            if (el.id === id) {
                if (type === 'inc') {
                    el.count += 1
                } else if (type === 'dec' && el.count > 1) {
                    el.count -= 1
                }
                this.updateAmount(id)
            }
        })
    }
    updateAmount(id) {
        const item = this.order.find(el => {
            if (el.id === id) {
                const priceOnly = +el.price.replace('$', '')
                el.newPrice = `$${(priceOnly * el.count).toFixed(2)}`
            }

        })
    }

}