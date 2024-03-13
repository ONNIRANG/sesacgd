function displayProduct(products) {
  const productListEL = document.querySelector("#product-list");
  productListEL.innerHTML = ""; // 상품목록 초기회

  products.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <p>상품이름 ${product.name}, 가격: ${product.price}원</p>
    `;

    productListEL.append(div);
  });
}
// 상품데이터(json mock)를 가져오는 함수
function fetchProducts() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      displayProduct(data);
    })
    .catch((err) => console.log("상품데이터를 불러오는"));
}

fethchProducts();
