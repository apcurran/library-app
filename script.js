let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];

function BookFactory(title, author, numPages, read) {

    function tellInfo() {
        return (`${title} by ${author}, ${numPages} pages, ${read}.`)
    }
    
    return {
        title,
        author,
        numPages,
        read,
        tellInfo
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
    const newBook = BookFactory(currentTitle, currentAuthor, totalPages, finished);
    addBookToLibrary(newBook);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    render();
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
            <td><button class="read-status">${book.read}</button></td>
            <td><button class="delete">delete</button></td>`;
        bookTable.appendChild(row);
    });
}

// Toggle read status
bookTable.addEventListener("click", (event) => {
    let currentEl = event.target;
    if(currentEl.className === "read-status" && currentEl.textContent === "Read") {
        currentEl.textContent = "Not Read";
    } else if(currentEl.className === "read-status") {
        currentEl.textContent = "Read";
    }
});

// Delete button for rows
bookTable.addEventListener("click", (event) => {
    let currentElClass = event.target.parentElement.parentElement.className;
    if(event.target.className === "delete") {
        myLibrary.splice(currentElClass, 1);
        localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
        myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
        render();
    }
});

// Invoke render function to show example books at the start

// const example1 = new Book("A Tale of Two Cities", "Charles Dickens", 489, "Read");
// const example2 = new Book("The Picture of Dorian Gray", "Oscar Wilde", 367, "Read");

// addBookToLibrary(example1);
// addBookToLibrary(example2);

render();