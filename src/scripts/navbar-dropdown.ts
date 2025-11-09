// NAVBAR DROPDOWN
// --------------------------------------------------------------------
// show dropdown when home is hovered

export function initNavbarDropdown(): void {
  const homeText = document.getElementById('home-a');
  const dropDown = document.getElementById('tech-dropdown');

  if (!homeText || !dropDown) return;

  homeText.addEventListener('mouseover', function() {
    (dropDown as HTMLElement).style.display = "flex";
  });

  // hide dropdown when leaving home text or tech dropdown area
  document.addEventListener('mouseover', function(event) {
    const target = event.target as Node;
    if (!homeText.contains(target) && !dropDown.contains(target)) {
      (dropDown as HTMLElement).style.display = "none";
    }
  });
}
