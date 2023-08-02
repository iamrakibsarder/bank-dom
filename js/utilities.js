function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputValueString = inputField.value;
    const depositValue = parseFloat(inputValueString);
    return depositValue;
}

function getTextValue(id){
    const getText = document.getElementById(id);
    const getInnerText = getText.innerText;
    const convertToNumber = parseFloat(getInnerText);
    return convertToNumber;
}
