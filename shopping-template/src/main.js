"use strict";

// Fetch the items from the JSON file
function loadItems() {
    return fetch("data/data.json")
        .then((response) => response.json()) // 성공이면 json으로 변환하고
        .then((json) => json.items); // json안의 items를 리턴한다
}

function displayItems(items) {
    const container = document.querySelector(".items");
    container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail" />
        <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(e, items) {
    console.log(e.target.dataset.key);
    console.log(e.target.dataset.value);
    const dataset = e.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key == null || value == null) {
        return;
    }

    const filtered = items.filter((item) => item[key] === value);
    console.log(filtered);
    displayItems(filtered);
}

function setEventListener(items) {
    const logo = document.querySelector(".logo");
    const btns = document.querySelector("nav");

    logo.addEventListener("click", () => displayItems(items));
    btns.addEventListener("click", (e) => onButtonClick(e, items));
}

// promise 사용해주기 (성공할땐 .then  /  실패할땐 .catch)
loadItems()
    .then((items) => {
        displayItems(items);
        setEventListener(items);
    })
    .catch(console.log);

// [data]  >>  [data.json] 파일 내 작성 방법

// 반복적으로 사용할 데이터를 저장하는 장소
// item이라는 class를 가진 list 내 정보들을 반복하고 싶다
// item을 객체 형태<json=객체>로 만들어서 안에 반복할 정보들을 담아준다

// 객체형태 안에 담아준다   >>  배열로 여러 데이터를 받아온다  >> 각 데이터는 객체 형태
