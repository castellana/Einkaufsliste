// Schreibe eine Funktion, die beim Anklicken des Buttons neues Listenelement erstellt. Nutze: querySelector() / addEventListener() / createElement() / createTextNode() / appendChild() / createListElement()
// Sorge dafür, dass beim betätigen der ENTER-Taste ebenfalls ein Listenelement erstellt wird. / Suche nach keycode.


const input = document.getElementById('userinput');
const ul = document.querySelector('ul')

const addItem = () => {
    let li = document.createElement('li')
    let newItem = input.value
    li.append(newItem)
    ul.append(li)
    input.value = "" 
}
document.getElementById('enter').addEventListener('click', addItem)


document.addEventListener('keydown', event => console.log(event));



document.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
    console.log('Enter');
    addItem();
    }
})
