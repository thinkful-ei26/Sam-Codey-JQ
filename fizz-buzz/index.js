const fizzbuzz = (num) => {
    if (num % 15 === 0) return 'fizzbuzz';
    if (num % 5 === 0) return 'buzz';
    if (num % 3 === 0) return 'fizzbuzz';
    return num;
}

const generateDiv = (fizzbuzzedResult) => {
    let customClass = '';
    if (typeof fizzbuzzedResult === 'string') {
        customClass = fizzbuzzedResult;
    }
    return `
    <div class="fizz-buzz-item ${customClass}">
        <span>${fizzbuzzedResult}</span>
    </div>
    `
}

function main() {
    $('#number-chooser').on('submit', event => {
        event.preventDefault();

        const countTo = $('#number-choice').val();

        const fizzbuzzedResults = [];
        for (let i = 1; i <= countTo; i++) {
            fizzbuzzedResults.push(fizzbuzz(i));
        }
        console.log(fizzbuzzedResults)

        let elements = fizzbuzzedResults.map(result => {
            
            $('.js-results').append(generateDiv(result));
        });
    })
}

$(main);