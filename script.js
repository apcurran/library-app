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

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
console.log(book1);
console.log(book1.tellInfo());

function addBookToLibrary() {

}

function render() {
    
}

