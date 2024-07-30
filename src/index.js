module.exports = function toReadable(number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        return ones[number];
    } else if (number < 100) {
        let remainder = number % 10;
        return tens[Math.floor(number / 10)] + (remainder ? ' ' + ones[remainder] : '');
    } else {
        let remainder = number % 100;
        let hundreds = Math.floor(number / 100);
        let tensAndOnes = toReadable(remainder);
        return ones[hundreds] + ' hundred' + (remainder ? ' ' + tensAndOnes : '');
    }
}
