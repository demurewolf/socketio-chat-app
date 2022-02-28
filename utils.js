// Generate a username with a random 4 digit padded number
function generateRandomUsername() {
    const PREFIX = 'client'
    const MAX = 10000;
    const salt = Math.floor(Math.random() * MAX);
    var saltStr = String(salt);
    if (salt < 1000) {
        var digits = saltStr.length;
        while (digits < 4) {
            saltStr = '0' + saltStr;
            digits = saltStr.length;
        }
    }
    const name = PREFIX + saltStr;

    return name;
}

module.exports = generateRandomUsername;