const slidingNewsHeader = document.querySelector('.slide-in');
const slindingHeader= slidingNewsHeader.classList.add('active');

const slidingNewbienvenue = document.querySelector('.slide-in-bienvenu');
const slidingbienvenue= slidingNewbienvenue.classList.add('active');

 const slidingNewBar = document.querySelector('.slide-in-bar');
 const slindingneBar= slidingNewBar.classList.add('active');
 
const slidingApropos= document.querySelector('.slide-in-apropos');
window.addEventListener('scroll', () => {

  const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewport = slidingApropos.getBoundingClientRect().top;
    // console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
     slidingApropos.classList.add('active');    
    }
    })

const slidingservices = document.querySelector('.slide-in-competences');
window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;
  
      const topElementToTopViewport = slidingservices.getBoundingClientRect().top;
      // console.log(topElementToTopViewport);
  
      if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
       slidingservices.classList.add('active');    
      }
      })
  


const slidingProjets = document.querySelector('.slide-in-projets');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;
  
      const topElementToTopViewport = slidingProjets.getBoundingClientRect().top;
      // console.log(topElementToTopViewport);
  
      if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){ 
        slidingProjets.classList.add('active'); 
      } 
      });
      


const slidingForm = document.querySelector('.slide-in-formulaire');

      window.addEventListener('scroll', () => {
      
          const {scrollTop, clientHeight} = document.documentElement;
        
          const topElementToTopViewport = slidingForm.getBoundingClientRect().top;

            if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){ 
              slidingForm.classList.add('active'); 
            } 
            });
  



  


function ouvrirMessagerie() {
    // Récupérer les valeurs du formulaire
    const nom = document.getElementById('name').value;
    const prenom = document.getElementById('prenom').value;
    const mail = document.getElementById('mail').value;

    // Générer le lien mailto avec les informations du formulaire préremplies
    const mailtoLink = `mailto:${mail}?subject=&body=${encodeURIComponent(`Bonjour,\n\n${prenom} ${nom} Je vous contacte`)}`;

    // Ouvrir la messagerie par défaut avec le lien mailto
    window.open(mailtoLink);
  }

