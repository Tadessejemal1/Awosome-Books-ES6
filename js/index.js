import {Collection, bookAuthor, bookTitle} from '../module/books.js';
import Time from '../Module/dateTime.js';
import Book from '../module/bookList.js';
const bookBtn = document.getElementById('add-btn');
const booksSection = document.querySelector('.book-list');
const addSection = document.querySelector('.form');
const contactSection = document.querySelector('.contact-info');
const booksLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');



Time();

const coll = new Collection();
if (localStorage.getItem('bookCollection')) {
  const localBooks = JSON.parse(localStorage.getItem('bookCollection'));
  localBooks.bookColl.forEach((element) => {
    coll.add(new Book(element.title, element.author));
  });
}
bookBtn.addEventListener('click', () => {
  coll.add(new Book(bookTitle.value, bookAuthor.value));
});

booksLink.addEventListener('click', () => {
  booksSection.classList.remove('hidden');
  addSection.classList.add('hidden');
  contactSection.classList.add('hidden');
  booksLink.style.color = 'rgb(15, 15, 161)';
  addLink.style.color = 'black';
  contactLink.style.color = 'black';
});

addLink.addEventListener('click', () => {
  booksSection.classList.add('hidden');
  addSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
  booksLink.style.color = 'black';
  addLink.style.color = 'rgb(15, 15, 161)';
  contactLink.style.color = 'black';
});

contactLink.addEventListener('click', () => {
  booksSection.classList.add('hidden');
  addSection.classList.add('hidden');
  contactSection.classList.remove('hidden');
  booksLink.style.color = 'black';
  addLink.style.color = 'black';
  contactLink.style.color = 'rgb(15, 15, 161)';
});