const startingSum = document.getElementById('starting-sum');
const percent = document.getElementById('percent');
const days = document.getElementById('days');
const resultTable = document.getElementById('result-table');

document.getElementById('submit-form').addEventListener('submit', (e) => {
  resultTable.innerHTML = '';
  e.preventDefault();
  getResult();
});

const getResult = () => {
  let totalSum = parseInt(startingSum.value);
  let daySum = 0;
  for (let i = 1; i <= parseInt(days.value); i++) {
    if (document.getElementById('compound-percent').checked) {
      daySum = (totalSum / 100) * percent.value;
      totalSum += daySum;
      getResultHtml(i, daySum, totalSum);
    } else {
      daySum = (startingSum.value / 100) * percent.value;
      totalSum += daySum;
      getResultHtml(i, daySum, totalSum);
    }
  }
};

const getResultHtml = (day, daySum, totalSum) => {
  document.getElementById('result-container').style.display = 'block';
  resultTable.innerHTML += `
        <li class="result-item">
          <p>День: ${day}</p>
          -
          <p>Начислено: $${daySum.toFixed(2)}</p>
          -
          <p>Итоговая сумма: $${totalSum.toFixed(2)}</p>
        </li>
  `;
};
