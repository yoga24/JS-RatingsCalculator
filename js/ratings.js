function collect_ratings() {

    const elements = document.querySelectorAll('.rating');

    const ratings = {
        count: 0,
        sum: 0,
        average = 0
    };

    let rating = 0;

    elements.forEach(element => {
        rating = Number.parseInt(element.id.replace('star',''));
        const elementValue = Number.parseInt(element.value);
        if(elementValue !== 0) {
            ratings.count = ratings.count + elementValue;
            ratings.sum = ratings.sum + (rating * elementValue);
            ratings.average = ratings.sum / ratings.count;
        }
    });

    return ratings;
}

document.addEventListener('change', (event) => {
    const ratings = collect_ratings();
    document.getElementById('average').value = ratings.average.toPrecision(2);
})