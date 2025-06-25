const channelID = '2844572'; 
const readAPIKey = 'YRO0PW021PLF1KUD'; 

const fields = [
    { id: 1, label: 'Temperature (°C)' },
    { id: 2, label: 'Humidity (%)' },
    { id: 3, label: 'Distance' },
    { id: 4, label: 'Turbidity (NTU)' },
    { id: 5, label: 'pH Value ' }
];

fields.forEach(field => {
    fetchFieldData(field.id, field.label);
});

function fetchFieldData(fieldID, labelName) {
    const url = `https://api.thingspeak.com/channels/${channelID}/fields/${fieldID}.json?results=39016${readAPIKey ? `&api_key=${readAPIKey}` : ''}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const labels = data.feeds.map(feed => {
                const time = new Date(feed.created_at);
                return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            });

            const values = data.feeds.map(feed => parseFloat(feed[`field${fieldID}`]));

            renderChart(`chart${fieldID}`, labels, values, labelName);
        })
        .catch(error => {
            console.error(`Error loading field${fieldID}:`, error);
        });
}

function renderChart(canvasID, labels, values, label) {
    const ctx = document.getElementById(canvasID).getContext('2d');
    new Chart(ctx, {
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
}