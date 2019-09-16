const fetchModule = require('node-fetch');

const fetch = fetchModule.default || fetchModule;

const api = 'https://api.gushi.ci/all.json';

function outputAlfredItems(items) {
  console.log(JSON.stringify({ items }));
}

async function getPoetry() {
  const data = await fetch(api);
  const poetry = await data.json();
  return poetry;
}

function buildAlfredItem({ content, origin, author, category }) {
  return {
    title: content,
    subtitle: `${origin}-${author} ${category}`,
    arg: content,
  };
}

async function main() {
  const poetry = await getPoetry();
  const poetryItem = buildAlfredItem(poetry);
  return outputAlfredItems([poetryItem]);
}

main();
