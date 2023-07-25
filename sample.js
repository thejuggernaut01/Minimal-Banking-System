// btnSignUp.addEventListener('click', e => {
//   e.preventDefault();
//   const fullName = document.querySelector('.signup__name');
//   const password = document.querySelector('.signup__password');

//   const accountArray = [];

//   const account = {
//     owner: fullName.value,
//     movements: [],
//     interestRate: 1.2, // %
//     pin: +password.value,

//     movementsDates: [],
//     currency: 'USD',
//     locale: 'pt-PT', // de-DE
//   };
//   accountArray.push(account);

//   createUsernames(accountArray);

//   // Convert the account1 object to a JSON string
//   const accountJSON = JSON.stringify(accountArray);
//   // Store the JSON string in the localStorage under the key "account1Data"
//   localStorage.setItem('account1Data', accountJSON);
// });

// btnLoan.addEventListener('click', function (e) {
//   e.preventDefault();
//   const accountArray = [];

//   const amount = Math.floor(inputLoanAmount.value);
//   // amount > 0 || currentAccount.movements.some(mov => mov >= amount * 0.1);
//   if (amount > 0) {
//     setTimeout(function () {
//       // Add movement
//       currentAccount.movements.push(amount);

//       // Add loan date
//       currentAccount.movementsDates.push(new Date().toISOString());

//       // Update UI
//       updateUI(currentAccount);

//       console.log(currentAccount);
//       console.log(JSON.parse(localStorage.getItem('accountData')));

//       // Update Storage
//       accountArray.push(currentAccount);

//       const updatedAccountJSON = JSON.stringify(accountArray);
//       localStorage.setItem('accountData', updatedAccountJSON);

//       // Reset timer
//       clearInterval(timer);
//       timer = startLogOutTimer();
//     }, 2500);
//   }
//   inputLoanAmount.value = '';
// });
