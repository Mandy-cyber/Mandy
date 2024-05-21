window.addEventListener('resize', moveIcon);
document.addEventListener('DOMContentLoaded', moveIcon)

// Moves the single app from the second app section
// to the first app section upon mobile/tablet view resize
function moveIcon() {
    const appSection1 = document.getElementById('app-section-1');
    const appSection2 = document.getElementById('app-section-2');
    const notepadApp = document.getElementById('notepad');

    if (window.innerWidth <= 600) {
        if (appSection2.contains(notepadApp)) {
            appSection1.appendChild(notepadApp);
        }
    } else {
        if (!appSection2.contains(notepadApp)) {
            appSection2.appendChild(notepadApp);
        }
    }
}