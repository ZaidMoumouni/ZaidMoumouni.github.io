// STORY CLICK SYSTEM
const screens = document.querySelectorAll('.story-screen');
let index = 0;

screens.forEach((screen, i) => {
const btn = screen.querySelector('.next-btn');
btn.addEventListener('click', () => {
screen.classList.remove('active');

if (btn.dataset.end) {
document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
return;
}

index++;
screens[index].classList.add('active');
});
});

// COUNTDOWN TIMER
const target = new Date('2022-01-01'); // replace with anniversary
setInterval(() => {
const now = new Date();
const diff = now - target;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
document.getElementById('countdown').innerText = `${days} days together`;
}, 1000);
