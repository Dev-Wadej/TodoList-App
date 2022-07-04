import { elements } from "./base"



///=====clears the view before rendering to the screen
export const clearView = () => {
    elements.list.innerHTML = ''
    elements.pagesView.innerHTML = ''
}

/// This part here takes in each item and does the rendering to the user interface
const renderItems = (item) => {
    let html = `
            <div class="cart-card" data-goto="${item.id}">
                    <img class="cart-img" src="${item.image_url}" alt="">
                    <h2 class="card-title">${item.title}</h2>
                    <small>${item.price}</small>
            </div
`
    elements.list.insertAdjacentHTML('beforeend', html)

}
const createButton = (page, type) => `
    <button class=" pagination btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
    <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
    <i class="bi bi-arrow-${type=== 'prev' ? 'left' : 'right'}-short"></i>
    </button>
    `

///====== Logic  that renders the required button to the user interface
const renderButtons = (totalPages, page) => {
    let button;
    if (page === 1 && totalPages > 1) {
        //next page
        button = createButton(page, 'next')
    } else if (page === totalPages && page > 1) {
        //prev page
        button = createButton(page, 'prev')

    } else if (page < totalPages) {
        //both buttons
        button = `${createButton(page, 'next')} ${createButton(page, 'prev')} `

    }
    document.querySelector('.paginate').insertAdjacentHTML('beforeend', button)

}

////=======  Pagination of just 6 items per page and as well renders the list to  the listView
export const pagination = (contents, page = 1, resPerPage = 6) => {
    const pages = Math.ceil(contents.length / resPerPage)
    console.log(page)
    const start = (+page - 1) * resPerPage
    const end = (+page * resPerPage)


    contents.slice(start, end).forEach(renderItems)

    renderButtons(pages, +page)
}