const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const awosomeBook = document.querySelector('.book-store');
const bookBtn = document.getElementById('add-btn');
const dateTime = document.querySelector('.dateTime');

function myDate() {
  const today = new Date();
  dateTime.innerHTML = today.toLocaleString();
}
setInterval(myDate, 1000);

class Collection {
  constructor(books = []) {
    this.books = books;
  }

  add(data) {
    this.books.push(data);
    this.display(data);
    this.remove();
    this.populateStorage();
    bookTitle.value = '';
    bookAuthor.value = '';
  }

  remove() {
    const removeBtns = document.querySelectorAll('.remove-button');
    removeBtns[removeBtns.length - 1].addEventListener('click', (evt) => {
      this.removeFromColl(evt.target);
      awosomeBook.removeChild(evt.target.parentNode);
    });
  }

  display(data) {
    if (this) {
      const div = document.createElement('div');
      div.className = 'book-wrapper';
      div.innerHTML = `<h3>"${data.title}" by</h3>
                    <h3>${data.author}</h3>
                    <button data-value="${data.title}-${data.author}" type="button" class ="remove-button">Remove</button>`;
      awosomeBook.appendChild(div);
    }
  }

  removeFromColl(data) {
    const arr = data.getAttribute('data-value').split('-');
    this.books = this.books.filter(
      (item) => item.title + item.author !== arr[0] + arr[1],
    );
    this.populateStorage();
  }

  populateStorage() {
    localStorage.setItem(
      'bookCollection',
      JSON.stringify({ bookColl: this.books }),
    );
  }
}

function Book(title, author) {
  this.title = title;
  this.author = author;
}

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

const booksSection = document.querySelector('.book-list');
const addSection = document.querySelector('.form');
const contactSection = document.querySelector('.contact-info');
const booksLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

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