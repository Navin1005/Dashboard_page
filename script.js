// Company Details Data
const companyData = [
    {
        logo: "data/cyber.jpg",
        company: "CyberSecure Inc.",
        year_founded: 2015,
        employees: 500,
        hq_country: "USA",
        hq_city: "Austin",
        subcategory: "Endpoint Security",
        customer_industries: "Finance, Healthcare",
        customer_size: "Enterprise",
        tech_stack: "Java, Python",
        pricing: "SaaS"
    },
    {
        logo: "data/shield.webp",
        company: "ShieldTech Ltd.",
        year_founded: 2010,
        employees: 300,
        hq_country: "UK",
        hq_city: "London",
        subcategory: "Threat Detection",
        customer_industries: "Retail, Banking",
        customer_size: "Mid-size",
        tech_stack: "C++, Go",
        pricing: "Freemium"
    }
];

// Funding Details Data
const fundingData = [
    {
        amount_raised: "$50M",
        date_of_funding: "2022-06-15",
        funding_round: "Series B",
        ceo: "John Doe",
        lead_investor: "Venture Capital A"
    },
    {
        amount_raised: "$20M",
        date_of_funding: "2021-04-10",
        funding_round: "Series A",
        ceo: "Jane Smith",
        lead_investor: "Angel Investors"
    }
];

// Populate Company Details Table
const companyTable = document.getElementById("companyTable").getElementsByTagName("tbody")[0];
companyData.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td><img src="${row.logo}" alt="${row.company} Logo"></td>
        <td>${row.company}</td>
        <td>${row.year_founded}</td>
        <td>${row.employees}</td>
        <td>${row.hq_country}</td>
        <td>${row.hq_city}</td>
        <td>${row.subcategory}</td>
        <td>${row.customer_industries}</td>
        <td>${row.customer_size}</td>
        <td>${row.tech_stack}</td>
        <td>${row.pricing}</td>
    `;
    companyTable.appendChild(tr);
});

// Populate Funding Details Table
const fundingTable = document.getElementById("fundingTable").getElementsByTagName("tbody")[0];
fundingData.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${row.amount_raised}</td>
        <td>${row.date_of_funding}</td>
        <td>${row.funding_round}</td>
        <td>${row.ceo}</td>
        <td>${row.lead_investor}</td>
    `;
    fundingTable.appendChild(tr);
});

// Filter Function for Company Table
function applyFilter() {
    const filterInput = document.getElementById("filterInput").value.toLowerCase();
    const rows = companyTable.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        const companyCell = rows[i].getElementsByTagName("td")[1];
        if (companyCell) {
            const companyName = companyCell.textContent.toLowerCase();
            rows[i].style.display = companyName.includes(filterInput) ? "" : "none";
        }
    }
}
