// FLOATING ICONS
// --------------------------------------------------------------------
// show hidden icons + change icon animations

export function initFloatingIcons(): void {
  const waveIcon = document.getElementById("wave-icon");
  const hiddenIcons = document.getElementsByClassName("hidden-floating");

  if (!waveIcon || !hiddenIcons) return;

  let iconsVisible = false;

  waveIcon.addEventListener('click', function() {
    iconsVisible = !iconsVisible;

    if (iconsVisible) {
      waveIcon.classList.add('animate__pulse');
      Array.from(hiddenIcons).forEach((icon) => {
        (icon as HTMLElement).style.display = "flex";
        icon.classList.remove('animate__slideOutRight');
        icon.classList.add('animate__slideInRight');
      });
    } else {
      waveIcon.classList.remove('animate__pulse');
      Array.from(hiddenIcons).forEach((icon) => {
        icon.classList.remove('animate__slideInRight');
        icon.classList.add('animate__slideOutRight');
      });
    }
  });
}
