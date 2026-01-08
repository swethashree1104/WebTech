let draggedTask = null;

function addTask() {
    const input = document.getElementById('taskInput');
    const taskName = input.value.trim();
    if (!taskName) return;

    const task = document.createElement('div');
    task.className = 'task';
    task.draggable = true;
    task.dataset.taskId = Date.now(); // Unique ID
    task.innerHTML = `
        <strong>${taskName}</strong><br>
        <small>${new Date().toLocaleDateString()}</small>
    `;
    
    // Event listeners for this specific task
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);

    document.getElementById('todo').appendChild(task);
    input.value = '';
    input.focus();
}

function allowDrop(ev) {
    ev.preventDefault();
    ev.currentTarget.style.backgroundColor = 'rgba(74, 144, 226, 0.1)';
}

function dragStart(ev) {
    draggedTask = this; // Store reference to dragged element
    this.classList.add('dragging');
    ev.dataTransfer.effectAllowed = 'move';
}

function dragEnd(ev) {
    // Reset column colors
    document.querySelectorAll('.column').forEach(col => {
        col.style.backgroundColor = '';
    });
    
    if (draggedTask) {
        draggedTask.classList.remove('dragging');
        draggedTask = null;
    }
}

function drop(ev) {
    ev.preventDefault();
    
    // Reset column colors
    document.querySelectorAll('.column').forEach(col => {
        col.style.backgroundColor = '';
    });

    if (draggedTask) {
        // Remove from old position
        draggedTask.parentNode.removeChild(draggedTask);
        
        // Add to new position (at the end)
        ev.currentTarget.appendChild(draggedTask);
        
        // Check if dropped in completed column
        if (ev.currentTarget.id === 'completed') {
            draggedTask.classList.add('completed');
            
            // Show success message
            const message = document.getElementById('successMessage');
            message.style.display = 'block';
            setTimeout(() => {
                message.style.display = 'none';
            }, 3000);
        }
        
        draggedTask = null;
    }
}

// Allow Enter key to add task
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});

// Initialize - Add some sample tasks
document.addEventListener('DOMContentLoaded', function() {
    const sampleTasks = ['Design homepage', 'Create login form', 'Test API endpoints'];
    sampleTasks.forEach(taskName => {
        setTimeout(() => {
            document.getElementById('taskInput').value = taskName;
            addTask();
        }, 500);
    });
});
