//----Navigation settings Start----//
document.querySelectorAll("#navigation-ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    document.querySelector(".section-change").scrollTo({
      left: targetSection.offsetLeft,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll("#navigation-ul a");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Delete 'active' class
      navItems.forEach((nav) => nav.classList.remove("active"));

      // Add 'active' class
      this.classList.add("active");
    });
  });
});

//----Navigation settings End----//
////////////////////////////////////////
//----Info Panel controller start----//
document.addEventListener("DOMContentLoaded", function () {
  const movies = document.querySelectorAll("#movies-div div");
  const games = document.querySelectorAll("#games-div div");

  const infoContent = document.getElementById("info-content");
  const infoContentG = document.getElementById("info-contentG");

  const gameDetails = {
    "Doom 2016": {
      description: "Doom 2016",
      ratings: {
        story: "2/5",
        music: "5/5",
        graphics: "4/5",
      },
      aboutGame: {
        about:
          "Klasyczna pierwszoosobowa strzelanka, która poprawiła wszystko to, z czego zasłynęły poprzednie części.",
      },
    },

    "Doom Eternal": {
      description: "Doom Eternal",
      ratings: {
        story: "2/5",
        music: "4/5",
        graphics: "4/5",
      },

      aboutGame: {
        about: "",
      },
    },

    Stray: {
      description: "Stray",
      ratings: {
        story: "4/5",
        music: "3/5",
        graphics: "4/5",
      },

      aboutGame: {
        about:
          "Jedyny w swoim rodzaju symulator kota, który w dodatku posiada linię fabularną.",
      },
    },

    Gothic: {
      description: "Gothic",
      ratings: {
        story: "4/5",
        music: "3/5",
        graphics: ":)/5",
      },

      aboutGame: {
        about: "Klasyka wśród gier RPG",
      },
    },

    "Gothic II": {
      description: "Gothic II",
      ratings: {
        story: "5/5",
        music: "4/5",
        graphics: ":)/5",
      },

      aboutGame: {
        about:
          "Klasyk i jedna z najlepszych gier w jakie grałem.",
      },
    },

    "Gothic III": {
      description: "Gothic II",
      ratings: {
        story: "3/5",
        music: "4/5",
        graphics: "2,5/5",
      },

      aboutGame: {
        about:
          "Mniej udana, chociaż broniąca się przyjemną ścieżką dźwiękową kontynuacja Gothic I i Gothic II.",
      },
    },
  };

  movies.forEach((movie) => {
    movie.addEventListener("click", function () {
      const movieInfo = this.querySelector("p").innerText;
      infoContent.innerText = `Informacje o wybranym elemencie: ${movieInfo}`;
    });
  });

  games.forEach((game) => {
    game.addEventListener("click", function () {
      const gameInfo = this.querySelector("p").innerText;
      const details = gameDetails[gameInfo];
      if (details) {
        infoContentG.innerHTML = `
          <strong><p>Opis: ${details.description}</p></strong>
          <ul>
            <li>Fabuła: ${details.ratings.story}</li>
            <li>Muzyka: ${details.ratings.music}</li>
            <li>Grafika: ${details.ratings.graphics}</li>
          </ul>
          <p>${details.aboutGame.about}</p>
        `;
      } else {
        infoContentG.innerText = `Informacje: ${gameInfo}`;
      }
    });
  });
});
//----Info Panel controller end----//
////////////////////////////////////
