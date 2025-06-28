// Declare a global array to hold all chart instances
window.myCharts = [];

function renderChart(canvasID, labels, values, label) {
    const ctx = document.getElementById(canvasID).getContext('2d');

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: values,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4,
                pointRadius: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 30
                        }
                    }
                },
                title: {
                    display: false
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time',
                        font: {
                            size: 26
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: label,
                        font: {
                            size: 26
                        }
                    }
                }
            }
        }
    });

    // Store this chart in the global array
    window.myCharts.push(chart);
}