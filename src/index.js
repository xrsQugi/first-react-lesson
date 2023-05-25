import React from 'react';
import ReactDOM from 'react-dom';

//!1
// const elem = React.createElement("div", {a: 5, b: 10}, "Hello world!", "Hi world!");
//? приклад зверху і знизу однакові
// const el = React.createElement("div", {
//   a: 5, 
//   b: 10, 
//   children: ["Hello world!", "Hi world!"]
// }); 


//!1 & 2
// console.log("element: ", element);
// console.log("elem: ", elem);
// console.log("el: ", el);

// ReactDOM.render(element, document.querySelector("#root"))

//!3
// const elem1 = React.createElement("span",{className:"span-1"}, "Hello");
// const elem2 = React.createElement("span",{className:"span-2"}, " ");
// const elem3 = React.createElement("span",{className:"span-3"}, "world!");

// const element = React.createElement("div", {
//   className: "wrapper", 
//   id: "element-id",
//   children: [elem1, elem2, elem3]
// });

// ReactDOM.render(element, document.querySelector("#root"))

//todo
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//todo

//!4
const jsxElem1 = <span>Hello</span>;
const jsxElem2 = <span> </span>;
const jsxElem3 = <span>world!</span>;

const jsxElem = <div>
  {jsxElem1} 
  {jsxElem2}
  {jsxElem3}
</div>;

console.log("jsxElem: ", jsxElem);

ReactDOM.render(jsxElem, document.querySelector("#root"));

//!5
const data = {
  id: "id-1",
  url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
  title: "Feathers. Art abstract",
  price: 500,
  author: {
    tag: "ractapopulous",
    url: "https://pixabay.com/users/ractapopulous-24766/",
  },
  quantity: 10,
};


function Painting(props){
  return (
  <div>
    <img src={data.url} alt={data.title} width="480"/>
    <h2>{data.title}</h2>
    <p>
      Автор <a href={data.author.url}>{data.author.tag}</a>
    </p>
    <p>
      Цена: {data.price} кредитов
    </p>
    <p>
      Кількість: {data.quantity}
    </p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type="button">Добавить в корзину</button>
  </div>)
}

ReactDOM.render(<Painting/>, document.querySelector("#root"));