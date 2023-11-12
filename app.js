const cardWrapper = document.querySelector(".cardContainer");
const counterElement = document.querySelector("#counter");

let counter = 0;

const BASE_URL = "https://dummyjson.com";
const getPosts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  const data = res.json();
  return data;
};
const creatCard = () => {
  getPosts().then((data) => {
    data.products.map((elem) => {
      const card = document.createElement("div");
      card.style.border = "1px solid darkblue";
      card.style.width = "18rem";
      card.style.padding = "20px";
      card.style.display = "flex";
      card.style.alignItems = "center";
      card.style.justifyContent = "center";
      card.style.flexDirection = "column";

      const id = document.createElement("p");
      const title = document.createElement("p");
      const price = document.createElement("p");
      const images = document.createElement("img");
      const addBasket = document.createElement("button");

      addBasket.innerText = "Add to Basket";
      addBasket.setAttribute("id", elem.id);
      addBasket.style.border = "none";
      addBasket.style.background = "#61A3BA";
      addBasket.style.color = "white";
      addBasket.style.padding = "10px";
      addBasket.style.margin = "20px";

      id.innerText = elem.id;
      title.innerText = elem.title;
      price.innerText = elem.price + " ₼";
      images.setAttribute("src", elem.images[0]);
      images.style.width = "200px";
      images.style.height = "120px";
      card.append(id, title, price, images, addBasket);
      cardWrapper.appendChild(card);

      addBasket.addEventListener("click", (e) => {
        createBasket(elem.id, elem.title, elem.price, elem.images[0]);
        increaseCounter();
      });
    });
  });
};

async function createBasket(id, title, price, images) {
  await axios.post("http://localhost:3000/basket", {
    productId: id,
    productTitle: title,
    productPrice: price,
    productImages: images,
  });
}

function increaseCounter() {
  counter++;
  counterElement.innerText = counter;
}

creatCard();