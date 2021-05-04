const unsorted_char = 'waqaszulfiqarunsortedemails100000';

function randString(charCount) {
    let string = '';
    let charLength = unsorted_char.length;
    for (let i = 0; i < charCount; i++) {
        string += unsorted_char.charAt(Math.floor(Math.random() * charLength));
    }
    return string;
}
function createRandomEmails() {
    return randString(7) + '@' + randString(2) + '.com';
}

function duplicateEmails(array) {
    let len = array.length;
    let duplicate = len / 2;

    for (let i = 0; i < duplicate; i++) {
        array[Math.floor(Math.random() * len)] = array[Math.floor(Math.random() * len)];
    }
}

function totalCreatedEmail(emailCount) {
    let emailArray = [];
    emailCount = emailCount || 100000
    for (let i = 0; i < emailCount; i++) {
        emailArray.push(createRandomEmails());
    }
    duplicateEmails(emailArray);
    return emailArray;
}

module.exports = {
    totalCreatedEmail: totalCreatedEmail
}