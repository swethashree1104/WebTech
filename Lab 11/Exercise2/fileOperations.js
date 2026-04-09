// Import File System module using require()
const fs = require('fs');

// File name
const fileName = 'sample.txt';

// 1. Create a new file using writeFile()
fs.writeFile(fileName, 'Hello, this is the initial content.\n', (err) => {
    if (err) {
        console.error('Error creating file:', err);
        return;
    }
    console.log('File created successfully.');

    // 2. Read the file using readFile()
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('\nFile Content after creation:\n', data);

        // 3. Append data using appendFile()
        fs.appendFile(fileName, 'This is appended content.\n', (err) => {
            if (err) {
                console.error('Error appending file:', err);
                return;
            }
            console.log('Data appended successfully.');

            // 4. Read again after appending
            fs.readFile(fileName, 'utf8', (err, updatedData) => {
                if (err) {
                    console.error('Error reading updated file:', err);
                    return;
                }
                console.log('\nUpdated File Content:\n', updatedData);

                // 5. Delete file using unlink()
                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.error('Error deleting file:', err);
                        return;
                    }
                    console.log('File deleted successfully.');
                });
            });
        });
    });
});