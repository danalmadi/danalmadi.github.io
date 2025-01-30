const terminal = document.getElementById('terminal');

// Generate random "code-like" text
function generateRandomCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let code = '';
    for (let i = 0; i < 80; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// Continuously add lines of text to the terminal
function addLine() {
    const line = document.createElement('div');
    line.textContent = generateRandomCode();
    terminal.appendChild(line);

    // Scroll to the bottom
    terminal.scrollTop = terminal.scrollHeight;

    // Repeat every 50ms
    setTimeout(addLine, 50);
}

// Exit simulation with a specific key combination (Shift + C + Enter)
document.addEventListener('keydown', (event) => {
    if (event.shiftKey && event.key === 'C' && event.code === 'Enter') {
        alert('Simulation Ended');
        window.location.reload(); // Reload the page to stop the simulation
    }
});

// Start the simulation
addLine();
