'use strict';

const demoVideo = document.getElementById('demo-video');
const demoOptions = document.querySelectorAll('.demo-option');
const demoError = document.getElementById('demo-video-error');

for (const option of demoOptions) {
  option.addEventListener('click', () => {
    if (option.getAttribute('aria-pressed') === 'true') return;
    const clip = option.dataset;
    const resumePlayback = !demoVideo.paused && !demoVideo.ended;
    demoVideo.pause();
    demoError.hidden = true;
    for (const other of demoOptions) {
      other.setAttribute('aria-pressed', String(other === option));
    }
    document.getElementById('demo-clip-title').textContent = clip.title;
    for (const field of ['sequence', 'road', 'time', 'weather']) {
      document.getElementById(`demo-${field}`).textContent = clip[field];
    }
    document.getElementById('demo-video-fallback').href = clip.src;
    document.getElementById('demo-video-download').href = clip.src;
    demoVideo.setAttribute('aria-label', `RadarMAE detection demo: ${clip.title}`);
    demoVideo.src = clip.src;
    demoVideo.load();
    if (resumePlayback) demoVideo.play().catch(() => {});
  });
}

demoVideo.addEventListener('error', () => {
  demoError.hidden = false;
});
// Initial source errors do not bubble from the source element to its video.
demoVideo.querySelector('source').addEventListener('error', () => {
  if (!demoVideo.hasAttribute('src')) demoError.hidden = false;
});
