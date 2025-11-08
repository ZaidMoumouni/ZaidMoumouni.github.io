// COUNTDOWN TIMER
const target = new Date('2022-01-01'); // replace with anniversary
setInterval(() => {
const now = new Date();
const diff = now - target;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
document.getElementById('countdown').innerText = `${days} days together`;
}, 1000);
