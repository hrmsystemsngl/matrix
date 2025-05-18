document.addEventListener("DOMContentLoaded", function() {
  // Replace this with the path to your CSV file on GitHub
  const sheetUrl = "https://raw.githubusercontent.com/your-username/your-repository/main/data/escalation-matrix.csv";
  
  fetch(sheetUrl)
    .then(response => response.text())  // Fetch CSV file as text
    .then(csv => {
      // Parse CSV into an array of objects
      const results = Papa.parse(csv, { header: true, dynamicTyping: true });
      populateEscalationTable(results.data);
    });
});

// Function to populate the table
function populateEscalationTable(data) {
  const tableBody = document.querySelector("#escalation-table tbody");
  data.forEach((row) => {
    const tr = document.createElement("tr");
    Object.values(row).forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
}
