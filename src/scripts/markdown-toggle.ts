// MARKDOWN SECTION
// --------------------------------------------------------------------
// Toggle between raw markdown and preview

export function initMarkdownToggle(): void {
  const educationCode = document.getElementById('education-code');
  const previewButton = document.getElementById('preview-button');
  const rawButton = document.getElementById('raw-button');
  const zeroMdElement = document.querySelector('zero-md');

  if (!educationCode || !previewButton || !rawButton || !zeroMdElement) return;

  previewButton.addEventListener('click', function() {
    (educationCode as HTMLElement).style.display = 'none';
    (previewButton as HTMLElement).style.display = 'none';
    (rawButton as HTMLElement).style.display = 'flex';
    (zeroMdElement as HTMLElement).style.display = 'flex';
  });

  rawButton.addEventListener('click', function() {
    (educationCode as HTMLElement).style.display = 'flex';
    (previewButton as HTMLElement).style.display = 'flex';
    (rawButton as HTMLElement).style.display = 'none';
    (zeroMdElement as HTMLElement).style.display = 'none';
  });
}
