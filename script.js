//----Navigation settings Start----//
document.querySelectorAll('#navigation-ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        document.querySelector('.section-change').scrollTo({
            left: targetSection.offsetLeft,
            behavior: 'smooth'
        });
    });
});
//----Navigation settings End----//

//---Info Panel controller start----//
  document.addEventListener('DOMContentLoaded', function () {
    const movies = document.querySelectorAll('#movies-div div');
    const games = document.querySelectorAll('#games-div div');

    const infoContent = document.getElementById('info-content');
    const infoContentG = document.getElementById('info-contentG');

    movies.forEach(movie => {
      movie.addEventListener('click', function () {
        const movieInfo = this.querySelector('p').innerText;
        infoContent.innerText = `Informacje o wybranym elemencie: ${movieInfo}`;
      });
    });
    
    games.forEach(game => {
      game.addEventListener('click', function () {
        const gameInfo = this.querySelector('p').innerText;
        infoContentG.innerText = `Informacje o wybranym elemencie: ${gameInfo}`;
      });
    });
});
//---Info Panel controller end----//