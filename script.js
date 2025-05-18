document.addEventListener("DOMContentLoaded", function() {
  // Replace this with the path to your CSV file on GitHub
  const sheetUrl = "https://raw.githubusercontent.com/your-username/your-repository/main/data/escalation-matrix.csv";
  
  fetch(sheetUrl)
    .then(response => response.text())  // Fetch CSV file as text
    .then(csv => {
      // Parse CSV into an array of objects
      const results = Papa.parse(csv, { header: true, dynamicTyping: true });
      populateEscalationCards(results.data);
    });
});

// Function to populate the cards
function populateEscalationCards(data) {
  const container = document.querySelector("#escalation-cards");
  data.forEach((row) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${row.department}</h3>
      <p><strong>Escalation 1:</strong> ${row.escalation1}</p>
      <p><strong>Mobile:</strong> ${row.mobile1}</p>
      <p><strong>Email:</strong> ${row.email1}</p>
      <p><strong>Escalation 2:</strong> ${row.escalation2}</p>
      <p><strong>Mobile:</strong> ${row.mobile2}</p>
      <p><strong>Email:</strong> ${row.email2}</p>
      <p><strong>Escalation 3:</strong> ${row.escalation3}</p>
      <p><strong>Mobile:</strong> ${row.mobile3}</p>
      <p><strong>Email:</strong> ${row.email3}</p>
    `;

    container.appendChild(card);
  });
}
