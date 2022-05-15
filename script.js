let books = [
  {
		title: "Blackout",
		price: 50,
		author: "Dhonielle Clayton",
		dateOfPurchase: '2021-03-10'
	},
	{
		title: "Tiny Pretty Things",
		price: 75,
		author: "Sona Charaipotra",
		dateOfPurchase: '2022-01-19'
	},
	{
		title: "Beyond the End of the World",
		price: 80,
		author: "Amie Kaufman",
		dateOfPurchase: '2020-03-19'
	},
	{
		title: "Here’s to Us",
		price: 50,
		author: "Becky Albertalli",
		dateOfPurchase: '2022-02-19'
	},
	{
		title: "Yes No Maybe So",
		price: 25,
		author: "Becky Albertalli",
		dateOfPurchase: '2022-03-11'
	},
	{
		title: "Hungry Hearts",
		price: 130,
		author: "Caroline Tung Richmond",
		dateOfPurchase: '2021-03-19'
	}
]

let titleInput = document.getElementById('title-input')
let authorInput = document.getElementById('author-input')
let priceInput = document.getElementById('price-input')
let dateInput = document.getElementById('date-input')
let createButton = document.getElementById('create-button')
let tableBody = document.getElementById('books-table-body')
//la linia 47, foloseste functia getElementById pentru a prelua elementul cu id-ul "total price" si asigneaza-l variabilei nou create numita totalPriceSpan
let totalPriceSpan = document.getElementById('total-price')


function create() {
	let newBook = {}
	newBook.title = titleInput.value
	newBook.author = authorInput.value
	newBook.price = parseInt(priceInput.value)
	newBook.dateOfPurchase = dateInput.value
	books.push(newBook)
  console.log(newBook)
	insertBookInTable(newBook)
}

function insertBookInTable(book) {
	let newRow = document.createElement("tr")

	let newTitleCell = document.createElement("td")
	newTitleCell.innerHTML = book.title
	newRow.appendChild(newTitleCell)

	let newAuthorCell = document.createElement("td")
	newAuthorCell.innerHTML = book.author
	newRow.appendChild(newAuthorCell)

	let newPriceCell = document.createElement("td")
	newPriceCell.innerHTML = book.price
	newRow.appendChild(newPriceCell)

	let newDateOfPurchaseCell = document.createElement("td")
	newDateOfPurchaseCell.innerHTML = book.dateOfPurchase
	newRow.appendChild(newDateOfPurchaseCell)

	tableBody.appendChild(newRow)

  //la linia 82, updateaza proprietatea innerHtml a variabilei totalPriceSpan cu rezultatul apelului functiei getTotalPrice()
  totalPriceSpan.innerHTML = getTotalPrice()
  
}

function read() {
	for (let i = 0; i < books.length; i++) {
		insertBookInTable(books[i])
	}
}

//creaza functia cu numele getTotalPrice, care nu primeste niciun parametru si care returneaza pretul total al cartilor din variabila globala books
function getTotalPrice(){
  let sum = 0;
  for (let i = 0; i < books.length; i++) {
		sum += books[i].price
	}
  return sum
}

read()

createButton.addEventListener("click", create)