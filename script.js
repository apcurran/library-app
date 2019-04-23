let myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.tellInfo = function() {
        return (`${title} by ${author}, ${numPages} pages, ${read}.`)
    } 
}

// Example books 1 & 2 for testing

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "no");
const book2 = new Book("Harry Potter", "J.K. Rowling", 316, "yes");

function addBookToLibrary() {
    //myLibrary.push(book1);
    //myLibrary.push(book2);
    const addForm = document.forms["add-book"];
    addForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const currentTitle = addForm.querySelector("#title").value;
        console.log(currentTitle);
        const currentAuthor = addForm.querySelector("#author").value;
        const totalPages = addForm.querySelector("#num-pages").value;
        const finished = addForm.querySelector("#read").value;

        // Create a new book with current value.
        const newBook = new Book(currentTitle, currentAuthor, totalPages, finished);
        myLibrary.push(newBook);
    })
}

let bookTable = document.getElementById("book-list"); 

function render() {
    myLibrary.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.numPages}</td>
            <td>${book.read}</td>`;
        bookTable.appendChild(row); 
    });
}

const addButton = document.getElementById("add-btn");
addButton.addEventListener("click", (event) => {
    addBookToLibrary();
    render();
    console.log(event);
});