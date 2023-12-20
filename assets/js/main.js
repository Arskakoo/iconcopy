document.addEventListener("DOMContentLoaded", function () {
    let allIcons = [];
    fetch('assets/json/icons.json')
        .then(response => response.json())
        .then(jsonData => {
            allIcons = jsonData.icons;
            const iconContainer = document.getElementById('icon-container');
            const updateIcons = (searchTerm) => {
                iconContainer.innerHTML = '';
                const filteredIcons = allIcons.filter(icon => {
                    return icon.tags.some(tag => tag.includes(searchTerm.toLowerCase()));
                });
                filteredIcons.forEach(icon => {
                    const spanElement = document.createElement('span');
                    spanElement.className = 'material-icons material-symbols-rounded';
                    spanElement.textContent = icon.name;
                    spanElement.addEventListener('click', function () {
                        copyToClipboard(spanElement.outerHTML, spanElement);
                    });

                    iconContainer.appendChild(spanElement);
                });
            };
            const searchInput = document.getElementById('search');
            searchInput.addEventListener('input', function () {
                const searchTerm = this.value.trim();
                updateIcons(searchTerm);
            });
            updateIcons('');
            const copyToClipboard = (text, spanElement) => {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            };
        })
        .catch(error => console.error('Error fetching JSON:', error));
});

document.addEventListener('DOMContentLoaded', function () {
    var copyLinkButton = document.getElementById('copylink');

    copyLinkButton.addEventListener('click', function () {
        var textarea = document.createElement('textarea');
        textarea.value = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    });
});