// SCROLLING BOOKS
// --------------------------------------------------------------------
// JavaScript code to add 'active' class to the centered book on scroll
// thank you chatgpt for helping with this math LOL


document.addEventListener('DOMContentLoaded', function() {
    const bookshelfBox = document.getElementById('bookshelf-box');
    const books = document.querySelectorAll('.book');

    // make the fifth season the first active book
    bookshelfBox.scrollLeft = document.getElementById('fifth-season').offsetLeft - (bookshelfBox.offsetWidth / 2) + (document.getElementById('fifth-season').offsetWidth / 2);

    function updateActiveBook() {
        let closestBook = null;
        let closestDistance = Infinity;

        // find which book is closest to the center
        books.forEach(book => {
            const bookRect = book.getBoundingClientRect();
            const bookshelfBoxRect = bookshelfBox.getBoundingClientRect();
            const bookCenterX = bookRect.left + bookRect.width / 2;
            const bookshelfBoxCenterX = bookshelfBoxRect.left + bookshelfBoxRect.width / 2;

            const distance = Math.abs(bookCenterX - bookshelfBoxCenterX);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestBook = book;
            }
        });

        //  change new center book to be active and the rest to no longer be
        books.forEach(book => book.classList.remove('active'));
        if (closestBook) {
            closestBook.classList.add('active');
        }
    }
    bookshelfBox.addEventListener('scroll', updateActiveBook);
    window.addEventListener('resize', updateActiveBook);

    //set the first active book
    updateActiveBook();
});
