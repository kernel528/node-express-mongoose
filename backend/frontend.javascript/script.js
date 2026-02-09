const API_BASE_URL = "http://localhost:5555"; // Replace with your backend's actual URL

document.getElementById("listUsers").addEventListener("click", async () => {
    fetchData("/users");
});

document.getElementById("listQuotes").addEventListener("click", async () => {
    fetchData("/quotes");
});

async function fetchData(endpoint) {
    const output = document.getElementById("output");
    output.innerHTML = "Loading...";

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data = await response.json();
        displayData(data);
    } catch (error) {
        output.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}

function displayData(data) {
    const output = document.getElementById("output");
    if (data.length === 0) {
        output.innerHTML = "<p>No data found.</p>";
        return;
    }

    const list = document.createElement("ul");
    data.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = JSON.stringify(item, null, 2);
        list.appendChild(listItem);
    });

    output.innerHTML = "";
    output.appendChild(list);
}
