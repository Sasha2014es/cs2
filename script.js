const facts = [
  {
    title: 'Responsive smoke',
    text: 'Дим у CS2 реагує на вибухи, постріли та простір, тому розігрувати гранати стало значно тактичніше.'
  },
  {
    title: 'Sub-tick система',
    text: 'Сервер точніше враховує дії гравця між тиками, щоб рухи, стрільба й кидки відчувалися стабільніше.'
  },
  {
    title: 'Оновлені карти',
    text: 'Valve переробила класичні локації: покращила освітлення, читабельність позицій та деталізацію оточення.'
  },
  {
    title: 'Інвентар перенесено',
    text: 'Скіни, предмети та більшість прогресу з CS:GO збереглися, тому перехід до CS2 став комфортнішим.'
  }
];

const factTitle = document.querySelector('[data-fact-title]');
const factText = document.querySelector('[data-fact-text]');
const factButton = document.querySelector('[data-next-fact]');

let currentFactIndex = 0;

function renderFact(index) {
  const fact = facts[index];

  if (!factTitle || !factText) {
    return;
  }

  factTitle.textContent = fact.title;
  factText.textContent = fact.text;
}

if (factButton) {
  factButton.addEventListener('click', () => {
    currentFactIndex = (currentFactIndex + 1) % facts.length;
    renderFact(currentFactIndex);
  });
}

renderFact(currentFactIndex);
