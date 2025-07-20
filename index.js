// You can add interactions here if needed
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("You selected a pricing plan!");
  });
});
const video = document.getElementById('home-video');
video.addEventListener('canplaythrough', () => {
  console.log('Video is ready to play.');
});