const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.gameOver')


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500); //setTimeout é uma função que recebe dois parametros o primeiro é uma função o segund é um tempo
}

const loop = setInterval(() => {

    console.log('loop')

   const pipePosition = pipe.offsetLeft;
   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
   const cloudsPosition = +window.getComputedStyle(clouds).left.replace('px', '');

   console.log(marioPosition)
   
   if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    clouds.style.animation = 'none';
    clouds.style.left = `${cloudsPosition}px`;
   

    mario.src = './Assets/Imagens do projeto/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';
    gameOver.style.display = 'block';

    clearInterval(loop);

   }

}, 10);


document.addEventListener('keydown', jump);
