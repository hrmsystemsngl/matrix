document.addEventListener("DOMContentLoaded", function() {
  Papa.parse("https://raw.githubusercontent.com/your-username/your-repository/main/data/escalation-matrix.csv", {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: function(results) {
      populateEscalationTable(results.data);
    }
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
