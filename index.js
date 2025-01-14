function addMetric(metric) {
  let template = document
    .getElementById("metric-template")
    .content.cloneNode(true);

  template.getElementById("title").textContent = metric.category;
  template.getElementById("score").textContent = metric.score;
  template.getElementById("icon").src = metric.icon;
  template.getElementById("metric").classList.add(metric.color);

  let container = document.getElementById("metrics");
  container.appendChild(template);
}

let total = 0;
let count = 0;

fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((metric) => {
      addMetric(metric);
      total += metric.score;
      count++;
    });
  })
  .then((_) => {
    total = Math.round(total / count);
    document.getElementById("total-score").textContent = total;
  });
