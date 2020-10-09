document.querySelector('.img-btn').addEventListener('click', function () {
        document.querySelector('.cont').classList.toggle('s-signup')
    }
);

function ValidateEmail(inputText) {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat)) {

        document.form1.text1.focus();
        return true;
    } else {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }

}

function ValidateEmail1(inputText) {
    const mailformat1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat1)) {

        document.form2.text2.focus();
        return true;
    } else {
        alert("You have entered an invalid email address!");
        document.form2.text2.focus();
        return false;
    }

}
