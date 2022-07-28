let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', () => {
    const taskNameLength = inputField.value.length

    if ( inputField && taskNameLength > 5 ) {
        var taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');

        var paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = inputField.value;

        var paragraphText = document.createElement('p');
        paragraphText.classList.add('task-details');
        paragraphText.innerText = 'here';
        paragraphText.style.display = 'none'

        taskContainer.appendChild(paragraph);

        var actionsContainer = document.createElement('div');
        actionsContainer.classList.add('actions');
        
        var editItem = document.createElement('span');
        editItem.classList.add('editItem');

        var moveUp = document.createElement('span');
        moveUp.classList.add('moveUp');

        var moveDown = document.createElement('span');
        moveDown.classList.add('moveDown');

        var deleteItem = document.createElement('span');
        deleteItem.classList.add('deleteItem');

        actionsContainer.append(editItem, moveUp, moveDown, deleteItem);
        taskContainer.appendChild(actionsContainer, paragraphText);
        toDoContainer.appendChild(taskContainer);

        inputField.value = "";
        paragraph.addEventListener('click', () => {
            paragraph.style.textDecoration = 'line-through';
            paragraph.style.color = 'var(--items-active)';
            taskContainer.style.border = '1px solid var(--items-active)'; 
        })

        newInputPopup = () => {

            var overLay = document.createElement('div');
            overLay.classList.add('overlay');

            var popUp = document.createElement('div');
            popUp.classList.add('to-do__edit')

            var editInput = document.createElement('input');
            editInput.id = 'editField';
            editInput.placeholder = 'Edit task'

            let editBtn = document.createElement('a');
            editBtn.id = 'editTask';
            editBtn.innerText = 'EDIT'

            popUp.append(editInput, editBtn);
            overLay.appendChild(popUp);
            document.body.appendChild(overLay)

            editBtn.addEventListener( 'click', () => {
                overLay.style.display = 'none';
                //i can grab the edited text and hide the overylay thereafter but assiging the new value to the current text is challenging me
            })
        }

        editItem.addEventListener('click', () => {
            newInputPopup();
        })

        changeOrder = () => {
            var upLink = document.querySelectorAll(".moveUp");
            var downLink = document.querySelectorAll(".moveDown");
            var wrapper = taskContainer;
        
            for (var i = 0; i < upLink.length; i++) {
                upLink[i].addEventListener('click', () => {
                    (wrapper.previousElementSibling) ? wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling) : '';
                });
            }

            for (var i = 0; i < downLink.length; i++) {
                downLink[i].addEventListener('click', () => {
                (wrapper.nextElementSibling) ? wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper) : '';
                });
            }
        }
        changeOrder()

        deleteItem.addEventListener('click', () => {
            toDoContainer.removeChild(taskContainer);
        })
    }

    else {
        inputField.style.border = '2px solid var(--items-hover)'
        alert('Enter a task name, make it longer than 5 characters')
    }
})