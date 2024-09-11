let ourbutton = document.getElementById("mybutton");
ourbutton.addEventListener("click", () => {
  let namee = document.getElementById("dropdown");
  let index = namee.selectedIndex;
  let friendname = namee.options[index].value;
  console.log(friendname);

  let imagelement;
  let paragraphelement;
  let myimg;
  let mypara;
  let bluediv;
  let heading;
  switch (friendname) {
    case "Ashwin":
      if (document.getElementById("photo")) {
        imagelement = document.getElementById("photo");
        imagelement.remove();
        paragraphelement = document.getElementById("paragraph");
        paragraphelement.remove();
      }

      heading = document.getElementById("titlee");
      heading.classList.remove('blinking');
      heading.innerHTML = "ASHWIN RAAGHAV";
      myimg = document.createElement("img");
      myimg.setAttribute("src", "./ashwin.jpg");
      myimg.setAttribute("width", "150vw");
      myimg.id = "photo";

      bluediv = document.getElementById("container");
      bluediv.appendChild(myimg);

      mypara = document.createElement("p");
      mypara.innerText =
        "Designer by day, joke machine by night! Ashwin works at Valeo, where he pretends to be serious but secretly sprinkles design brilliance and punchlines everywhere. A master of creativity with an eye for design, he’s also a die-hard Thalapathy Vijay fan—so don't be surprised if he sneaks in a movie reference during a design review! If you’re looking for cutting-edge innovation mixed with a healthy dose of humor, Ashwin’s your guy. Just don’t ask him for a serious conversation… unless it’s about Thalapathy!";
      mypara.id = "paragraph";
      bluediv.appendChild(mypara);

      break;

    case "Kavin":
      if (document.getElementById("photo")) {
        imagelement = document.getElementById("photo");
        imagelement.remove();
        paragraphelement = document.getElementById("paragraph");
        paragraphelement.remove();
      }
      heading = document.getElementById("titlee");
      heading.classList.remove('blinking');
      heading.innerHTML = "KAVIN RAMAKRISHNAN";

      myimg = document.createElement("img");
      myimg.setAttribute("src", "./kavin.jpg");
      myimg.setAttribute("width", "150vw");
      myimg.id = "photo";

      bluediv = document.getElementById("container");
      bluediv.appendChild(myimg);
      mypara = document.createElement("p");
      mypara.innerText =
        "Meet Kavin, the keyboard prodigy and plane enthusiast currently studying in France. Known for his dark humor and musical talents, Kavin’s academic journey is sprinkled with a bit of nostalgic comedy thanks to his former college professor, Nalla Mohammad. Nalla, who supervised Kavin’s project, has a knack for “seenzoning” his students, adding a hilarious touch to their interactions. Balancing his love for aviation, keyboard compositions, and a bit of playful banter, Kavin’s story is one of academic adventure and comedic flair!";
      mypara.id = "paragraph";
      bluediv.appendChild(mypara);

      break;

    case "karthikeyan":
      if (document.getElementById("photo")) {
        imagelement = document.getElementById("photo");
        imagelement.remove();
        paragraphelement = document.getElementById("paragraph");
        paragraphelement.remove();
      }
      heading = document.getElementById("titlee");
      heading.classList.remove('blinking');
      heading.innerHTML = "KARTHIKEYAN";

      myimg = document.createElement("img");
      myimg.setAttribute("src", "./karthikeyan.jpg");
      myimg.setAttribute("width", "150vw");
      myimg.id = "photo";

      bluediv = document.getElementById("container");
      bluediv.appendChild(myimg);
      mypara = document.createElement("p");
      mypara.innerText =
        "Meet Karthikeyan, the gym-loving genius with a knack for dark humor that could rival any stand-up comic. This soon-to-be Canadian resident is gearing up for a career in FEA coding, proving that his brilliance isn’t just a well-kept secret. Between lifting weights and plotting his next meme binge on Reddit, Karthikeyan finds time to show his admiration for his friend Kavin. With a blend of intellectual prowess, gym dedication, and meme-induced laughter, Karthikeyan is a force to be reckoned with—just don’t ask him to reveal his secret genius too soon!";
      mypara.id = "paragraph";
      bluediv.appendChild(mypara);

      break;

    case "Akmal":
      if (document.getElementById("photo")) {
        imagelement = document.getElementById("photo");
        imagelement.remove();
        paragraphelement = document.getElementById("paragraph");
        paragraphelement.remove();
      }
      heading = document.getElementById("titlee");
      heading.classList.remove('blinking');
      heading.innerHTML = "AKMAL";

      myimg = document.createElement("img");
      myimg.setAttribute("src", "./akmal.jpg");
      myimg.setAttribute("width", "150vw");
      myimg.id = "photo";

      bluediv = document.getElementById("container");
      bluediv.appendChild(myimg);
      mypara = document.createElement("p");
      mypara.innerText =
        "Meet Akmal, the cricket star and former college go-kart team captain who’s known for his delightfully nonsensical jokes and cool demeanor. Often the target of good-natured ribbing from the gang, Akmal’s sense of humor is as unique as his role as Professor Jayakishan’s favorite student. As he gears up for a new chapter of his academic journey in New York, his blend of cricket skills, go-karting leadership, and offbeat humor ensures that he’ll always be the life of the party—even if his jokes leave you scratching your head!";
      mypara.id = "paragraph";
      bluediv.appendChild(mypara);

      break;

    case "muthu":
      if (document.getElementById("photo")) {
        imagelement = document.getElementById("photo");
        imagelement.remove();
        paragraphelement = document.getElementById("paragraph");
        paragraphelement.remove();
      }
      heading = document.getElementById("titlee");
      heading.classList.remove('blinking');
      heading.innerHTML = "MUTHU";

      myimg = document.createElement("img");
      myimg.setAttribute("src", "./muthu.jpg");
      myimg.setAttribute("width", "150vw");
      myimg.id = "photo";

      bluediv = document.getElementById("container");
      bluediv.appendChild(myimg);
      mypara = document.createElement("p");
      mypara.innerText =
        "Introducing Muthu, the quiet genius with a passion for 3D printing and a discerning taste for what truly piques his interest. Known for his selective work ethic, Muthu dives into projects that captivate him, creating stunning 3D designs that showcase his exceptional skills. His serene demeanor belies a sharp intellect and a soft spot for cute YouTube shorts. As Professor Akl’s favorite, Muthu combines brilliance with a quiet charm, proving that sometimes, the most extraordinary talents are wrapped in the calmest packages.";
      mypara.id = "paragraph";
      bluediv.appendChild(mypara);

      break;

    default:
      break;
  }
});
