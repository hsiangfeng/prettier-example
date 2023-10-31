function hello(name) {
  return 'Hello, ' + name + '!';
}

const data = [
  {
    id: 1,
    name: 'Ray',
    color: 'red',
  },
  {
    id: 2,
    name: 'Ray2',
    color: 'blue',
  },
  {
    id: 3,
    name: 'Ray3',
    color: 'green',
  },
  {
    id: 4,
    name: 'Ray4',
    color: 'red',
  },
];

function getRedColor(data) {
  const filterData = data.filter(function (item) {
    return item.color === 'red';
  });

  return filterData;
}

console.log(hello('Ray'));
console.log(getRedColor(data));
