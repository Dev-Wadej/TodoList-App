import { elements } from "./base"
export const orderView = (orderItem) => {
    let html = `
    <div class="cartout-cards" data-order="${orderItem.id}">
    <div class="top-cartout">
        <h5 class="cartout-title">${orderItem.title}</h5>
        <div class="cart-content-delete"><svg width="18" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.575 7.717s-.543 6.735-.858 9.572c-.15 1.355-.987 2.149-2.358 2.174-2.61.047-5.221.05-7.83-.005-1.318-.027-2.141-.831-2.288-2.162-.317-2.862-.857-9.58-.857-9.58M17.958 4.49H1M6 8l1.153 10.919M12.554 7.91l-.924 10.94M14.691 4.489a1.648 1.648 0 0 1-1.615-1.324l-.243-1.216A1.28 1.28 0 0 0 11.596 1H7.363a1.28 1.28 0 0 0-1.237.949l-.243 1.216a1.648 1.648 0 0 1-1.615 1.324" stroke="#E10000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    </div>
    <div class="middle-cartout">
        <img src="${orderItem.image}" alt="${orderItem.title}" class="cartout-img">
        <p class="cart-content"> -${orderItem.title}</p>
        <div class="cartout-quantity">
            <h5>Quantity</h5>
            <div class="counter">
                <svg class="counter-minus" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.405 12.9h-8.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h8.8c.5 0 .9.4.9.9s-.4.9-.9.9ZM4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z" fill="#E15113"/></svg>
                <span class="counter-num">1</span>
                <svg class="counter-plus" class width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill="#E15113"><path d="M17.305 11.941c0 .5-.4.9-.9.9h-3.6v3.4c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.4h-3.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.4v-3.6c0-.5.4-.9.9-.9s.9.4.9.9v3.6h3.6c.5 0 .9.4.9.9ZM4 .842h16v-2H4v2Zm19 3v16h2v-16h-2Zm-3 19H4v2h16v-2Zm-19-3v-16h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2Zm-3-19a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2Zm-16-2a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>

            </div>
        </div>
    </div>
    <div class="bottom-cartout">
        <div class="check-mark"> <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.162 1.985c-3.296 2.852-6.084 5.567-8.637 9.11-1.126 1.562-2.378 3.401-3.196 5.138-.467.92-1.31 2.36-1.596 3.742-1.57-1.46-3.258-3.119-4.983-4.418-1.23-.925-4.773.962-3.331 2.047C3.004 19.548 5.153 21.97 7.667 24c1.052.849 3.382-.994 3.93-1.767 1.798-2.547 2.043-5.66 3.354-8.438 2-4.249 5.547-7.74 9.05-10.77C26.322.86 23.925.46 22.165 1.985" fill="#E15113"/></svg></div>
        <div class="cart-amount">${orderItem.newPrice}</div>
    </div>
</div>
    `
        /// Insert Adjascent HTML here

    elements.order.insertAdjacentHTML('beforeend', html)
}
export const deleteOrderView = (item) => {
    item.remove()
}
export const updateViewCounter = (el, target) => {
    target.parentElement.parentElement.parentElement.nextElementSibling.querySelector('.cart-amount').textContent = el.newPrice
    target.textContent = el.count

}