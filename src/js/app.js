const data = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

// родительский элемент
const container = document.querySelector('[data-widget=cinema]');
const tHead = container.querySelector('thead');
const tBody = container.querySelector('tbody');

// функция для создания и добавления элементов
const createElement = (parent, props) => {
  const trElement = document.createElement('tr');
  trElement.classList.add('item');
  trElement.dataset.id = props.id;
  trElement.dataset.title = props.title;
  trElement.dataset.imdb = props.imdb;
  trElement.dataset.year = props.year;

  trElement.innerHTML = `<td>${props.id}</td>
                         <td>${props.title}</td>
                         <td>(${props.year})</td>
                         <td>imdb: ${props.imdb.toFixed(2)}</td>`;

  parent.appendChild(trElement);
};

// функция сортировки
function compare(key, order = 'asc') {
  return function fn(a, b) {
    // свойства нет ни в одном из объектов
    if (a[key] === 'undefined') return 0;

    const varA = a[key];
    const varB = b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

// создание и добавление элементов
for (const item of data) {
  createElement(tBody, item);
}

// сортировка таблицы
const sortignFilms = (key, order = 'asc') => {
  data.sort(compare(key, order));

  tBody.innerHTML = '';

  for (const item of data) {
    createElement(tBody, item);
  }

  if (key === 'id' && order === 'asc') tHead.innerHTML = '<tr> <td>id &#8595;</td> <td>title</td> <td>year</td> <td>imdb</td> </tr>';
  if (key === 'id' && order === 'desc') tHead.innerHTML = '<tr> <td>id &#8593;</td> <td>title</td> <td>year</td> <td>imdb</td> </tr>';
  if (key === 'title' && order === 'asc') tHead.innerHTML = '<tr> <td>id</td> <td>title &#8595;</td> <td>year</td> <td>imdb</td> </tr>';
  if (key === 'title' && order === 'desc') tHead.innerHTML = '<tr> <td>id</td> <td>title &#8593;</td> <td>year</td> <td>imdb</td> </tr>';
  if (key === 'year' && order === 'asc') tHead.innerHTML = '<tr> <td>id</td> <td>title</td> <td>year &#8595;</td> <td>imdb</td> </tr>';
  if (key === 'year' && order === 'desc') tHead.innerHTML = '<tr> <td>id</td> <td>title</td> <td>year &#8593;</td> <td>imdb</td> </tr>';
  if (key === 'imdb' && order === 'asc') tHead.innerHTML = '<tr> <td>id</td> <td>title</td> <td>year</td> <td>imdb &#8595;</td> </tr>';
  if (key === 'imdb' && order === 'desc') tHead.innerHTML = '<tr> <td>id</td> <td>title</td> <td>year</td> <td>imdb &#8593;</td> </tr>';
};


let i = 0;

setInterval(() => {
  switch (i) {
    case 0:
      sortignFilms('id');
      break;
    case 1:
      sortignFilms('id', 'desc');
      break;
    case 2:
      sortignFilms('title');
      break;
    case 3:
      sortignFilms('title', 'desc');
      break;
    case 4:
      sortignFilms('year');
      break;
    case 5:
      sortignFilms('year', 'desc');
      break;
    case 6:
      sortignFilms('imdb');
      break;
    case 7:
      sortignFilms('imdb', 'desc');
      break;
    default:
      sortignFilms('id');
      break;
  }

  i += 1;
  if (i > 7) i = 0;
}, 2000);
