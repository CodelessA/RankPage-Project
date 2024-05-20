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