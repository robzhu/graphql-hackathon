
function getAuthorId(author) {
  return 'author' + author.name.split(' ').pop();
}

function buildAuthorElement(author) {
  return `
<div class='author' id='${getAuthorId(author)}'>
  <img src='${author.image}'/>
  <div>
    <h2>${author.name}</h2>
  </div>
  <div class='books'>
  </div>
</div>`;
}

function getBookId(book) {
  return 'book' + book.title.split(' ').pop();
}

function buildBookElement(book) {
  return `
<div class='book' id='${getBookId(book)}'>
  <img src='${book.image}'/>
  <div>
    ${book.title}
  </div>
</div>
`;
  return book.title;
}

$(document).ready( _ => {
  console.log('document ready');
  fetchData();
});

const query = `
{
  authors {
    id
    name
    image
    books {
      id
      image
      title
    }
  }
}
`;

function fetchData() {
  const url = `http://localhost:5000?query=${query}`;
  $.get(url, res => {
    console.log(res.data);
    renderRoot(res.data.authors);
  });
}

function renderRoot(authors) {
  authors.forEach(author => {
    $('#authors').append(buildAuthorElement(author));
    author.books && author.books.forEach(book => {
      const selector = '#' + getAuthorId(author) + ' .books';
      const bookElement = buildBookElement(book);
      $(selector).append(bookElement);
    })
  });
}
