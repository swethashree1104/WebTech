document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Clear canvas with light background
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 1. Filled rectangle (blue) - positioned at top-left
    ctx.fillStyle = '#4A90E2';
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.fillRect(50, 40, 150, 80);
    ctx.shadowBlur = 0; // Reset shadow

    // 2. Filled circle (green) - positioned at top-right
    ctx.beginPath();
    ctx.arc(380, 90, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#7ED321';
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.fill();
    ctx.shadowBlur = 0;

    // 3. PERFECTLY STRAIGHT LINE (red) - horizontal line at exact y=220
    ctx.strokeStyle = '#D0021B';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = 'rgba(0,0,0,0.4)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    
    ctx.beginPath();
    ctx.moveTo(30, 220);  // Perfectly straight horizontal line
    ctx.lineTo(470, 220); // Same Y coordinate = perfectly straight
    ctx.stroke();
    ctx.shadowBlur = 0;

    // 4. Text "HTML5 Canvas" - centered at bottom
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 28px "Segoe UI", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.fillText('HTML5 Canvas', 250, 280);
    ctx.shadowBlur = 0;

    // Add subtle grid for reference (optional - shows perfect alignment)
    ctx.strokeStyle = 'rgba(0,0,0,0.05)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
});
