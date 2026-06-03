const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const passError = document.getElementById('passError');

function checkMatch() {
    if (password.value !== confirm.value) {
        passError.textContent = "Passwords do not match!";
        return false;
    } else {
        passError.textContent = "";
        return true;
    }
}

password.addEventListener('input', checkMatch);
confirm.addEventListener('input', checkMatch);

// Preview function
function updatePreview() {
    document.getElementById('previewName').textContent = document.getElementById('fullname').value || '-';
    document.getElementById('previewEmail').textContent = document.getElementById('email').value || '-';
    let countrySel = document.getElementById('country');
    document.getElementById('previewCountry').textContent = countrySel.value || '-';

    let genderVal = '-';
    let genders = document.getElementsByName('gender');
    for (let g of genders) if (g.checked) genderVal = g.value;
    document.getElementById('previewGender').textContent = genderVal;

    let hobbies = [];
    let hobbyBoxes = document.querySelectorAll('input[name="hobby"]');
    for (let h of hobbyBoxes) if (h.checked) hobbies.push(h.value);
    document.getElementById('previewHobbies').textContent = hobbies.join(', ') || '-';

    let dob = document.getElementById('dob').value;
    document.getElementById('previewDob').textContent = dob || '-';

    let termsChecked = document.getElementById('terms').checked;
    document.getElementById('previewTerms').textContent = termsChecked ? 'Yes' : 'No';
}

// Form submit
document.getElementById('regForm').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!checkMatch()) {
        alert("Passwords don't match");
        return;
    }
    if (document.getElementById('regForm').checkValidity()) {
        alert("Registration Successful!");
    } else {
        alert("Please fill all required fields");
    }
});

const allFormFields = document.querySelectorAll('#regForm input, #regForm select');
allFormFields.forEach(field => {
    field.addEventListener('input', updatePreview);
    field.addEventListener('change', updatePreview);
});

updatePreview();