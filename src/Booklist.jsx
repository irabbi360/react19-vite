import BookRow from './BookRow';

const books = [
  {
    id: 1,
    title: 'The Road',
    author: 'Cormac McCarthy',
    featured: false,
  },
  {
    id: 2,
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    featured: true,
  },
  {
    id: 3,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    featured: false,
  },
  {
    id: 4,
    title: 'The Stranger',
    author: 'Albert Camus',
    featured: false,
  },
  {
    id: 5,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    featured: true,
  },
  {
    id: 6,
    title: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
    featured: false,
  },
  {
    id: 7,
    title: 'The Bell Jar',
    author: 'Sylvia Plath',
    featured: false,
  },
  {
    id: 8,
    title: 'The Stand',
    author: 'Stephen King',
    featured: true,
  },
  {
    id: 9,
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    featured: false,
  },
  {
    id: 10,
    title: 'The Hobbit', 
    author: 'J.R.R. Tolkien',
    featured: true,
  }
];

function Booklist() {
  return (
    <ul className='space-y-4'>
      {books.map((book) => (
        <li key={book.id}
          className='flex items-center justify-between p-4 bg-white shadow rounded-lg'
        >
          <BookRow key={book.id} book={book} />
        </li>
      ))}
    </ul>
  );
}

export default Booklist;