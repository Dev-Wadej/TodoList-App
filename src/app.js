import { ui } from './ui';

//////------------Event Listeners
const eventListeners = () => {
    document
        .querySelector('.btn-submit')
        .addEventListener('click', taskSubmitted);
    document
        .querySelector('.todo__tasks')
        .addEventListener('click', itemDeleteSubmit);
    document
        .querySelector('.todo__tasks')
        .addEventListener('click', itemChecked);
    document
        .querySelector('.todo__tasks')
        .addEventListener('click', itemUnchecked);
    document
        .querySelector('.todo__actions--1')
        .addEventListener('click', itemAll);
    document
        .querySelector('.todo__actions--2')
        .addEventListener('click', itemActive);
    document
        .querySelector('.todo__actions--3')
        .addEventListener('click', itemCompleted);
    document
        .querySelector('.todoGo-to')
        .addEventListener('click', () => {
            document.querySelector('#inputtodo').focus();
        });
    document
        .querySelector('.todo__tasks')
        .addEventListener('click', itemDeleteChecked);

    // document
    //     .querySelector('.todo__actions--4')
    //     .addEventListener('click', item);
};

const taskSubmitted = (e) => {
    e.preventDefault();
    const taskTodo = document.querySelector('#inputtodo').value;
    const taskDesc = document.querySelector('#inputdesc').value;
    if (taskDesc && taskTodo) {
        ui.addItems(taskTodo, taskDesc);
        uiClear();
    } else {
        alert('Both fields cannot be empty');
    }
};
const uiClear = () => {
    document.querySelector('#inputtodo').value = '';
    document.querySelector('#inputdesc').value = '';
};
const itemDeleteSubmit = (e) => {
    if (
        e.target.parentElement.classList.contains('todo__action--delete')
    ) {
        // console.log('didididi');
        const idArr = e.target.parentElement.parentElement.id.split('-');
        const idtarget = parseInt(idArr[1]);
        ui.deleteItem(idtarget);
        // console.log(ui.dataStructure.listedTasks);
        // console.log(ui.dataStructure.activeArr);
        e.target.parentElement.parentElement.remove();
    }
    // console.log(document.querySelector('.todo__tasks')[selectedIndex]);
};
const itemDeleteChecked = (e) => {
    if (
        e.target.parentElement.classList.contains(
            'todo__action--delete'
        ) &&
        e.target.parentElement.previousElementSibling.classList.contains(
            'todo__strikethru'
        )
    ) {
        const idArr = e.target.parentElement.parentElement.id.split('-');
        const idtarget = parseInt(idArr[1]);
        ui.deleteItemChecked(idtarget);
    }
};
const itemChecked = (e) => {
    // console.log(e.target.parentElement.nextElementSibling);
    if (
        e.target.parentElement.classList.contains('todo__action--check')
    ) {
        ui.selectedItem(e.target.parentElement.parentElement.id);
        e.target.parentElement.nextElementSibling.style.zIndex = '1';
        e.target.parentElement.nextElementSibling.style.opacity = '1';
        e.target.parentElement.nextElementSibling.nextElementSibling.classList.add(
            'todo__strikethru'
        );
    }
    // if (e.target.parentElement.classList.contains('todo__strikethru')) {
    //     // console.log('Great');
    //     ui.unSelectedItem(e.target.parentElement.parentElement.id);
    // }
    return e.target.parentElement;
};
const itemUnchecked = (e) => {
    if (
        e.target.parentElement.parentElement.classList.contains(
            'todo__completed'
        )
    ) {
        e.target.parentElement.parentElement.nextElementSibling.classList.remove(
            'todo__strikethru'
        );

        // console.log(e.target.parentElement.parentElement.parentElement);
        e.target.parentElement.parentElement.style.zIndex = '-2';
        e.target.parentElement.parentElement.style.opacity = '0';
        ui.unSelectedItem(
            e.target.parentElement.parentElement.parentElement.id
        );

        // console.log(
        //     e.target.parentElement.parentElement.previousElementSibling
        // );
    }
};
const itemAll = (e) => {
    e.preventDefault();
    if (e.target.parentElement.classList.contains('todo__action')) {
        // console.log('Good God');
        e.target.parentElement.classList.remove('todo__action');
    } else if (!e.target.parentElement.classList.contains('todo__action')) {
        e.target.parentElement.classList.add('todo__action');
        repeatedDOM();
        e.target.parentElement.classList.add('todo__action');
        ui.populateItemList(ui.dataStructure.listedTasks);
    }
    // console.log(e.target.parentElement);
};
const itemActive = (e) => {
    // if (e.target.parentElement.classList.contains('todo__action')) {
    //     console.log();
    // }
    e.preventDefault();

    if (e.target.parentElement.classList.contains('todo__action')) {
        // console.log('Good God');
        e.target.parentElement.classList.remove('todo__action');
    } else if (!e.target.parentElement.classList.contains('todo__action')) {
        e.target.parentElement.classList.add('todo__action');
        repeatedDOM();
        e.target.parentElement.classList.add('todo__action');
    }
    ui.populateItemList(ui.notSelectedYet());
};
const itemCompleted = (e) => {
    e.preventDefault();
    let liDOMS = document.getElementsByClassName('todo__task');

    liDOMS = Array.from(liDOMS);
    let activeRender = ui.dataStructure.activeArr;

    // ui.selectedItem(liDOMS, e.target.parentElement);

    // console.log(liDOMS);
    if (e.target.parentElement.classList.contains('todo__action')) {
        // console.log('Good God');
        e.target.parentElement.classList.remove('todo__action');
    } else if (!e.target.parentElement.classList.contains('todo__action')) {
        e.target.parentElement.classList.add('todo__action');
        repeatedDOM();
        e.target.parentElement.classList.add('todo__action');
        ui.populateItemList(activeRender);
    }
};
const repeatedDOM = () => {
    let activeState = document.querySelectorAll('.todo__action');
    activeState = Array.from(activeState);
    activeState.forEach((eachItem) => {
        // console.log(eachItem);
        eachItem.classList.remove('todo__action');
    });
};
ui.getTasks();
eventListeners();