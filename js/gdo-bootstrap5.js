const leftSidebar = document.getElementById('gdo-left-bar');
const rightSidebar = document.getElementById('gdo-right-bar');
const mainContent = document.getElementById('gdo-pagewrap');

document.getElementById('toggleLeftSidebar').addEventListener('click', () => {
    if (leftSidebar.style.display === 'block') {
        leftSidebar.style.display = 'none';
        mainContent.style.marginLeft = '0';
    } else {
        leftSidebar.style.display = 'block';
        mainContent.style.marginLeft = '250px';
    }
});

document.getElementById('toggleRightSidebar').addEventListener('click', () => {
    if (rightSidebar.style.display === 'block') {
        rightSidebar.style.display = 'none';
        mainContent.style.marginRight = '0';
    } else {
        rightSidebar.style.display = 'block';
        mainContent.style.marginRight = '250px';
    }
});
