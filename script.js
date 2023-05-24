const booklistElement = document.getElementById('booklist');

async function fetchBooks(){
    try{
        const response = await fetch('https://www.anapioficeandfire.com/api/books');
        const books = await response.json();
        
        books.slice(0, 50).forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.innerHTML = `
            <h3>${book.name}</h3>
            <p>ISBN:${book.isbn}</p>
            <p>Pages: ${book.numberOfPages}(</p>
            <p>Authors: ${book.authors.join(',')}</p>
            <p>Publisher: ${book.publisher}</p>
            <p>Released Date: ${book.released}</p>
            <p>Characters: ${book.characters.slice(0, 5).join(',')}</p>
            `;
            booklistElement.appendChild(bookElement);

        });

    }catch(error) {
        console.error('Error:', error);
    }
}
fetchBooks();