let client_submit_email = document.querySelector("#submit_email");

const email_submit = document.querySelector("#submit_just_email");

email_submit.addEventListener("click", async function (j) {
    await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${client_submit_email.value}`
    );
    client_submit_email = "";
  });