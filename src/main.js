// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// Отримуємо ключ https://newsapi.org/
//  * Запити робитимемо на http://newsapi.org/v2/everything?q=cat&pageSize=5&page=1
//  *
//  * Пагінація: номер групи та кількість елементів групи
//  * - Завантажуємо статті при сабміті форми
//  * - Завантажуємо статті при натисканні на кнопку «Завантажити ще»
//  * - Оновлюємо групу в параметрах запиту
//  * - Рендерим статті
//  * - Скидання значення при пошуку за новим критерієм
//  * - Показуємо спінер поки йде запит
//  */

// const api = axios.create({
//   baseURL: 'http://newsapi.org/v2/',
//   params: {
//     apiKey: 'abeb1fead2de446d8cf3c831a721e668',
//     language: 'en',
//   },
// });

// const searchForm = document.querySelector('.search-form');
// const articlesContainer = document.querySelector('.articles');
// const loadMoreBtn = document.querySelector('button[data-action="load-more"]');
// const loadMoreSpinner = document.querySelector('.load-more-spinner');

// function renderArticles(articles = []) {
//   const markup = articles.reduce(
//     (html, { url, urlToImage, title, author, description }) =>
//       html +
//       `
//       <li>
//         <a href="${url}" target="_blank" rel="noopener noreferrer">
//           <article>
//             <img src="${urlToImage}" alt="${title}" width="480">
//             <h2>${title}</h2>
//             <p>Posted by: ${author}</p>
//             <div class="description-wrapper">
//               <p class="description">${description}</p>
//             </div>
//           </article>
//         </a>
//       </li>`,
//     ''
//   );

//   articlesContainer.insertAdjacentHTML('beforeend', markup);
// }

// const getArticles = async params => {
//   try {
//     const response = await api.get('everything', { params });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const createGetArticlesRequest = q => {
//   let page = 1;
//   let isLastPage = false;
//   const pageSize = 1;

//   return async () => {
//     try {
//       if (isLastPage) return [];

//       const { articles, totalResults } = await getArticles({
//         page,
//         pageSize,
//         q,
//       });

//       if (page >= Math.ceil(totalResults / pageSize)) {
//         isLastPage = true;
//       }

//       page += 1;

//       return articles;
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };

// let doFetch = null;

// searchForm.addEventListener('submit', async event => {
//   event.preventDefault();

//   if (doFetch != null) {
//     loadMoreBtn.removeEventListener('click', doFetch);
//     doFetch = null;
//   }

//   const data = new FormData(event.currentTarget);
//   const query = data.get('query');

//   articlesContainer.innerHTML = '';

//   const fetchArticles = createGetArticlesRequest(query);

//   doFetch = async () => {
//     const articles = await makePromiseWithSpinner({
//       promise: fetchArticles,
//       spinner: loadMoreSpinner,
//     });

//     renderArticles(articles);
//   };

//   await makePromiseWithSpinner({
//     promise: doFetch,
//     spinner: loadMoreSpinner,
//   });

//   loadMoreBtn.addEventListener('click', doFetch);
// });

// const makePromiseWithSpinner = async ({
//   promise,
//   spinner,
//   className = 'is-hidden',
// }) => {
//   spinner.classList.remove(className);

//   const response = await promise();

//   spinner.classList.add(className);

//   return response;
// };

///////////////////
// const fetchPostsBtn = document.querySelector('.btn');
// const postList = document.querySelector('.posts');

// // Controls the group number
// let page = 1;
// // Controls the number of items in the group
// let limit = 5;
// // In our case total number of pages is calculated on frontend
// const totalPages = Math.ceil(50 / limit);

// fetchPostsBtn.addEventListener('click', async () => {
//   // Check the end of the collection to display an alert
//   if (page > totalPages) {
//     return iziToast.error({
//       position: 'topRight',
//       message: "We're sorry, there are no more posts to load",
//     });
//   }

//   try {
//     const posts = await fetchPosts();
//     renderPosts(posts);
//     // Increase the group number
//     page += 1;

//     // Replace button text after first request
//     if (page > 1) {
//       fetchPostsBtn.textContent = 'Fetch more posts';
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// async function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: limit,
//     _page: page,
//   });

//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts?${params}`
//   );
//   return response.data;
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join('');
//   postList.insertAdjacentHTML('beforeend', markup);
// }
import axios from 'axios';
const fetchPosts = async () => {
  const response = await axios.get(
    '<https://jsonplaceholder.typicode.com/posts>'
  );
  console.log('Posts: ', response.data);
};
// async function fetchUsers() {
//   const searchParams = {
//     key: '41712066-bd7b5e249df7a86bd45ef70ea',
//     q: 'dog',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   };
//   const param = new URLSearchParams(searchParams);
//   q = searchInputRes.value.trim();

//   try {
//     const response = await axios.get(`https://pixabay.com/api/?${param}`);

//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }
