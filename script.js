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
    const infoContent = document.getElementById('info-content');

    movies.forEach(movie => {
      movie.addEventListener('click', function () {
        const movieInfo = this.querySelector('p').innerText;
        infoContent.innerText = `Informacje o wybranym elemencie: ${movieInfo}`;
      });
    });
  });
//---Info Panel controller end----//