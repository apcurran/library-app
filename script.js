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

const addForm = document.forms["add-book"];
addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let currentTitle = addForm.querySelector("#title").value;
    let currentAuthor = addForm.querySelector("#author").value;
    let totalPages = addForm.querySelector("#num-pages").value;
    let finished = addForm.querySelector("#read").value;

    // Create a new book with current value.
    const newBook = new Book(currentTitle, currentAuthor, totalPages, finished);
    addBookToLibrary(newBook);
    render();

/*     // Clear inputs
    currentTitle = "Test";
    console.log(currentTitle);
    currentAuthor = "";
    totalPages = ""; */
})

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const bookTable = document.getElementById("book-list");

function render() {
    bookTable.innerHTML = "";
    myLibrary.forEach((book, index) => {
        const row = document.createElement("tr");
        row.setAttribute("class", index);
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.numPages}</td>
            <td>${book.read}</td>
            <td><span class="delete">delete</span></td>`;
        bookTable.appendChild(row); 
    });
}

// Delete button for rows
bookTable.addEventListener("click", (event) => {
    let currentElClass = event.target.parentElement.parentElement.className;
    if(event.target.className === "delete") {
        myLibrary.splice(currentElClass, 1);
        render();
    }
});

// Invoke render function to show example books at the start

const example1 = new Book("A Tale of Two Cities", "Charles Dickens", 489, "yes");
const example2 = new Book("The Picture of Dorian Gray", "Oscar Wilde", 367, "yes");

addBookToLibrary(example1);
addBookToLibrary(example2);

render();