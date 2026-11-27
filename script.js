const messages = [
  "Emin misin?",
  "Gerçekten emin misin??",
  "Tam olarak emin misin?",
  "Bir daha düşün lütfen!",
  "Hayır dersen çok üzülürüm...",
  "Gerçekten çok üzülürüm...",
  "Çok ama çok üzülürüm...",
  "Peki tamam, artık sormayacağım...",
  "Şaka yaptım, lütfen evet de! ❤️",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  sessionStorage.setItem("leylaYes", "1");
  window.location.href = "yes_page.html";
}
