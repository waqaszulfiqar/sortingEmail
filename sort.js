let emailGenerator = require('./create_unsorted_emails');

console.log("Total Generated Emails");
let totalEmails = emailGenerator.totalCreatedEmail(100000);
console.log(totalEmails);

function removeDuplicateEmails(array) {
    let clean = [];
    let dup = {};
    let start = process.hrtime();

    for (let i = 0, len = array.length; i < len; i++) {
        if (!dup[array[i]]) {
            dup[array[i]] = array[i];
            clean.push(array[i]);
        }
    }

    let end = process.hrtime(start);
    console.log('Total time: ' + end[0] + 's ' + end[1] / 1000000 + 'ms');
    return clean;
}

console.log("Total emails after removing duplicate");

let sortedList = removeDuplicateEmails(totalEmails);

console.log(sortedList);