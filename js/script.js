const theme = document.cookie?.split('; ')?.find(row => row.startsWith('theme='))?.split('=')[1];
if (theme === 'dark') {
    document.body?.classList.add('bgdark');
    document.querySelector('.card-question')?.classList.add('carddark');
    document.querySelector('.footer')?.classList.add('bgdark');
    document.querySelector('.footer')?.classList.add('textdark');
    document.querySelector('.fa-moon')?.classList.add('fa-sun');
    document.querySelector('.card-text') ? document.querySelector('.card-text').style.color = "#fff" : null;
    //add color #fff to body
    
}
const darkMode = document.querySelector('.fa-moon');
darkMode.addEventListener('click', () => {
    darkMode?.classList.toggle('fa-sun');
    document.body?.classList.toggle('bgdark');
    document.querySelector('.card-question')?.classList.toggle('carddark');
    document.querySelector('.footer')?.classList.toggle('bgdark');
    document.querySelector('.footer')?.classList.toggle('textdark');
});
if (darkMode.classList.contains('fa-sun')) {
    document.cookie = "theme=light";
} else {
    document.cookie = "theme=dark";
}
