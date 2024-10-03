//Storing books data of 18 books and added an extra field book_image url
export const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    rating: 4.7,
    description:
      "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
    publication_year: 1925,
    book_image:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146702/the-great-gatsby-9781982146702_xlg.jpg",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    rating: 4.8,
    description:
      "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the American South.",
    publication_year: 1960,
    book_image:
      "https://images-na.ssl-images-amazon.com/images/I/81gepf1eMqL.jpg",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    rating: 4.6,
    description:
      "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
    publication_year: 1949,
    book_image:
      "https://tse4.mm.bing.net/th?id=OIP.g_ruYs50O9RO44w1p_1ISAHaLR&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    rating: 4.9,
    description:
      "A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.",
    publication_year: 1813,
    book_image:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781471134746/pride-and-prejudice-9781471134746_hr.jpg",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    rating: 4.3,
    description:
      "A story about a young boy’s journey through the challenges of adolescence.",
    publication_year: 1951,
    book_image:
      "http://media.npr.org/assets/bakertaylor/covers/c/catcher-in-the-rye/9780316769488_custom-b6fc2e108f3865eb320720875c20e4f869da8065-s6-c30.jpg",
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    rating: 4.8,
    description:
      "A fantasy novel about the journey of Bilbo Baggins, a hobbit on an unexpected adventure.",
    publication_year: 1937,
    book_image: "https://images.thenile.io/r1000/9780007458424.jpg",
  },
  {
    id: 7,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    rating: 4.5,
    description:
      "A dystopian novel exploring the implications of a society based on efficiency, technology, and state control.",
    publication_year: 1932,
    book_image: "https://cdn2.penguin.com.au/covers/original/9781784877736.jpg",
  },
  {
    id: 8,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    rating: 4.9,
    description:
      "An epic fantasy trilogy that follows the quest to destroy the One Ring.",
    publication_year: 1954,
    book_image: "https://cdn.dc5.ro/img-prod/1817832475-0.jpeg",
  },
  {
    id: 9,
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    rating: 4.1,
    description:
      "A whaling voyage narrative that explores themes of obsession and revenge.",
    publication_year: 1851,
    book_image:
      "https://imgv2-1-f.scribdassets.com/img/word_document/271539805/original/2ff8d99667/1587809819%3fv%3d1",
  },
  {
    id: 10,
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical",
    rating: 4.7,
    description:
      "An epic novel that intertwines the lives of five families during the Napoleonic Wars.",
    publication_year: 1869,
    book_image:
      "https://mynextreadinglist.com/wp-content/uploads/2019/01/71ykhMyjntL.jpg",
  },
  {
    id: 11,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Psychological Fiction",
    rating: 4.6,
    description:
      "A psychological drama that delves into guilt, redemption, and human suffering.",
    publication_year: 1866,
    book_image:
      "https://i.etsystatic.com/15601280/r/il/d5057a/2903062128/il_1588xN.2903062128_ia7v.jpg",
  },
  {
    id: 12,
    title: "The Catch-22",
    author: "Joseph Heller",
    genre: "Satire",
    rating: 4.4,
    description:
      "A satirical novel that explores the absurdities of war and bureaucracy.",
    publication_year: 1961,
    book_image: "https://cdn2.penguin.com.au/covers/original/9781784875848.jpg",
  },
  {
    id: 13,
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Gothic",
    rating: 4.3,
    description:
      "A Gothic horror novel about a scientist's creation that turns into a monstrous being.",
    publication_year: 1818,
    book_image:
      "https://d28hgpri8am2if.cloudfront.net/book_images/cvr9780743487580_9780743487580_hr.jpg",
  },
  {
    id: 14,
    title: "The Odyssey",
    author: "Homer",
    genre: "Epic",
    rating: 4.6,
    description:
      "An epic poem following the adventures of Odysseus as he journeys home from the Trojan War.",
    publication_year: -800,
    book_image:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781451674187/the-odyssey-9781451674187_hr.jpg",
  },
  {
    id: 15,
    title: "Dracula",
    author: "Bram Stoker",
    genre: "Horror",
    rating: 4.4,
    description:
      "A Gothic horror novel about the vampire Count Dracula's attempt to move to England.",
    publication_year: 1897,
    book_image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1665491626i/62967378.jpg",
  },
  {
    id: 16,
    title: "Wuthering Heights",
    author: "Emily Brontë",
    genre: "Romance",
    rating: 4.5,
    description:
      "A Gothic romance novel exploring themes of love, revenge, and passion.",
    publication_year: 1847,
    book_image:
      "https://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_1000H/9781466805743.jpg",
  },
  {
    id: 17,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "Romance",
    rating: 4.7,
    description:
      "A classic romance novel about the life and struggles of an orphaned girl.",
    publication_year: 1847,
    book_image:
      "https://1.bp.blogspot.com/-O6iqnxiPfnQ/XQixRqPlzpI/AAAAAAAABuU/1l2NYudeWbEMQD5pKk27edoGIO6U-BApQCLcBGAs/s1600/teaserbox_2475163372.jpg",
  },
  {
    id: 18,
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    genre: "Tragedy",
    rating: 4.6,
    description: "A tragic tale of love, betrayal, and societal pressures.",
    publication_year: 1877,
    book_image:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781451685558/anna-karenina-9781451685558_hr.jpg",
  },
];
