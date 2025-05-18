document.addEventListener("DOMContentLoaded", function() {
  // Raw CSV URL from GitHub (use the raw version of the file)
  const sheetUrl = "https://docs.google.com/spreadsheets/d/1XY1JiQkk4QP9mftAWPId7nnmf_qVm3MT8MHUJzAC3TU/edit?gid=0#gid=0";
  
  fetch(sheetUrl)
    .then(response => response.text())  // Fetch CSV file as text
    .then(csv => {
      // Parse CSV into an array of objects
      const results = Papa.parse(csv, { header: true, dynamicTyping: true });
      console.log("Parsed CSV Data:", results.data); // Log the parsed data for inspection
      populateEscalationTable(results.data);
    })
    .catch(error => {
      console.error("Error loading CSV file:", error);
    });
});

// Function to populate the table
function populateEscalationTable(data) {
  const tableBody = document.querySelector("#escalation-table tbody");
  data.forEach((row, index) => {
    const tr = document.createElement("tr");

    const department = document.createElement("td");
    department.textContent = row.Department || "N/A"; // Fallback in case of missing data
    tr.appendChild(department);

    const escalation1 = document.createElement("td");
    escalation1.textContent = row['Escalation 1'] || "N/A"; // Fallback in case of missing data
    tr.appendChild(escalation1);

    const mobile1 = document.createElement("td");
    mobile1.textContent = row['Mobile Number 1'] || "N/A"; // Fallback in case of missing data
    tr.appendChild(mobile1);

    const email1 = document.createElement("td");
    email1.textContent = row['Email 1'] || "N/A"; // Fallback in case of missing data
    tr.appendChild(email1);

    const escalation2 = document.createElement("td");
    escalation2.textContent = row['Escalation 2'] || "N/A"; // Fallback in case of missing data
    tr.appendChild(escalation2);

    const mobile2 = document.createElement("td");
    mobile2.textContent = row['Mobile Number 2'] || "N/A"; // Fallback in case of missing data
    tr.appendChild(mobile2);

    const email2 = document.createElement("td");
    email2.textContent = row['Email 2'] || "N/A"; // Fallback in case of missing data
    tr.appendChild(email2);

    const escalation3 = document.createElement("td");
    escalation3.textContent = row['Escalation 3'] || "N/A"; // Fallback in case of missing data
    tr.appendChild(escalation3);

    const mobile3 = document.createElement("td");
    mobile3.textContent = row['Mobile Number 3'] || "N/A"; // Fallback in case of missing data
    tr.appendChild(mobile3);

    const email3 = document.createElement("td");
    email3.textContent = row['Email 3'] || "N/A"; // Fallback in case of missing data
    tr.appendChild(email3);

    tableBody.appendChild(tr);
  });
}
