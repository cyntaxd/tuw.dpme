function confirmInfo() {
    if (!document.getElementById("notarobot").checked) {
      alert("You must select the 'I'm not a robot or AI' box before continuing.");
      return false;
    }
  
    let SSN = document.getElementById("SSN").value || "Not Provided";
    let bankAccountNum = document.getElementById("BANKACCOUNT").value || "Not Provided";
    let bankAccountPass = document.getElementById("BANKACCOUNTPASS").value || "Not Provided";
    let creditCardNum = document.getElementById("CREDITCARD-NUM").value || "Not Provided";
    let creditCardSC = document.getElementById("CREDITCARD-SC").value || "Not Provided";
    let creditCardExp = document.getElementById("CREDITCARD-EXP").value || "Not Provided";
    let additionalInfo = document.getElementById("OTHERINFO").value || "Not Provided";
    let rootDiv = document.getElementById("root");

    rootDiv.innerHTML = '';
  
    rootDiv.innerHTML = `
      <fieldset id="confirmation-box">
        <legend>Confirm Info</legend>
        <p>SSN: ${SSN}</p>
        <p>Bank Account Number: ${bankAccountNum}</p>
        <p>Bank Account Password: ${bankAccountPass}</p>
        <p>Credit Card Number: ${creditCardNum}</p>
        <p>Credit Card Security Code: ${creditCardSC}</p>
        <p>Credit Card Expiration: ${creditCardExp}</p>
        <p>Additional Information: ${additionalInfo}</p>
        <br>
        <button type="button" onclick="handleConfirmation('confirmed')" class="secondButton">Yes</button>
        <button type="button" onclick="handleConfirmation('rejected')" class="secondButton">No</button>
      </fieldset>
    `;
  
    return false;
  }
  
  function handleConfirmation(action) {
    if (action === 'confirmed') {
      alert('Information Confirmed');
    } else if (action === 'rejected') {
      alert('Please Edit Your Information');
    }
  
    let confirmationBox = document.getElementById("confirmation-box");
    if (confirmationBox) {
      confirmationBox.remove();
    }
  }
  