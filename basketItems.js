const BASE_URL = "http://localhost:3000";

let total = 0;

const getPosts = async () => {
  const res = await fetch(`${BASE_URL}/basket`);
  const data = await res.json();
  return data;
};

const createCard = () => {
  getPosts().then((data) => {
    data.map((elem) => {
      console.log(elem);
      const container = document.querySelector(".container");

      const card = document.createElement("div");
      card.style.width = "18rem";
      card.style.border = "1px solid darkblue";
      card.style.display = "flex";
      card.style.alignItems = "center";
      card.style.justifyContent = "center";
      card.style.flexDirection = "column";
      card.style.padding = "10px";
      card.style.margin = "10px";

      const cardTitle = document.createElement("p");
      const cardPrice = document.createElement("p");
      const cardImage = document.createElement("img");

      cardImage.setAttribute("src", elem.productImages);
      cardImage.style.width = "100px";
      cardImage.style.height = "100px";

      cardTitle.textContent = elem.productTitle;
      cardPrice.textContent = elem.productPrice + " ₼";
      container.style.display = "flex";
      container.style.alignItems = "center";
      container.style.justifyContent = "center";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.style.padding = "10px";
      deleteBtn.style.borderRadius = "5px";
      deleteBtn.style.border = "none";
      deleteBtn.style.backgroundColor = "#d92323";
      deleteBtn.style.color = "#fff";
      deleteBtn.style.margin = "10px";

      total = total + parseInt(elem.productPrice);
      document.getElementById("total").innerHTML = total + " ₼";

      const buttonWrapper = document.createElement("div");
      buttonWrapper.style.padding = "5px";

      const span = document.createElement("span");
      span.innerText = "1";
      const decreaseBtn = document.createElement("button");
      decreaseBtn.innerText = "-";
      decreaseBtn.style.margin = "5px";
      
      const increaseBtn = document.createElement("button");
      increaseBtn.innerText = "+";
      increaseBtn.style.margin = "5px";

      increaseBtn.addEventListener("click", () => {
        span.innerText++;
        updateTotalPrice(elem.productPrice, 1);
      });

      decreaseBtn.addEventListener("click", () => {
        if (span.innerText > 0) {
          span.innerText--;
          updateTotalPrice(elem.productPrice, -1);
        }
      });
      deleteBtn.addEventListener("click", () => {
        card.remove();
        total = total - parseInt(elem.productPrice);
        document.getElementById("total").innerHTML = total + " ₼";
        if (container.children.length == 0) {
          container.textContent = "Your basket empty";
          document.getElementById("total").innerHTML = 0 + " ₼";
        }
      });

      card.append(
        cardTitle,
        cardPrice,
        cardImage,
        buttonWrapper,
        decreaseBtn,
        span,
        increaseBtn,
        deleteBtn
      );
      buttonWrapper.append(decreaseBtn, span, increaseBtn);
      container.appendChild(card);
    });
  });
};
const updateTotalPrice = (productPrice, quantity) => {
  total += productPrice * quantity;
  document.getElementById("total").innerHTML = total + " ₼";
};
createCard();
