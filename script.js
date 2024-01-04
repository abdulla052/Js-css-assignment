
let html = `
<div class="container">
    <form>
      <div class="inputs-container">
        <label for="name">Name: </label>
        <input class="input name" type="text" id="name" autocomplete="given-name">
        <small class="n-small"></small>
        <br>

        <label for="Email">Email: </label>
        <input class="input email" type="email" id="Email" autocomplete="off">
        <small class="e-small"></small>
        <br>

        <label for="age">Age: </label>
        <input class="input age" type="number" id="age" autocomplete="off">
        <small class="a-small"></small>
      </div>
      <input class="submit-btn" type="submit" value="Add Data">
    </form>

    <!-- <button class="submit-btn">Add Data</button> -->

    <div class="pop-up">
      <span class="close-btn">X</span>
      <span class="popup-title">Form Message</span>
      <h3 class="popup-message">Insert succesfully!</h3>
    </div>

    <div class="table-container">
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </table>
    </div>
  </div>
`;

document.body.innerHTML = html;

const container = document.querySelector('.container');
const popUp = document.querySelector('.pop-up');
const closeBtn = document.querySelector('.close-btn');
const form = document.querySelector('form');
// const submitBtn = document.querySelector('.submit-btn');
const table = document.querySelector('table');
const nameInp = document.querySelector('.name');
const emailInp = document.querySelector('.email');
const ageInp = document.querySelector('.age');
const nError = document.querySelector('.n-small')
const eError = document.querySelector('.e-small')
const aError = document.querySelector('.a-small')

// container.innerHTML = html;

closeBtn.addEventListener('click', () => {
    popUp.style.display = 'none';
});


form.addEventListener('submit', (e) => {

    e.preventDefault();
    if (nameInp.value && emailInp.value && ageInp.value) {
        popUp.style.display = 'block';
        table.innerHTML += `
            <tr>
                <td>${nameInp.value}</td>
                <td>${emailInp.value}</td>
                <td>${ageInp.value}</td>
            </tr>
            `;

        nameInp.value = "";
        emailInp.value = "";
        ageInp.value = "";

        nError.innerHTML = "";
        eError.innerHTML = "";
        aError.innerHTML = "";
    } else {
        if (!nameInp.value) {
            nError.innerHTML = "This field is required!"
        } else {
            nError.innerHTML = "";
        }

        if (!emailInp.value) {
            eError.innerHTML = "This field is required!"
        } else {
            eError.innerHTML = "";
        }

        if (!ageInp.value) {
            aError.innerHTML = "This field is required!"
        } else {
            aError.innerHTML = "";
        }
    }
});