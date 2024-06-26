document.addEventListener('DOMContentLoaded', () => {
  const categoriesList = document.getElementById('categories');
  const items = categoriesList.getElementsByClassName('item');
  console.log('Number of categories:', items.length);
  Array.from(items).forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('ul li').length;
    console.log('Category:', categoryTitle);
    console.log('Elements:', elementsCount);
  });
});