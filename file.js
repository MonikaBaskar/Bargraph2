// Sample data for agriculture usage by country
const agricultureData = {
    labels: ['USA', 'China', 'India', 'Brazil', 'Russia'],
    datasets: [{
        label: 'Agriculture Usage (%)',
        data: [40, 25, 60, 30, 20],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 205, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(54, 162, 235, 0.6)'
        ],
        borderWidth: 1
    }]
};

document.addEventListener('DOMContentLoaded', function() {
    // Create a pie chart
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    new Chart(pieCtx, {
        type: 'pie',
        data: agricultureData
    });

    // Create a bar graph
    const barCtx = document.getElementById('barGraph').getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: agricultureData,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
});
