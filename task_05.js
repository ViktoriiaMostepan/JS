const data = [
  [
    1,
    'Айзек',
    'Азимов',
    [
      'Основание',
      'Двухсотлетний человек',
      'Сами боги',
      'Я, Робот',
      'В плену у Весты',
    ],
  ],

  [
    3,
    'Роберт',
    'Хайнлайн',
    ['Фермер в небе', 'История будущего', 'Нам, живущим'],
  ],

  [5, 'Дэн', 'Симмонс', ['Илион', 'Олимп', 'Гиперион', 'Террор']],

  [
    2,
    'Рэй',
    'Брэдбери',
    [
      'Марсианские хроники',
      'Вино из одуванчиков',
      '451 градус по Фаренгейту',
      'Надвигается беда',
    ],
  ],

  [
    4,
    'Филип',
    'Дик',
    [
      'Мечтают ли андроиды об электроовцах?',
      'Пролейтесь, слёзы...',
      'Человек в высоком замке',
    ],
  ],
];

function createObject() {
  const newObj = data.reduce((acc, item) => {
    const [id, name, surname, books] = item;
    const authors = { id, name, surname, books };
    acc.push(authors);
    return acc;
  }, []);
  newObj.sort((a, b) => a.id - b.id);
  console.log(newObj);
}

// function createObject() {
//   const newObj = data.reduce((acc, item) => {
//     const authors = {
//       id: item[0],
//       name: item[1],
//       surname: item[2],
//       books: item[3],
//     };
//     acc.push(authors);
//     return acc;
//   }, []);
//   newObj.sort((a, b) => a.id - b.id);
//   console.log(newObj);
// }

createObject();
