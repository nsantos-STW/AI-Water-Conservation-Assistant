function analyzeUsage() {
  const usage = document.getElementById("usage").value;
  const habits = document.querySelectorAll(".habit:checked");

  if (!usage) {
    alert("Please enter your water usage.");
    return;
  }

  let wasteSources = [];
  let wasteScore = 0;

  habits.forEach(habit => {
    if (habit.value === "long_showers") {
      wasteSources.push("long showers");
      wasteScore += 15;
    }
    if (habit.value === "running_tap") {
      wasteSources.push("running tap while brushing");
      wasteScore += 10;
    }
    if (habit.value === "lawn_watering") {
      wasteSources.push("frequent lawn watering");
      wasteScore += 20;
    }
  });

  const estimatedWaste = Math.round(usage * (wasteScore / 100));
  const potentialSavings = Math.round(estimatedWaste * 0.7);
  const moneySavings = (potentialSavings * 0.002).toFixed(2);

  document.getElementById("analysis").innerText =
    wasteSources.length > 0
      ? `AI detected possible water waste from: ${wasteSources.join(", ")}.`
      : "Great job! Your habits show efficient water use.";

  document.getElementById("savings").innerText =
    `You could save approximately ${potentialSavings} gallons per month.`;

  document.getElementById("forecast").innerText =
    `Estimated monthly cost savings: $${moneySavings}`;

  document.getElementById("results").classList.remove("hidden");
}
