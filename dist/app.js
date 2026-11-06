const openButton = document.querySelector('#feedback-open');
const panel = document.querySelector('#feedback-panel');
openButton.setAttribute('aria-expanded', 'false');
openButton.setAttribute('aria-controls', 'feedback-panel');
openButton.addEventListener('click', () => {
  panel.hidden = !panel.hidden;
  openButton.setAttribute('aria-expanded', String(!panel.hidden));
  if (!panel.hidden) document.querySelector('#thought').focus();
});
document.querySelector('#copy-thought').addEventListener('click', async () => {
  const input = document.querySelector('#thought');
  const status = document.querySelector('#copy-status');
  if (!input.value.trim()) { status.textContent = 'Write a thought first.'; return; }
  try { await navigator.clipboard.writeText(input.value); status.textContent = 'Copied. Keep it somewhere safe until our contact channel opens.'; }
  catch { input.select(); status.textContent = 'Select the text and use your device’s Copy command.'; }
});
