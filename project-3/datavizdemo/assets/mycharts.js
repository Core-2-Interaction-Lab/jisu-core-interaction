// const ctx = document.getElementById('myChart');

// new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// get our data and use the reduce function to count the number of bites per breed
fetch('assets/allbites.json')
    .then(response => response.json())
    .then(data => {
        const breedCounts = data.reduce((counts, item) => {
            counts[item.breed] = (counts[item.breed] || 0) + 1;
            return counts;
        }, {});

        const breedNames = Object.keys(breedCounts);
        const breedCountsArray = Object.values(breedCounts);

        // Call the function to create the chart
        createPieChart(breedNames, breedCountsArray);
    });


// make the chart
function createPieChart(labels, data) {
    const canvas = document.getElementById('breedChart');
    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    '#F94143',
            
                ]
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: 'right'
            }
        }
    });
}















fetch('assets/allbites.json')
    .then(response => response.json())
    .then(data => {
        const genderCounts = data.reduce((counts, item) => {
            counts[item.gender] = (counts[item.gender] || 0) + 1;
            return counts;
        }, {});

        const genderNames = Object.keys(genderCounts);
        const genderCountsArray = Object.values(genderCounts);

        // Call the function to create the chart
        createPieChart(genderNames, genderCountsArray);
    });


// make the chart
function createPieChart(labels, data) {
    const canvas = document.getElementById('genderChart');
    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    '#ff6384',
            
                ]
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: 'right'
            }
        }
    });
}



const ctx = document.getElementById('topChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Pitbull', 'shih tuz', 'chihuahua'],
        datasets: [{
            label: '# of Votes',
            data: [194, 34, 17],
            backgroundColor: [
                '#F94143'
            ],

            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
