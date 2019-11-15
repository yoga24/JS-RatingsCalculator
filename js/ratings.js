console.log("JS loaded!");

function collect_ratings() {

    const elements = document.querySelectorAll('.rating');

    const ratings = {
        count: 0,
        sum: 0,
        average: 0
    };

    let rating = 0;

    elements.forEach(element => {
        rating = parseInt(element.id.replace('star',''));
        ratings.count = ratings.count + parseInt(element.value);
        if(ratings.count !== 0) {
            ratings.sum = ratings.sum + (rating * parseInt(element.value));
            ratings.average = ratings.sum / ratings.count;
        }
    });

    return ratings;
}

document.addEventListener('change', (event) => {
    const ratings = collect_ratings();
    document.querySelector('#average').value = ratings.average.toFixed(2);
})