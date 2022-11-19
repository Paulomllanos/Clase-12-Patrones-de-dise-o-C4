const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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


// con objetos en array tomando las barras  y filtrandolas por nombre de label con solo 2 label en eje x
// const data = [{x: 'Jan', net: 100, cogs: 50, gm: 50}, {x: 'Feb', net: 120, cogs: 55, gm: 75}];

// const cfg = new Chart(ctx, {
//     type: 'bar', // line , pie , 
//     data: {
//         labels: ['Jan', 'Feb'],
//         datasets: [{
//             label: 'Net sales',
//             data: data,
//             backgroundColor: 'rgb(244, 100, 20)',
//             parsing: {
//                 yAxisKey: 'net'
//             }
//         }, {
//             label: 'Cost of goods sold',
//             data: data,
//             backgroundColor: 'rgb(50, 200, 50)',
//             parsing: {
//                 yAxisKey: 'cogs'
//             }
//         }, {
//             label: 'Gross margin',
//             data: data,
//             backgroundColor: 'rgb(80, 150, 200)',
//             parsing: {
//                 yAxisKey: 'gm'
//             }
//         }]
//     },
//     options: {
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Prueba titulo',
//                 color: '#000',
//                 padding: {
//                     top: 10,
//                     bottom: 30  
//                 },
//                 font: {
//                     size: 40,
                    
//                 }
//             }
//         }
//     }
// });
 


