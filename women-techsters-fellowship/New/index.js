// Grab slider elements and text displays
const purchaseRange = document.getElementById("purchaseRange");
const downRange = document.getElementById("downRange");
const purchaseDisplay = document.getElementById("purchaseDisplay");
const downDisplay = document.getElementById("downDisplay");
const monthlyDisplay = document.getElementById("monthlyDisplay");
const rateDisplay = document.getElementById("rateDisplay");
const aprDisplay = document.getElementById("aprDisplay");
const pointsDisplay = document.getElementById("pointsDisplay");
const cta = document.getElementById("cta");

// Format numbers with commas
function formatNumber(num) {
  return num.toLocaleString();
}

// Calculate monthly payments
function calculateMonthly(loan, rate, years) {
  const r = rate / 100 / 12;
  const n = years * 12;
  return (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

// Update displayed values
function updateAll() {
  const purchase = parseInt(purchaseRange.value);
  const down = parseInt(downRange.value);
  const loan = purchase - down;
  const rate = 5.25;
  const apr = 4.418;
  const points = 0.325;
  const monthly = calculateMonthly(loan, rate, 30);

  purchaseDisplay.textContent = formatNumber(purchase);
  downDisplay.textContent = formatNumber(down);
  monthlyDisplay.textContent = formatNumber(Math.round(monthly));
  rateDisplay.textContent = rate.toFixed(3) + "%";
  aprDisplay.textContent = apr.toFixed(3) + "%";
  pointsDisplay.textContent = points.toFixed(3);
}

// Event listeners
purchaseRange.addEventListener("input", updateAll);
downRange.addEventListener("input", updateAll);

// Button click animation
cta.addEventListener("click", () => {
  cta.style.transform = "translateX(-50%) scale(0.95)";
  setTimeout(() => {
    cta.style.transform = "translateX(-50%) scale(1)";
    alert("Starting");
  }, 200);
});

// Initial run
updateAll();
