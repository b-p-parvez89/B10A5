let serialNumber = 1;  // Define the serial number

document.getElementById("blog").addEventListener('click', function(e){
    window.location.href='./pages/blog.html';
})


// Flood functional part
document.getElementById("flood-btn").addEventListener('click', function (e) {
    e.preventDefault();
    const flood_donation_balance = parseFloat(document.getElementById("flood-input").value);
    const flood_balance = parseFloat(document.getElementById("flood-balance").innerText);
    addBalance(flood_donation_balance, flood_balance, "flood-balance", "Flood at Noakhali, Bangladesh");
});

// River functional part
document.getElementById("river-btn").addEventListener('click', function (e) {
    e.preventDefault();
    const donation_balance = parseFloat(document.getElementById("river-input").value);
    const balance = parseFloat(document.getElementById("river-balance").innerText);
    addBalance(donation_balance, balance, "river-balance","Support the Victims of Padma River Erosion");
});

// Quota functional part
document.getElementById("quota-btn").addEventListener('click', function (e) {
    e.preventDefault();
    const donation_balance = parseFloat(document.getElementById("quota-input").value);
    const balance = parseFloat(document.getElementById("quota-balance").innerText);
    addBalance(donation_balance, balance, "quota-balance","Honor the Martyrs of the 2024 Student Movement");
});

function addBalance(amount, balance, id, text_title) {
    const mainbalances = parseFloat(document.getElementById("main-balance").innerText);
    if (typeof amount !== 'number' || typeof balance !== 'number' || amount <= 0) {
        alert('Please Input Valid Amount');
        return;
    }
    if (mainbalances >= amount) {  // Changed condition to allow equal balance
        const newBalance = balance + amount;
        document.getElementById(id).innerText = newBalance + ' BDT';
        const totalbalance = mainbalances - amount;
        document.getElementById('main-balance').innerText = `${totalbalance} BDT`;
        
        showCustomAlert();
        TransactionToHistory(amount, text_title);  // Add transaction to history

    } else {
        alert("Insufficient balance");
    }
}

// Function to record the transaction in the history section
function TransactionToHistory(amount, text_title) {
    const date = new Date();
    const currentDate = date.toLocaleDateString();
    const time = date.toLocaleTimeString();

    const historyPart = document.getElementById('history-part');
    const newCard = document.createElement('div');
    newCard.classList.add('p-4', 'mb-4', 'border', 'border-gray-300', 'rounded-lg', 'shadow-md');

    newCard.innerHTML = `
        <div class="serial-number font-bold">Transaction #${serialNumber}</div>
        <div class="transaction-details">
            <p>Amount: ${amount.toFixed(2)} BDT Donated for ${text_title}</p>
            <p>Date: ${currentDate}</p>
            <p>Time: ${time}</p>
        </div>
    `;
    
    historyPart.appendChild(newCard);
    serialNumber++;
}

// Function to show the custom alert
function showCustomAlert() {
    document.getElementById("custom-alert").classList.remove('hidden');
}

document.getElementById("alert-ok-btn").addEventListener('click', function () {
    document.getElementById("custom-alert").classList.add('hidden');
});

// Navigation functions
function donateButton() {
    document.getElementById("donate-part").classList.remove("hidden");
    document.getElementById("history-part").classList.add("hidden");
    document.getElementById("donate-page").style.backgroundColor = "#B4F461";
    document.getElementById("history-page").style.backgroundColor = "white";
}

function historiButton() {
    document.getElementById("history-part").classList.remove("hidden");
    document.getElementById("donate-part").classList.add("hidden");
    document.getElementById("history-page").style.backgroundColor = "#B4F461";
    document.getElementById("donate-page").style.backgroundColor = "white";
}
