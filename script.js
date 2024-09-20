const fileInput = document.getElementById('file-upload');
const appGrid = document.getElementById('app-grid');
const clearButton = document.getElementById('clear-button');

fileInput.addEventListener('change', (event) => {
  const files = event.target.files;

  for (const file of files) {
    const appCard = document.createElement('div');
    appCard.classList.add('app-card');

    const appIcon = document.createElement('img');
    appIcon.src = 'https://via.placeholder.com/100'; // Placeholder for app icon

    const appName = document.createElement('h3');
    appName.textContent = file.name;

    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download';
    downloadButton.classList.add('download-btn');

    // Create download link for the file
    downloadButton.onclick = () => {
      const fileURL = URL.createObjectURL(file);
      const a = document.createElement('a');
      a.href = fileURL;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };

    appCard.appendChild(appIcon);
    appCard.appendChild(appName);
    appCard.appendChild(downloadButton);
    appGrid.appendChild(appCard);
  }

  // Clear the file input after processing
  fileInput.value = '';
});

// Clear all uploaded apps
clearButton.addEventListener('click', () => {
  appGrid.innerHTML = ''; // Remove all app cards
});
