document.getElementById('btn-withdraw').addEventListener('click', () => {
    // console.log("HEY");
    const withdrawnAmount = getInputValue('withdraw-field')
    if (isNaN(withdrawnAmount)) {
        document.getElementById('withdraw-field').value = '';
        return alert('Not a Number!');
      }
      else{
        const previouslyWithdrawnAmount = getTextValue('withdraw-total');
        const previousTotalBalance = getTextValue('balance-total');
        const newWithdrawAmount = previouslyWithdrawnAmount + withdrawnAmount;
        const newTotalBalance = previousTotalBalance - withdrawnAmount;
        if(withdrawnAmount > previousTotalBalance){
            document.getElementById('withdraw-field').value = '';
            return alert('Insufficient Balance');
        }
        document.getElementById('withdraw-total').innerText = newWithdrawAmount;
        document.getElementById('balance-total').innerText = newTotalBalance;

        document.getElementById('withdraw-field').value = '';
      }
})