const h3 = document.querySelector("h3");
const input_text = document.querySelector(".input");
const add_btn = document.querySelector(".input-btn");
const mainul = document.querySelector("ul");

add_btn.addEventListener("click", () => {
  let tx_len = input_text.value;
  if (tx_len.length == 0) {
    alert("Iltimos ro'yhat qo'shing ");
  } else {
    // new li
    let newli = document.createElement("li");
    newli.textContent = input_text.value;
    newli.classList.add("new-li");

    // button rem
    const btnrem = document.createElement("button");
    btnrem.classList.add("btn-rem");
    btnrem.textContent = "o'chirish";
    btnrem.addEventListener("click", () => {
      mainul.removeChild(newli);
    });
    newli.addEventListener("click", () => {
      //   console.log(newtext);
      newli.classList.add("li-new");
      btnrem.classList.remove("li-new");
    });
    mainul.appendChild(newli);
    newli.appendChild(btnrem);

    input_text.value = "";
  }
});
