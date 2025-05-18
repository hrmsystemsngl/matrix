document.addEventListener("DOMContentLoaded", function() {
  // Raw CSV URL from GitHub (use the raw version of the file)
  const sheetUrl = "https://raw.githubusercontent.com/hrmsystemsngl/matrix/main/Escalation%20Matrix%20-%20PAN%20INDIA.csv";

  fetch(sheetUrl)
    .then(response => response.text())  // Fetch CSV file as text
    .then(csv => {
      // Parse CSV into an array of objects
      const results = Papa.parse(csv, { header: true, dynamicTyping: true });
      populateEscalationCards(results.data);
    })
    .catch(error => {
      console.error("Error loading CSV file:", error);
    });
});

// Function to populate the cards
function populateEscalationCards(data) {
  const container = document.querySelector("#escalation-cards");
  data.forEach((row) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${row.Department}</h3>
      <p><strong>Escalation 1:</strong> ${row['Escalation 1']}</p>
      <p><strong>Mobile:</strong> ${row['Mobile Number 1']}</p>
      <p><strong>Email:</strong> ${row['Email 1']}</p>
      <p><strong>Escalation 2:</strong> ${row['Escalation 2']}</p>
      <p><strong>Mobile:</strong> ${row['Mobile Number 2']}</p>
      <p><strong>Email:</strong> ${row['Email 2']}</p>
      <p><strong>Escalation 3:</strong> ${row['Escalation 3']}</p>
      <p><strong>Mobile:</strong> ${row['Mobile Number 3']}</p>
      <p><strong>Email:</strong> ${row['Email 3']}</p>
    `;

    container.appendChild(card);
  });
}
