export const youtubeReady = new Promise( (resolve) => {
  window.onYouTubeIframeAPIReady = () => resolve(window.YT);
});
