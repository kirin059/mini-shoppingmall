# mini-shoppingmall

![image](https://user-images.githubusercontent.com/71425369/110899237-16e42f80-8344-11eb-824a-a27561015503.png)

1️⃣ fetch 함수 받아오기(promise 사용)

json파일 내용 불러와서 promise로 구현하기

```js
function loadItems() {
    return fetch("data/data.json")
        .then((response) => response.json()) // 성공이면 json으로 변환하고
        .then((json) => json.items); // json안의 items를 리턴한다
}

// JSON파일을 불러오는데 시간이 걸리기 때문에 promise로 불러온다(비동기)
// promise 사용해주기 (성공할땐 .then  /  실패할땐 .catch)
loadItems()
    .then((items) => {
        // 성공이면, 아래 두 함수를 실행한다
        displayItems(items);  // item 를 보여주는 함수
        setEventListener(items); // filtering 해주는 함수
    })
    // 실패하면, console.log로 출력되도록 한다
    .catch(console.log);
```

2️⃣ displayItems(items) 함수 구현하기

fetch함수로 불러온 json데이터를 map을 이용하여 각각의 요소 구성해주기

```js
function displayItems(items) {
    const container = document.querySelector(".items");
    container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

// li태그를 문자열로 변환하는 함수
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail" />
        <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    `;
}
```
