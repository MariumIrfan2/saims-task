function add() {
    var parent = document.getElementById('parent');

    var p = document.createElement('P');
    var text = document.getElementById('inp').value;
    var txtNode = document.createTextNode(text);

    p.appendChild(txtNode)

    parent.appendChild(p)

    document.getElementById('inp').value = "";

    var button = document.createElement('BUTTON');
    var btntxt = "Delete";
    btntxt = document.createTextNode(btntxt);

    button.appendChild(btntxt);

    button.setAttribute('onclick', 'remove(this)')

    p.appendChild(button)

    var editButton = document.createElement('BUTTON');
    var edittxt = "Edit";
    edittxt = document.createTextNode(edittxt);

    editButton.appendChild(edittxt);

    editButton.setAttribute('onclick', 'editval(this)')

    p.appendChild(editButton);

}


function remove(element) {
    element.parentNode.remove()
    console.log(element)
}
function delAll() {
    var parent = document.getElementById('parent');

    parent.innerHTML = "";

}

function editval(element) {
    var val = element.parentNode.firstChild.nodeValue;

    console.log(element.parentNode.firstChild.nodeValue);
    var newval = prompt("Enter new value", val);

    element.parentNode.firstChild.nodeValue = newval;
}
