differences = function ()
            {

                figuresSVG=[genererRect, genererCercle, genererLine, genererEllipse, genererPolygone];
                couleurs=["red","green","blue"];
                style=["fill", "width", "height", "stroke", "stroke-width"];
                formes=['circle', 'rect', 'line', 'ellipse', 'polygon'];
                nbrErreurs=5;
                nbrElements=10;
                var erreursTrouvées;
                index = 0;
                temps=0;

                function myRandom(min, max)
                {
                    return Math.round(Math.random() * 1000000000) % (max - min + 1) + min;
                }

                 function genererPolygone()
                {

                polygone = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
                polygone.setAttribute("points", myRandom(1,400)+","+myRandom(1,200)+" "+myRandom(1,400)+","+myRandom(1,200)+" "+myRandom(1,400)+","+myRandom(1,200));
                polygone.setAttribute("stroke", couleurs[myRandom(0,2)]);
                polygone.setAttribute("stroke-width", myRandom(1,3));
                polygone.setAttribute("fill","rgb("+myRandom(0,255)+","+myRandom(0,255)+","+myRandom(0,255)+")");
                polygone.setAttribute("position", index);
                return polygone;
                
                 }

                  function genererEllipse()
                {
                ellipse = document.createElementNS("http://www.w3.org/2000/svg", 'ellipse');
                ellipse.setAttribute("cx", myRandom(1,400));
                ellipse.setAttribute("cy", myRandom(1,400));
                ellipse.setAttribute("rx", myRandom(1,100));
                ellipse.setAttribute("ry", myRandom(1,100));
                ellipse.setAttribute("stroke", couleurs[myRandom(0,2)]);
                ellipse.setAttribute("stroke-width", myRandom(1,3));
                ellipse.setAttribute("fill","rgb("+myRandom(0,255)+","+myRandom(0,255)+","+myRandom(0,255)+")");
                ellipse.setAttribute("position", index);
                return ellipse;
                 }

              function genererCercle()
                {
                cercle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                cercle.setAttribute("cx", myRandom(0,400));
                cercle.setAttribute("cy", myRandom(1,400));
                cercle.setAttribute("r", myRandom(1,100));
                cercle.setAttribute("stroke", couleurs[myRandom(0,2)]);
                cercle.setAttribute("stroke-width", myRandom(1,3));
                cercle.setAttribute("fill","rgb("+myRandom(0,255)+","+myRandom(0,255)+","+myRandom(0,255)+")");
                cercle.setAttribute("position", index);
                return cercle;
                 }

                function genererRect()
                {
                    rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
                    rect.setAttribute("x", myRandom(0,400));
                    rect.setAttribute("y", myRandom(0,400));
                    rect.setAttribute("width", myRandom(10,50));
                    rect.setAttribute("height", myRandom(10,50));
                    rect.setAttribute("stroke", couleurs[myRandom(0,2)]);
                    rect.setAttribute("stroke-width", myRandom(1,3));
                    rect.setAttribute("fill", "rgb("+myRandom(0,255)+","+myRandom(0,255)+","+myRandom(0,255)+")");
                    rect.setAttribute("position", index);
                    return rect;
                }

                function genererLine()
                {
                    line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
                    line.setAttribute("x1", myRandom(0,400));
                    line.setAttribute("y1", myRandom(0,400));
                    line.setAttribute("x2", myRandom(0,400));
                    line.setAttribute("y2", myRandom(0,400));
                    line.setAttribute("stroke", couleurs[myRandom(0,2)]);
                    line.setAttribute("stroke-width", myRandom(1,3));
                    line.setAttribute("fill", "rgb("+myRandom(0,255)+","+myRandom(0,255)+","+myRandom(0,255)+")");
                    line.setAttribute("position", index);
                    return line;
                }

                function genererElements()
                {
                    for (i=0;i<differences.nbrElements;i++)
                        {
                            svg.appendChild(figuresSVG[myRandom(0,4)]());
                            index+=1;
                        }
                      document.getElementById("SVG").appendChild(svg);
                }

                function modifier()
                {
                    if(f.tagName=="line")
                          {
                            f.setAttribute("stroke", couleurs[myRandom(0,2)]);
                            f.setAttribute("x2", myRandom(0,400));
                            f.setAttribute("y2", myRandom(0,400));
                          }
                         if(f.tagName=="rect")
                          {
                            f.setAttribute("fill", couleurs[myRandom(0,2)]);
                            f.setAttribute("stroke", couleurs[myRandom(0,2)]);
                            f.setAttribute("width", myRandom(10,50));
                            f.setAttribute("height", myRandom(10,50));
                          }

                        if(f.tagName=="circle")
                          {
                            f.setAttribute("stroke", couleurs[myRandom(0,2)]);
                            f.setAttribute("r", myRandom(1,100));
                            f.setAttribute("fill", couleurs[myRandom(0,2)]);
                          }
                          if(f.tagName=="ellipse")
                          {
                            f.setAttribute("rx", myRandom(1,100));
                             f.setAttribute("ry", myRandom(1,100));
                            f.setAttribute("stroke", couleurs[myRandom(0,2)]);
                             f.setAttribute("fill","rgb("+myRandom(0,255)+","+myRandom(0,255)+","+myRandom(0,255)+")");
                          }

                          if(f.tagName=="polygone")
                          {
                            f.setAttribute("stroke", couleurs[myRandom(0,2)]);
                            f.setAttribute("fill","rgb("+myRandom(0,255)+","+myRandom(0,255)+","+myRandom(0,255)+")");
                          }
                }

                function dupliquer()
                {
                    svg1 = svg.cloneNode(true);
                    
                    for(i=0;i<differences.nbrErreurs; i++)
                     {

                          f = svg1.childNodes[i];

                          modifier();

                          f.erreur=1;

                          differences.erreursTrouvées=0;

                          f.addEventListener("dblclick", vérifierErr, true);
                         
                          continue;
                     } 

                      document.getElementById("SVG").appendChild(svg1);
                }

                function vérifierErr() 
                {

                 if(this.erreur==1) 
                  { 

                    if(parseInt(differences.erreursTrouvées)==(parseInt(differences.nbrErreurs)-1))
                      {
                        alert('BRAVO ! Vous avez trouvé toutes les erreurs !');
                        alert("Fin du jeu. Cliquez sur OK pour y rejouer une nouvelle fois. ;)");
                        window.location.reload();
                        return;
                      }

                  differences.erreursTrouvées+=1;
                  alert('Il vous reste ' + (parseInt(differences.nbrErreurs)-parseInt(differences.erreursTrouvées)) + ' forme(s) géométrique(s) à trouver.');
                  document.getElementById('infos').innerHTML=differences.nbrElements+' formes.</br>'+differences.erreursTrouvées+'/'+differences.nbrErreurs+' erreurs. </br>';
                   this.erreur = 0;
                   svg1.removeChild(this);
                   }
                }
                              

                function arreter()
                {
                  document.getElementById("temps").innerHTML = temps + " secondes restantes.";
                  temps--;

                  if (temps==0)
                  {
                    alert("Le temps imparti s'est écoulé.");
                    alert("Fin du jeu. Cliquez sur OK pour y rejouer une nouvelle fois. ;)");
                    window.location.reload();
                    }
                }


                return {
                    genererSVG:function(){


                      differences.nbrElements = 10;
                      differences.nbrErreurs = 5;

                      temps = parseInt(nbrErreurs)*10;

                      intervalID = window.setInterval(arreter, 1000);


                        svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
                        svg.setAttribute("width", 500);
                        svg.setAttribute("height", 500);

                        genererElements();

                        dupliquer();

                        document.getElementById('infos').innerHTML=differences.nbrElements+' formes.</br>'+differences.erreursTrouvées+'/'+differences.nbrErreurs+' erreurs. </br>';
                        document.getElementById('nom').innerHTML = "Bonjour " + document.getElementById('txtNom').value+"<br>";
                        document.getElementById('boxInfos').hidden=false;
                       }
                };
            }();
            
        document.getElementById('start').addEventListener("click", differences.genererSVG, true);
