class UI {
    constructor(id, name, taskdesc, currentItemSelected) {
        this.id = id;
        this.name = name;
        this.desc = taskdesc;
        this.currentItemSelected = currentItemSelected;
    }
    dataStructure = {
        // return {
        listedTasks: [],
        currentItem: false,
        activeArr: [],
        notActiveArr: [],
        remainingTask: [],
        // };
    };
    //--------Fetch items from data structure
    getTasks() {
        const taskArr = this.dataStructure.listedTasks;
        this.populateItemList(taskArr);
    }
    populateItemList(taskArr) {
        let html = '';
        taskArr.forEach((task) => {
            html += ` <li class="todo__task" id="item-${task.id}">
            <div class="todo__action--check" data-id="1">
                <svg width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m6.375 7.083 2.57 1.927c.148.112.358.09.48-.05l4.742-5.418"
        stroke="#001F25"
        stroke-width=".708"
        stroke-linecap="round"
      />
      <path
        d="M14.875 8.5a6.375 6.375 0 1 1-4.725-6.158"
        stroke="#001F25"
        stroke-width=".708"
        stroke-linecap="round"
      />
    </svg>
            </div>
            <div class="todo__completed">
                <svg width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="9.5"
        cy="9.5"
        r="7.125"
        fill="#001F25"
      />
      <path
        d="m7.125 7.917 2.903 2.177c.149.111.358.09.48-.05l5.325-6.086"
        stroke="#fff"
        stroke-width=".316"
        stroke-linecap="round"
      />
      <path
        d="M16.625 9.5a7.125 7.125 0 1 1-5.281-6.882"
        stroke="#fff"
        stroke-width=".316"
        stroke-linecap="round"
      />
    </svg>
            </div>

            <div class="todo__text">
                ${task.name}
            </div>
            <div class="todo__action--delete">
                <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.083 3.719v.177h2.834v-.177a1.417 1.417 0 1 0-2.834 0Zm-.885.177v-.177a2.302 2.302 0 1 1 4.604 0v.177h3.985a.443.443 0 1 1 0 .885h-1.034l-.708 8.45a2.568 2.568 0 0 1-2.559 2.352H6.514a2.567 2.567 0 0 1-2.559-2.353l-.708-8.449H2.214a.443.443 0 0 1 0-.885h3.984Zm-1.36 9.26a1.682 1.682 0 0 0 1.676 1.542h3.972a1.682 1.682 0 0 0 1.677-1.542l.702-8.375h-8.73l.703 8.375Zm2.777-5.984a.443.443 0 1 0-.886 0v5.135a.443.443 0 0 0 .886 0V7.172Zm2.213-.443c.245 0 .443.199.443.443v5.135a.443.443 0 1 1-.886 0V7.172c0-.244.199-.443.443-.443Z"
        fill="#001F25"
      />
    </svg>
            </div>
        </li>`;
        });
        //insert list items
        document.querySelector('.todo__tasks').innerHTML = html;
    }
    addItems(taskTodo, taskDesc) {
        let ID;
        // Create ID
        if (this.dataStructure.listedTasks.length > 0) {
            ID =
                this.dataStructure.listedTasks[
                    this.dataStructure.listedTasks.length - 1
                ].id + 1;
        } else {
            ID = 0;
        }
        let currentItemSelected = false;

        // Create new item
        let newItem = new UI(ID, taskTodo, taskDesc, currentItemSelected);

        console.log(this.dataStructure);

        // Add to items array
        this.dataStructure.listedTasks.push(newItem);

        this.addListItem(newItem);
    }
    addListItem(task) {
        const li = document.createElement('li');
        li.className = 'todo__task';
        li.id = `item-${task.id}`;
        li.innerHTML = `
        <div class="todo__action--check" data-id="1">
            <svg width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m6.375 7.083 2.57 1.927c.148.112.358.09.48-.05l4.742-5.418"
    stroke="#001F25"
    stroke-width=".708"
    stroke-linecap="round"
  />
  <path
    d="M14.875 8.5a6.375 6.375 0 1 1-4.725-6.158"
    stroke="#001F25"
    stroke-width=".708"
    stroke-linecap="round"
  />
</svg>
        </div>
        <div class="todo__completed">
            <svg width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle
    cx="9.5"
    cy="9.5"
    r="7.125"
    fill="#001F25"
  />
  <path
    d="m7.125 7.917 2.903 2.177c.149.111.358.09.48-.05l5.325-6.086"
    stroke="#fff"
    stroke-width=".316"
    stroke-linecap="round"
  />
  <path
    d="M16.625 9.5a7.125 7.125 0 1 1-5.281-6.882"
    stroke="#fff"
    stroke-width=".316"
    stroke-linecap="round"
  />
</svg>
        </div>

        <div class="todo__text">
            ${this.shortenText(task.name, 40)}
        </div>
        <div class="todo__action--delete">
            <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7.083 3.719v.177h2.834v-.177a1.417 1.417 0 1 0-2.834 0Zm-.885.177v-.177a2.302 2.302 0 1 1 4.604 0v.177h3.985a.443.443 0 1 1 0 .885h-1.034l-.708 8.45a2.568 2.568 0 0 1-2.559 2.352H6.514a2.567 2.567 0 0 1-2.559-2.353l-.708-8.449H2.214a.443.443 0 0 1 0-.885h3.984Zm-1.36 9.26a1.682 1.682 0 0 0 1.676 1.542h3.972a1.682 1.682 0 0 0 1.677-1.542l.702-8.375h-8.73l.703 8.375Zm2.777-5.984a.443.443 0 1 0-.886 0v5.135a.443.443 0 0 0 .886 0V7.172Zm2.213-.443c.245 0 .443.199.443.443v5.135a.443.443 0 1 1-.886 0V7.172c0-.244.199-.443.443-.443Z"
    fill="#001F25"
  />
</svg>
        </div>
    `;
        document
            .querySelector('.todo__tasks')
            .insertAdjacentElement('beforeend', li);
    }
    getCurrentItem() {
        return this.dataStructure.currentItem;
    }
    deleteItem(id) {
        const ids = this.dataStructure.listedTasks.map((item) => {
            return item.id;
        });
        const index = ids.indexOf(id);
        this.dataStructure.listedTasks.splice(index, 1);
        // console.log(this.dataStructure.listedTasks);
    }
    shortenText(text, max) {
        return text && text.length > max ?
            text.slice(0, max).split(' ').slice(0, -1).join(' ') + '...' :
            text;
    }
    selectedItem(val) {
        let id = parseInt(val.split('-')[1]);

        const ids = this.dataStructure.listedTasks.map((item) => {
            return item.id;
        });

        // let activeArr = [];
        this.dataStructure.listedTasks.map((eachItem) => {
            if (id === eachItem.id) {
                if (!this.dataStructure.activeArr.includes(eachItem)) {
                    this.dataStructure.activeArr.push(eachItem);
                }
                const index = ids.indexOf(id);
                // console.log(this.dataStructure.activeArr);
            }
        });
        // console.log(ids);
        if (val) {
            this.dataStructure.currentItem = true;
            // console.log(this.dataStructure);
        }
    }
    unSelectedItem(val) {
        let id = parseInt(val.split('-')[1]);

        const ids = this.dataStructure.listedTasks.map((item) => {
            return item.id;
        });

        // let activeArr = [];
        this.dataStructure.listedTasks.map((eachItem) => {
            if (id === eachItem.id) {
                const index = ids.indexOf(id);
                this.dataStructure.activeArr.splice(index, 1);
                console.log(this.dataStructure.activeArr);
            }
        });
    }
    notSelectedYet() {
        // const items = this.dataStructure.listedTasks.map((eachItem) => {
        //     return eachItem
        // })
        // const selectedItems = this.dataStructure.activeArr.map((eachItem) => {
        //     if (eachItem)
        // })
        const intersection = this.dataStructure.listedTasks.filter(
            (el) => !this.dataStructure.activeArr.includes(el)
        );
        return intersection;
    }
}
export const ui = new UI();