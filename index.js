let id = 0;
//this creates a new row that shows each category of that exercise input
document.getElementById('add').addEventListener('click', () => {
    //addEventlistener is a method that adds the value to the designated row
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    // creates a row on the bottom of the first table
    row.setAttribute('id',`item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-exercise').value;
    row.insertCell(1).innerHTML = document.getElementById('new-set').value;
    row.insertCell(2).innerHTML = document.getElementById('new-rep').value;
    row.insertCell(3).innerHTML = document.getElementById('new-date').value;
    // gets the element id of that value and insert it to its cell number
    let actions = row.insertCell(4);
    // delete button
    actions.appendChild(deleteCellButton(id++));
    //adds a new delete button on each row 
    document.getElementById('new-exercise').value = '';
    document.getElementById('new-set').value = '';
    document.getElementById('new-rep').value = '';
    //resets everything for easy user experience
})

// created a function for the delete button
function deleteCellButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML ='Delete';
    //created a delete button using js instead of going to the html
    btn.onclick = () => {
        let deleteCellButton = document.getElementById(`item-${id}`);
        deleteCellButton.parentNode.removeChild(deleteCellButton);
    }
    return btn;
    // this is an onclick method that every time a new row is 
    //implemented the button has the ability to delete its self
}