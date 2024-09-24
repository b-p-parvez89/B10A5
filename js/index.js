
console.log("Hello Bangladehs");

const flood_balance = document.getElementById("flood-balance").innerText;
const flood_donation_balance = document.getElementById("flood-input").value;
flood_btn = document.getElementById("flood-btn");

const river_balance = document.getElementById("river-balance").innerText;
const river_donation_balance = document.getElementById("river-input");
const river_btn = document.getElementById("river-btn");


const quota_balance = document.getElementById("quota-balance").innerText;
const quota_donation_balance = document.getElementById("quota-input").value;
const quota_btn = document.getElementById("quota-btn");
// Flood fuctional part
document.getElementById("flood-btn").addEventListener('click', function (e) {
    e.preventDefault();
    const flood_donation_balance = parseFloat(document.getElementById("flood-input").value);
    const flood_balance = parseFloat(document.getElementById("flood-balance").innerText);
    addBalance(flood_donation_balance, flood_balance, "flood-balance");

});

// River Fuctional part
document.getElementById("river-btn").addEventListener('click', function (e) {
    console.log("river button cliked");
    e.preventDefault();
    const donation_balance = parseFloat(document.getElementById("river-input").value);
    const balance = parseFloat(document.getElementById("river-balance").innerText);
    addBalance(donation_balance, balance, "river-balance");

});

// Quota Fuctional Part
document.getElementById("quota-btn").addEventListener('click', function (e) {
    e.preventDefault();
    const donation_balance = parseFloat(document.getElementById("quota-input").value);
    const balance = parseFloat(document.getElementById("quota-balance").innerText);
    addBalance(donation_balance, balance, "quota-balance");

});

function addBalance(amount, balance, id) {
    const mainbalances = parseFloat(document.getElementById("main-balance").innerText);
    if (typeof amount !== 'number' || typeof balance !== 'number' || amount <= 0) {
        alert('Please Input Valid  Amaount');
        return;
    }
    if (mainbalances > amount) {
        const mainbalance = balance + amount;
        // document.getElementById("flood-balance").innerText = mainbalance;
        document.getElementById(id).innerText = mainbalance;

        totalbalance = mainbalances - amount;
        console.log(totalbalance);

        document.getElementById('main-balance').innerText = `${totalbalance}`;
        showCustomAlert();

    } else {
        alert("Insufficient balance")
    }

}


// Cliked Button


function donateButton() {
    document.getElementById("donate-page").classList.add("text-black", "bg-[#8beb0d]")
    document.getElementById("donate-part").classList.remove("hidden")
    document.getElementById("history-part").classList.add("hidden","bg-white")
    document.getElementById("history-page").classList.remove("bg-[#B4F461]", "hover:bg-[#8beb0d]")
}

function historiButton() {
    document.getElementById("history-page").classList.add("text-black", "bg-[#8beb0d]", "hover:bg-[#8beb0d]")
    document.getElementById("history-part").classList.remove("hidden")
    document.getElementById("donate-part").classList.add("hidden")
    document.getElementById("donate-page").classList.remove("bg-[#B4F461]", "hover:bg-[#8beb0d]")

}

// Function to show the custom alert
function showCustomAlert() {
    document.getElementById("custom-alert").classList.remove('hidden');
}
document.getElementById("alert-ok-btn").addEventListener('click', function () {
    document.getElementById("custom-alert").classList.add('hidden');
});






