var but = document.getElementById('addElem');
but.addEventListener('click', function (e) {
    var list = document.getElementById('list');
    var element = document.createElement('li');
    element.innerHTML = 'item ' + list.getElementsByTagName('li').length;
    list.appendChild(element);
});