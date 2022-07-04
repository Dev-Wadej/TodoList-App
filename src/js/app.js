import List from "./models/list";
import Order from './models/Order'
import { elements } from "./views/base";
import { clearView, pagination } from "./views/list.view";
import { orderView, deleteOrderView, updateViewCounter } from "./views/orderView";



// CONTROLLER M
/** Global State of the app
 * - list Object
 * - clicked item to order
 * **/


const state = {};
window.state = state


//--1 Get Item to be rendered to view from the models to the view

const listItem = () => {
        state.listStruc = new List()
        state.listStruc.loadItem()

        //--- Concern with populating the list or say the product showcase of the company
        pagination(state.listStruc.list)

    }
    /// Initializes the Orders model 
state.order = new Order()







//======Updates the counter inside the models
const updateCounter = (id, type) => {
    state.order.updateCounter(id, type)

}





// Event Listener for the adding to the order menu, i.e the right hand side of the setup
elements.list.addEventListener('click', (e) => {

    //--- Basically algorithm to get the dataset stored in the html structure
    const orderGoto = e.target.closest('.cart-card')
    if (orderGoto) {
        const selectedItem = state.listStruc.list.find((el => el.id === +orderGoto.dataset.goto))
        const { image_url, price, id, title } = selectedItem



        //--- Adds item to the order structure
        const orderEachItem = state.order.addItem(id, price, title, image_url)

        //--- Implement the Order view
        if (orderEachItem) {
            orderView(orderEachItem)
        }
    }


})

//================================================
elements.order.addEventListener('click', (e) => {
        if (e.target.closest('.cart-content-delete')) {
            const selectedData = e.target.parentElement.parentElement.parentElement
            if (state.order) state.order.deleteItem(selectedData.dataset.order)
            deleteOrderView(selectedData)
        }

        ////============================================


        let selectedForUpdate;

        //=======Logic for decrement of the order
        if (e.target.closest('.counter-minus')) {
            selectedForUpdate = +e.target.parentElement.parentElement.parentElement.parentElement.dataset.order
            updateCounter(selectedForUpdate, 'dec')

            state.order.order.find((el) => {
                if (el.id === selectedForUpdate) updateViewCounter(el, e.target.nextElementSibling)
            })

        }
        //======= Logic for Increment of the Order
        if (e.target.closest('.counter-plus')) {
            selectedForUpdate = +e.target.parentElement.parentElement.parentElement.parentElement.dataset.order
            updateCounter(selectedForUpdate, 'inc')

            state.order.order.find((el) => {
                if (el.id === selectedForUpdate) updateViewCounter(el, e.target.previousElementSibling)
            })

        }
    })
    /////======== Pagonation of the page  ====
elements.pagesView.addEventListener('click', (e) => {
    const goto = e.target.closest('.pagination')
    if (goto) {
        const gotoNum = goto.dataset.goto
        clearView()
        pagination(state.listStruc.list, gotoNum)
    }
})








////---- Loads the items of concern on window load
window.addEventListener('load', listItem)