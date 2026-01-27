# Expense-Tracker


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Expense Tracker</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f6f8;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .container {
      background: #fff;
      padding: 20px;
      width: 350px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    h2 {
      text-align: center;
      margin-bottom: 15px;
    }

    input {
      width: 100%;
      padding: 8px;
      margin: 5px 0;
    }

    button {
      width: 100%;
      padding: 10px;
      background: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
      margin-top: 10px;
      border-radius: 4px;
    }

    button:hover {
      background: #45a049;
    }

    ul {
      list-style: none;
      padding: 0;
      margin-top: 15px;
    }

    li {
      display: flex;
      justify-content: space-between;
      background: #f1f1f1;
      padding: 8px;
      margin-bottom: 5px;
      border-radius: 4px;
    }

    .delete {
      color: red;
      cursor: pointer;
      font-weight: bold;
    }

    .total {
      text-align: center;
      margin-top: 15px;
      font-size: 18px;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="container">
    <h2>Expense Tracker</h2>

    <input type="text" id="name" placeholder="Expense name">
    <input type="number" id="amount" placeholder="Amount">
    <button onclick="addExpense()">Add Expense</button>

    <ul id="expenseList"></ul>

    <div class="total">
      Total: ₹<span id="total">0</span>
    </div>
  </div>

  <script>
    let total = 0;

    function addExpense() {
      const name = document.getElementById("name").value;
      const amount = document.getElementById("amount").value;

      if (name === "" || amount === "") {
        alert("Please enter expense name and amount");
        return;
      }

      const li = document.createElement("li");
      li.innerHTML = `
        ${name} - ₹${amount}
        <span class="delete" onclick="deleteExpense(this, ${amount})">×</span>
      `;

      document.getElementById("expenseList").appendChild(li);

      total += parseFloat(amount);
      document.getElementById("total").innerText = total;

      document.getElementById("name").value = "";
      document.getElementById("amount").value = "";
    }

    function deleteExpense(element, amount) {
      element.parentElement.remove();
      total -= amount;
      document.getElementById("total").innerText = total;
    }
  </script>

</body>
</html>
