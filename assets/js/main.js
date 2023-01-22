// Preloader

// window.addEventListener("load", () => {
//   document.querySelector(".preloader").classList.add("loader-hide");
// });

// Send Form to Bot

let client_name = document.querySelector("#name");
let client_email = document.querySelector("#email");
let client_subject = document.querySelector("#subject");
let client_text = document.querySelector("#textt");

const token = "5549930647:AAE3jHv_863Pi7YheUCK7DrFjwHs8bpPu88";
const chatId = "-710060574";
const submit = document.querySelector("#submit-all");

submit.addEventListener("click", async function (e) {
  e.preventDefault();

  await fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${client_name.value}`
  );
  await fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${client_email.value}`
  );
  await fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${client_subject.value}`
  );
  await fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${client_text.value}`
  );

  client_name.value = "";
  client_email.value = "";
  client_subject.value = "";
  client_text.value = "";

  alert("Yuborildi // Отправлено // Sent");
});
















 
