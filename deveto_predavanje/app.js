// const banner = document.getElementById("page-banner");
//
// console.log(banner);
//
// const bookList = document.getElementById("book-list");
//
// console.log(bookList);
//
// const titles = document.getElementsByClassName("title");
//
// console.log(titles);
//
// const arr = [1,2,3];
// arr.forEach((element) => {
//     console.log(element);
// })
//
// Array.from(titles).forEach(element => {
//     console.log(element);
// })
//
// const listOfLis = document.getElementsByTagName('li');
//
// console.log(listOfLis);
//
// console.log(Array.isArray(listOfLis));
// console.log(Array.isArray(Array.from(listOfLis)));
//
// const secondLiElem = document.querySelector("#book-list li:nth-child(2)");
//
// console.log(secondLiElem);
//
// const books = document.querySelectorAll("#book-list li span.name");
//
// console.log(books);
//
// books.forEach(book => {
//     console.log(book);
//     book.textContent += ' - Marko Markovic';
// })
//
// const bookList = document.querySelector("#book-list");
//
// console.log(bookList.innerHTML);
//
// bookList.innerHTML += "<p>This is a test message</p>";
//
// const pageBanner = document.querySelector("#page-banner");
//
// console.log(pageBanner.nodeType);
//
// console.log(pageBanner.nodeName);
//
// const bookList = document.querySelector("#book-list");
//
// console.log(bookList.parentNode);
// console.log(bookList.parentElement);
//
//
// console.log(bookList.children);
// // console.log(bookList.parentElement);
// console.log(bookList.parentElement.parentElement);
// console.log(Array.from(bookList.children).forEach(child => {
//     console.log(child.children);
// }));
//
// console.log(bookList.children[1].children[0].nextElementSibling);
// EVENTS

// const h2 = document.querySelector("#book-list h2");
//
// h2.addEventListener('click', (event) => {
//     console.log(event.target);
// })
//
// const deleteBtns = document.querySelectorAll("#book-list .delete");
//
// console.log(deleteBtns);
//
// deleteBtns.forEach((deleteBtn) => {
//     deleteBtn.addEventListener('click', (event) => {
//         console.log(event.target);
//         let li = event.target.parentElement;
//         event.target.parentElement.parentElement.removeChild(li);
//     });
// })
//
// const linkedInLink = document.querySelector("#linkedin-link");
//
// linkedInLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('Prevented event.')
// });

const list = document.querySelector("#book-list ul");

list.addEventListener('click', (e) => {
    if(e.target.className === 'delete') {
        const li = e.target.parentElement;
        console.log("We successfully deleted this element: ", li);
        list.removeChild(li);
    }
});

console.log(document.forms);

const addElement = document.forms['add-book'];

console.log(addElement);

addElement.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    let textInput = form.querySelector("input[type='text']")
    console.log(textInput);
    let value = textInput.value;

    const li = document.createElement('li');
    const content = document.createElement('span');
    const deleteBtn = document.createElement('span');

    content.textContent = value;
    deleteBtn.textContent = 'delete';

    // content.style.color = 'red';
    // content.style.backgroundColor = 'red';

    console.log(content.classList)
    content.classList.add('name');

    console.log(deleteBtn.classList)
    deleteBtn.classList.add('delete');

    li.appendChild(content);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})

const searchForm = document.forms['search-books'];

searchForm.addEventListener('keyup', (event) => {
    let textInput = searchForm.querySelector("input[type='text']");
    let value = textInput.value;
    const bookTitles = list.querySelectorAll('li');
    bookTitles.forEach((bookTitle) => {
        if (bookTitle.children[0].textContent === value) {
            bookTitle.style.display = 'block';
        }else {
            bookTitle.style.display = 'none';
        }
    })
})
