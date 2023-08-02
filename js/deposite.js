document.getElementById('btn-deposit').addEventListener('click', () => {
    
    
    const depositAmount = getInputValue('deposit-field')
    if (isNaN(depositAmount)) {
        document.getElementById('deposit-field').value = '';
        return alert('Not a Number!');
      }
      else{
        const previouslyDeposited = getTextValue('deposit-total');
        const currentTotalDeposit = previouslyDeposited + depositAmount;
        document.getElementById('deposit-total').innerText = currentTotalDeposit;

        const previousBalance = getTextValue('balance-total');
        const currentBalance = previousBalance + depositAmount;
        document.getElementById('balance-total').innerText = currentBalance;
      }


    // console.log(convertToNumber, typeof(convertToNumber));

    document.getElementById('deposit-field').value = '';
})