var sound = new Howl({
  src: ['./assets/musique/musique.wav']
});

var sound2 = new Howl({
  src: ['http://www.soundjay.com/button/beep-07.wav']
});

var wrong = new Howl({
  src: ['./assets/musique/wrong_answer.wav']
});

var game_over = new Howl({
  src: ['./assets/musique/game_over.wav']
});


var perdu_recommencer = new Howl({
  src: ['./assets/musique/perdu_recommencer.wav']
});

var a_toi_de_jouer = new Howl({
  src: ['./assets/musique/a_toi_de_jouer.wav']
});

var bien_joue = new Howl({
  src: ['./assets/musique/bien_joue.wav']
});

differences = function () {

  //style des figures
  couleurs = ["red", "green", "blue"];
  style = ["fill", "width", "height", "stroke", "stroke-width"];


  // initialise nb erreur nb elements
  nbrErreurs = 5;
  nbrElements = 10;

  var erreursTrouvées;
  index = 0;
  temps = 0;
  score = 0;

  //fonction sert lors de la création des figures  
  function myRandom(min, max) {
    return Math.round(Math.random() * 1000000000) % (max - min + 1) + min;
  }

  //classe qui genere un Polygone
  class Polygone {
    constructor() {
      var opacity = myRandom(10, 100) / 100;

      //Creation d'un polygone créé à partir d'un script en ligne situé sur le site w3.org
      var polygone = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');

      //Modification des attributs à partir de la fonction myRandom expliquée plus haut
      polygone.setAttribute("points", myRandom(1, 400) + "," + myRandom(1, 200) + " " + myRandom(1, 400) + "," + myRandom(1, 200) + " " + myRandom(1, 400) + "," + myRandom(1, 200));
      polygone.setAttribute("stroke", couleurs[myRandom(0, 2)]);
      polygone.setAttribute("stroke-width", myRandom(1, 3));
      polygone.setAttribute("fill", "rgb(" + myRandom(0, 255) + "," + myRandom(0, 255) + "," + myRandom(0, 255) + ")");
      polygone.setAttribute("position", index);
      polygone.setAttribute("fill-opacity", opacity);
      return polygone;
    }
  }

  //classe qui genere l'Ellipse
  class Ellipse {
    constructor() {
      var opacity = myRandom(10, 100) / 100;
      var ellipse = document.createElementNS("http://www.w3.org/2000/svg", 'ellipse');
      ellipse.setAttribute("cx", myRandom(1, 400));
      ellipse.setAttribute("cy", myRandom(1, 400));
      ellipse.setAttribute("rx", myRandom(1, 100));
      ellipse.setAttribute("ry", myRandom(1, 100));
      ellipse.setAttribute("stroke", couleurs[myRandom(0, 2)]);
      ellipse.setAttribute("stroke-width", myRandom(1, 3));
      ellipse.setAttribute("fill", "rgb(" + myRandom(0, 255) + "," + myRandom(0, 255) + "," + myRandom(0, 255) + ")");
      ellipse.setAttribute("position", index);
      ellipse.setAttribute("fill-opacity", opacity);
      return ellipse;
    }
  }


  //classe qui genere une Cercle
  class Cercle {

    constructor() {
      var opacity = myRandom(10, 100) / 100;
      var cercle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
      cercle.setAttribute("cx", myRandom(0, 400));
      cercle.setAttribute("cy", myRandom(1, 400));
      cercle.setAttribute("r", myRandom(1, 100));
      cercle.setAttribute("stroke", couleurs[myRandom(0, 2)]);
      cercle.setAttribute("stroke-width", myRandom(1, 3));
      cercle.setAttribute("fill", "rgb(" + myRandom(0, 255) + "," + myRandom(0, 255) + "," + myRandom(0, 255) + ")");
      cercle.setAttribute("position", index);
      cercle.setAttribute("fill-opacity", opacity);
      return cercle;
    }
  }

  //classe qui genere un Rectangle
  class Rectangle {
    constructor() {
      var opacity = myRandom(10, 100) / 100;

      var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
      rect.setAttribute("x", myRandom(0, 400));
      rect.setAttribute("y", myRandom(0, 400));
      rect.setAttribute("width", myRandom(10, 50));
      rect.setAttribute("height", myRandom(10, 50));
      rect.setAttribute("stroke", couleurs[myRandom(0, 2)]);
      rect.setAttribute("stroke-width", myRandom(1, 3));
      rect.setAttribute("fill", "rgb(" + myRandom(0, 255) + "," + myRandom(0, 255) + "," + myRandom(0, 255) + ")");
      rect.setAttribute("position", index);
      rect.setAttribute("fill-opacity", opacity);
      return rect;
    }
  }

  //classe qui genere une Ligne
  class Line {

    constructor() {

      var opacity = myRandom(10, 100) / 100;

      var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
      line.setAttribute("x1", myRandom(0, 400));
      line.setAttribute("y1", myRandom(0, 400));
      line.setAttribute("x2", myRandom(0, 400));
      line.setAttribute("y2", myRandom(0, 400));
      line.setAttribute("stroke", couleurs[myRandom(0, 2)]);
      line.setAttribute("stroke-width", myRandom(1, 3));
      line.setAttribute("fill", "rgb(" + myRandom(0, 255) + "," + myRandom(0, 255) + "," + myRandom(0, 255) + ")");
      line.setAttribute("position", index);
      line.setAttribute("fill-opacity", opacity);
      return line;
    }
  }


  //generation des elements

  function genererElements() {

    for (i = 0; i < differences.nbrElements; i++) {

      // declaration des objets de la classe dans un tableau afin de les generer aleatoirement
      figuresSVG = [new Rectangle(), new Cercle(), new Line(), new Ellipse(), new Polygone()];

      // generation des objets aleatoirement
      svg.appendChild(figuresSVG[myRandom(0, 4)]);
      index += 1;
    }
    document.getElementById("SVG").appendChild(svg);
  }

  //MODIFIER()
  //fonction qui sera utilisé lors du clonage afin de modifier les formes créées 
  function modifier() {

    if (f.tagName == "line") {
      f.setAttribute("stroke", couleurs[myRandom(0, 2)]);
      f.setAttribute("x2", myRandom(0, 400));
      f.setAttribute("y2", myRandom(0, 400));
      f.setAttribute("class","faux");
    }
    if (f.tagName == "rect") {
      f.setAttribute("fill", couleurs[myRandom(0, 2)]);
      f.setAttribute("stroke", couleurs[myRandom(0, 2)]);
      f.setAttribute("width", myRandom(10, 50));
      f.setAttribute("height", myRandom(10, 50));
      f.setAttribute("class","faux");
    }

    if (f.tagName == "circle") {
      f.setAttribute("stroke", couleurs[myRandom(0, 2)]);
      f.setAttribute("r", myRandom(1, 100));
      f.setAttribute("fill", couleurs[myRandom(0, 2)]);
      f.setAttribute("class","faux");
    }
    if (f.tagName == "ellipse") {
      f.setAttribute("rx", myRandom(1, 100));
      f.setAttribute("ry", myRandom(1, 100));
      f.setAttribute("stroke", couleurs[myRandom(0, 2)]);
      f.setAttribute("fill", "rgb(" + myRandom(0, 255) + "," + myRandom(0, 255) + "," + myRandom(0, 255) + ")");
      f.setAttribute("class","faux");
    }

    if (f.tagName == "polygon") {
      f.setAttribute("stroke", couleurs[myRandom(0, 2)]);
      f.setAttribute("fill", "rgb(" + myRandom(0, 255) + "," + myRandom(0, 255) + "," + myRandom(0, 255) + ")");
      f.setAttribute("class","faux");
    }
  }

  //DUPLIQUER()
  //On clone les formes créées puis on applique la méthode modifier
  function dupliquer() {

    svg1 = svg.cloneNode(true);

    for (i = 0; i < differences.nbrErreurs; i++) {

      f = svg1.childNodes[i];

      modifier();

      f.erreur = 1;

      differences.erreursTrouvées = 0;

      //Permet à l'utilisateur par un double click de sélectionner l'erreur
      f.addEventListener("click", vérifierErr, false);

      continue;
    }

    document.getElementById("SVG").appendChild(svg1);
  }

  function vérifierErr() {

    if (this.erreur == 1) {

      //On compare le nb d'erreur avec le nb d'erreur trouvé si elles sont égales alert
      if (parseInt(differences.erreursTrouvées) == (parseInt(differences.nbrErreurs) - 1)) {
       
      //Musique en pause et appel de l'audio bien joue
       sound.pause();
       bien_joue.play(); 
       alert("Fin du jeu. Cliquez sur OK pour y rejouer une nouvelle fois. ;)");
        window.location.reload();
        return;
      }
      //On compte les nb d'erreurs trouvées, et un son est joué lors du click sur l'erreur
        var p = this;
        p = sound2.play();
        svg1.removeChild(this);
        differences.erreursTrouvées += 1;

      
        document.getElementById('infos').innerHTML = differences.nbrElements + ' formes.&nbsp&nbsp&nbsp&nbsp&nbsp' + differences.erreursTrouvées + '/' + differences.nbrErreurs + ' erreurs.&nbsp&nbsp&nbsp&nbsp&nbsp';
        this.erreur = 0;
  
        // Si l'utilisateur trouve la forme faussée, celle-ci disparait
      
        alert('Il vous reste ' + (parseInt(differences.nbrErreurs) - parseInt(differences.erreursTrouvées)) + ' forme(s) géométrique(s) à trouver.');
  
        // score
        differences.score += 1;
        // colorer l'etoile selon le score 
        document.getElementById(differences.score).setAttribute('class','fa fa-star checked');
        
    }
  }


  //Si le temps est dépassé on arrête le jeu
  function arreter() {
    document.getElementById("temps").innerHTML = temps + " secondes restantes.&nbsp&nbsp&nbsp&nbsp&nbsp";
    temps--;

    if (temps == 0) {
     //Musique en pause et appel de l'audio game over
      sound.pause();
      game_over.play();

      alert("Le temps imparti s'est écoulé.");
      // Appel de l'audio recommencer lorsque le joueur perd
      perdu_recommencer.play();
      alert("Fin du jeu. Cliquez sur OK pour y rejouer une nouvelle fois. ;)");
      window.location.reload();
    }
  }



  //gestion des niveaux par formulaire avec difficulté augmentée
  function level() {
    e = document.getElementById("niveau");

    if (e.options[e.selectedIndex].value == "niveau1") {
      differences.nbrErreurs = 5;
      differences.nbrElements = 10;
      temps = parseInt(nbrErreurs) * 10;
      // dessiner les etoiles 
      for (var i = 0; i < differences.nbrErreurs; i++) {
        var x = document.createElement("span");
        x.setAttribute('class','fa fa-star');
        x.setAttribute('id',i+1);
        document.getElementById('boxInfos').appendChild(x);
      }
      
    }
    if (e.options[e.selectedIndex].value == "niveau2") {
      differences.nbrErreurs = 6;
      differences.nbrElements = 15;
      temps = parseInt(nbrErreurs) * 11;
      // dessiner les etoiles 
            for (var i = 0; i < differences.nbrErreurs; i++) {
        var x = document.createElement("span");
        x.setAttribute('class','fa fa-star');
        x.setAttribute('id',i+1);
        document.getElementById('boxInfos').appendChild(x);
      }

    }

    if (e.options[e.selectedIndex].value == "niveau3") {
      differences.nbrErreurs = 7;
      differences.nbrElements = 20;
      temps = parseInt(nbrErreurs) * 12;
      // dessiner les etoiles 
            for (var i = 0; i < differences.nbrErreurs; i++) {
        var x = document.createElement("span");
        x.setAttribute('class','fa fa-star');
        x.setAttribute('id',i+1);
        document.getElementById('boxInfos').appendChild(x);
      }

    }
  }

  return {

    genererSVG: function () {
      //Appel des audio
      a_toi_de_jouer.play();
      sound.play();

      //Initialisation score,lvl
      differences.score = 0;
      level();
      intervalID = window.setInterval(arreter, 1000);

      //création de la surface de jeu
      svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
      svg.setAttribute("width", 600);
      svg.setAttribute("height", 600);

      //appel des fonctions pour gérer les éléments
      genererElements();

      dupliquer();

      document.getElementById('infos').innerHTML = differences.nbrElements + ' formes.&nbsp&nbsp&nbsp&nbsp&nbsp' + differences.erreursTrouvées + '/' + differences.nbrErreurs + ' erreurs.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
      document.getElementById('nom').innerHTML = "Bonjour " + document.getElementById('txtNom').value + "&nbsp&nbsp&nbsp&nbsp&nbsp";
      document.getElementById('boxInfos').style.visibility = "visible";
      document.getElementById('divForm').style.display = 'none';
    }
  };
}();


//function init() {
document.getElementById('start').addEventListener("click", differences.genererSVG, true);
//}
