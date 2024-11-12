
function atm() {
    const message = prompt("Select a choice: 1.) See Account Name 2.) See Account holder name 3.) See Balance 4.) Deposit an Amount 5.) Withdraw an Amount")
    const account = {
        accountName: "John",
        balance: 2000,
        getAccountName: function() {
            console.log("John")
        },
        getBalance: function() {
            return this.balance;
        },
        deposit: function() {
            let addAmount = prompt("Enter the amount to deposit:");
            if (addAmount !== null && !isNaN(addAmount) && addAmount > 0) {
                this.balance += parseFloat(addAmount);
                console.log("Deposit successful. New balance is: " + this.balance);
            } else {
                console.log("Invalid deposit amount.");
            }
        },
        withDrawal: function(){
            let minusAmount = prompt("Enter the amount to withdraw:");
            if (minusAmount !== null && !isNaN(minusAmount) && minusAmount > 0) {
                this.balance -= parseFloat(minusAmount);
                console.log("Withdrawal successful. New balance is: " + this.balance);  
            }
            else {
                console.log("Invalid deposit amount.");
            }
        },
       }

    switch (message){
    case "1":
        console.log(account.accountName)
        break
    case "2":
        console.log(account.getAccountName());
        break
    case "3":
        console.log(account.getBalance());
        break
    case "4":
        account.deposit(); 
        break;
    case "5":
        account.withDrawal();
        break;
    default:
        console.log("No action matched.");
    }
}
atm();


