//steps-
// 1. Select all elements
const form = document.querySelector("#new-item-form")
const list = document.querySelector("#list")
const input = document.querySelector("#item-input")

// 2. When I submit the form add a new element
form.addEventListener("submit", e => {      //when submit is clicked
    e.preventDefault()  //refresh prevention
    console.log("Form Input= "+input.value)//testing input

  //1.create a new item a div
  const Newitem = document.createElement('div') //create a div
  Newitem.innerText = input.value   //set text in that div
  Newitem.classList.add("list-item")    //adds the div to that class

  console.log(Newitem) //gives a new div with classname listItem

  //2. add that item/div to the html list
  list.appendChild(Newitem) //appends New item to the page 

  //3. clear input
  input.value = ""  //puts a empty string in field

  //4. set a event listener to delete item when clicked on it
  Newitem.addEventListener('click', () =>{  //when clicked
    Newitem.remove()    //removes the item
  })

  //the strikethrough is handled using css
})