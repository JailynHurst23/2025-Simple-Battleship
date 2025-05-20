// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Get all grid items
    const gridItems = document.querySelectorAll('.grid-item');
    const statusMessage = document.querySelector('.status-message');
    
    // Add click event listeners to each grid item
    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            // If already selected, do nothing
            if (this.classList.contains('selected')) {
                return;
            }
            
            // Add selected class
            this.classList.add('selected');
            
            // Randomly determine if it's a hit or miss
            if (Math.random() > 0.5) {
                this.classList.add('hit');
                statusMessage.textContent = `Hit! You found a ship at position ${this.textContent}!`;
                statusMessage.style.color = '#4CAF50';
            } else {
                this.classList.add('miss');
                statusMessage.textContent = `Miss! No ship at position ${this.textContent}.`;
                statusMessage.style.color = '#e74c3c';
            }
            
            // Display which grid item was clicked
            console.log(`Grid item ${this.textContent} was clicked`);
        });
    });
    
    // Add a reset button functionality
    const resetButton = document.getElementById('reset-button');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            gridItems.forEach(item => {
                item.classList.remove('selected');
                item.classList.remove('hit');
                item.classList.remove('miss');
            });
            statusMessage.textContent = 'Game reset! Take your first shot.';
            statusMessage.style.color = '#333';
            console.log('Grid has been reset');
        });
    }
});