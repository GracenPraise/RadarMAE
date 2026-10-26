'use strict';

const demoVideo = document.getElementById('demo-video');
const demoError = document.getElementById('demo-video-error');
const demoClips = JSON.parse(document.getElementById('demo-clips').textContent);
let demoIndex = 0;

function changeDemo(direction) {
  demoIndex = (demoIndex + direction + demoClips.length) % demoClips.length;
  const clip = demoClips[demoIndex];
  const resumePlayback = !demoVideo.paused && !demoVideo.ended;
  demoVideo.pause();
  demoError.hidden = true;
  document.getElementById('demo-clip-title').textContent = clip.title;
  for (const field of ['sequence', 'road', 'time']) {
    document.getElementById(`demo-${field}`).textContent = clip[field];
  }
  document.getElementById('demo-position').textContent = `${demoIndex + 1} / ${demoClips.length}`;
  document.getElementById('demo-video-fallback').href = clip.src;
  document.getElementById('demo-video-download').href = clip.src;
  demoVideo.setAttribute('aria-label', `RadarMAE detection demo: ${clip.title}`);
  demoVideo.src = clip.src;
  demoVideo.load();
  if (resumePlayback) demoVideo.play().catch(() => {});
}

document.getElementById('demo-prev').addEventListener('click', () => changeDemo(-1));
document.getElementById('demo-next').addEventListener('click', () => changeDemo(1));
demoVideo.addEventListener('error', () => { demoError.hidden = false; });
demoVideo.querySelector('source').addEventListener('error', () => {
  if (!demoVideo.hasAttribute('src')) demoError.hidden = false;
});
