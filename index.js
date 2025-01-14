function addMetric(metric) {
  let template = document
    .getElementById("metric-template")
    .content.cloneNode(true);

  // using a wrapper so that we can avoid duplicated ids
  // and query using class names, which aren't available on a fragment
  let wrapper = document.createElement("div");
  wrapper.appendChild(template);

  let container = document.getElementById("metrics");
  wrapper = container.appendChild(wrapper);
  console.log(template);
  window.temp = template;
  wrapper.querySelector(".metric-title").textContent = metric.category;
  wrapper.querySelector(".score").textContent = metric.score;
  wrapper.querySelector(".icon").src = metric.icon;
  wrapper.querySelector(".metric").classList.add(metric.color);
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
