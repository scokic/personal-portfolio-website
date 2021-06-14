let pageContent = document.getElementById("page-content");

(function () {
  pageContent.insertAdjacentHTML(
    "beforeend",
    `<section class="header" id="header">
    <div class="container">
      <div class="logo-container nav-container"  id="logo">
        <a href="#">SC</a>
      </div>

      <div class="nav-links nav-container">
        <ul class="nav">
          <li><a id="navHome" class="nav-link" href="#hero"></a></li>
          <li><a id="navAbout" class="nav-link" href="#about-me"></a></li>
          <li><a id="navProjects" class="nav-link" href="#projects"></a></li>
          <li><a id="navWordpressWebsites" class="nav-link" href="#wordpressWebsites"></a></li>
          <li id="nav-button-container"><a id="navContact" class="button nav-button nav-link contact-button" id="nav-contact-button" href="#contact"></a></li>
        </ul>
      </div>

      <div id="dark-theme-toggle-container">
        <img id="dark-theme-sun" src="img/sun.svg">
        </img>
        <img id="dark-theme-moon" src="img/moon.svg">
        </img>
      </div>
      
      <div id="language-toggle-container" class="change-language">

            <img class="lang-rs" id="english" src="img/icon-great-britain.png">
            </img>

            <img class="lang-en" id="serbian" src="img/icon-serbia.png">
            </img>  

      </div>

      <div class="hamburger-container">
        <div class="hamburger">
          <div class="bar bar-1"></div>
          <div class="bar bar-2"></div>
          <div class="bar bar-3"></div>
        </div>
      </div>
  </div>

  <div class="scroll-to-top-container">
    <p class="scroll-to-top">↑</p>
  </div>

  </section>

  <section class="section-container hero" id="hero">
    <div class="container">

      <div class="text-container">
        <h3 id="headerOccupation"></h3>
        <h1 id="headerName"></h1>
        <p id="headerDescription">
        </p>
        <a id="headerButton" class="button nav-link contact-button" href="#contact"></a>
        <a id="resumeButton" class="button nav-link" href="/modules/resume.html" target="_blank"></a>
      </div>

      <div class="img-container">
        <img src="./img/Profile2.jpeg" />
        <div class="img-background-element elipse"></div>
        <div class="img-background-element square"></div>
        <div class="img-background-element circle"></div>
      </div>

    </div>
  </section>

  <section class="section-container about-me" id="about-me">
    <div class="container">
      <div class="text-container">
        <h2 id="aboutHeader" ></h1>
        <p id="aboutDescription"></p>
      </div>   
      <div class="tools-container">
        <div class="tool-image-placeholder hidden loaded">
          <img src="./img/tools/html5-logo.svg" alt="" class="tool-image ">
          <div class="loading-popup">
            <p id="aboutHtmlPopup"></p>
          </div>
        </div>
        
        <div class="tool-image-placeholder hidden loaded">
          <img src="./img/tools/css3-logo.svg" alt="" class="tool-image">
          <div class="loading-popup">
            <p id="aboutCSSPopup"></p>
          </div>
        </div>

        <div class="tool-image-placeholder hidden loading javascript">

          <img src="./img/tools/javascript-logo.svg" alt="" class="tool-image">
          <div class="loading-popup">
            <p id="aboutJSPopup"></p>
          </div>
        </div>

        <div class="tool-image-placeholder hidden loading react">

          <img src="./img/tools/react-logo.svg" alt="" class="tool-image">
          <div class="loading-popup">
            <p id="aboutReactPopup"></p>
          </div>
        </div>

        <div class="tool-image-placeholder hidden loading sass">

          <img src="./img/tools/sass-logo.svg" alt="" class="tool-image">
          <div class="loading-popup">
            <p id="aboutSassPopup"></p>
          </div>
        </div>

        <div class="tool-image-placeholder hidden not-loaded">

          <img src="./img/tools/bootstrap-5-logo.svg" alt="" class="tool-image">
          <div class="loading-popup">
            <p id="aboutBootstrapPopup"></p>
          </div>
        </div>
        
        <div class="tool-image-placeholder hidden loaded">

          <img src="./img/tools/visual-studio-code-logo.svg" alt="" class="tool-image">
          <div class="loading-popup">
            <p id="aboutVscodePopup"></p>
          </div>
        </div>
        <div class="tool-image-placeholder hidden loading git">

          <img src="./img/tools/git-logo.svg" alt="" class="tool-image">
          <div class="loading-popup">
            <p id="aboutGitPopup"></p>
          </div>
        </div>
      </div>    
    </div>
  </section>

  <section class="section-container projects" id="projects">
    <div class="container">
      <div id="headline-container">
        <h2 id="projectsHeadline"></h2>
      </div>
      <div class="project-cards-container">

      <div class="project-card">
        
        <img src="./img/PersonalPortfolio.png" alt="" />
        
        <div class="project-card-info">
          <h3 id="projectsPortfolioHeadline"></h3>
          <p id="projectsPortfolioDescription"></p>
          <br />
          <div class="project-used-tech">
            <i class="fab fa-html5"></i>
            <i class="fab fa-css3-alt"></i>
            <i class="fab fa-js"></i>
          </div>
          <div class="button-container">
          <a href="https://github.com/scokic/personal-portfolio-website/" class="button github-button" target="_blank" id="projectsPortfolioButton">GitHub</a>
        </div>
        </div>
      </div>

      <div class="project-card">
          <img src="./img/MarvelHeroesApp.png" alt="" />
          <div class="project-card-info">
          <h3 id="projectsMarvelHeroesAppHeadline"></h3>
          <p id="projectsMarvelHeroesAppDescription"></p>
            <br />
            <div class="project-used-tech">
            <i class="fab fa-react"></i>
            <i class="fab fa-sass"></i>
            <i class="fab fa-html5"></i>
            </div>
            <div class="button-container">
              <a href="https://marvel-heroes-cards.netlify.app/" class="button" target="_blank">Demo</a>
              <a href="https://github.com/scokic/marvel-heroes" class="button github-button" target="_blank">GitHub</a>
            </div>
          </div>
        </div>


      <div class="project-card">
          <img src="./img/TodoApp.png" alt="" />
          <div class="project-card-info">
          <h3 id="projectsTodoAppHeadline"></h3>
          <p id="projectsTodoAppDescription"></p>
            <br />
            <div class="project-used-tech">
              <i class="fab fa-html5"></i>
              <i class="fab fa-css3-alt"></i>
              <i class="fab fa-js"></i>
            </div>
            <div class="button-container">
              <a href="https://scokic.github.io/simpletodoapp/" class="button" target="_blank">Demo</a>
              <a href="https://github.com/scokic/simpletodoapp" class="button github-button" target="_blank">GitHub</a>
            </div>
          </div>
        </div>



        <div class="project-card">
          <img src="./img/Kanban Board.png" alt="" />
          <div class="project-card-info">
          <h3 id="projectsKanbanHeadline"></h3>
          <p id="projectsKanbanDescription"></p>
            <br />
            <div class="project-used-tech">
            <i class="fab fa-html5"></i>
            <i class="fab fa-css3-alt"></i>
              <i class="fab fa-js"></i>
            </div>
            <div class="button-container">
              <a href="./components/Kanban-Board/index.html" class="button" target="_blank">Demo</a>
              <a href="https://github.com/scokic/personal-portfolio-website/tree/main/components/Kanban-Board" class="button github-button" target="_blank">GitHub</a>
            </div>
          </div>
        </div>

        <div class="project-card">
          <img src="./img/Two Player Dice Game.png" alt="" />
          <div class="project-card-info">
          <h3 id="projectsDiceGameHeadline"></h3>
          <p id="projectsDiceGameDescription"></p>
            <br />
            <div class="project-used-tech">
              <i class="fab fa-js"></i>
            </div>
            <div class="button-container">
              <a href="./components/Two Player Dice Game/index.html" class="button" target="_blank">Demo</a>
              <a href="https://github.com/scokic/personal-portfolio-website/tree/main/components/Two Player Dice Game" class="button github-button" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
        

      </div>
    </div>
  </section>

  <section class="section-container wordpress-websites" id="wordpressWebsites">
    <div class="container">
      <div id="headline-container">
        <h2 id="wordpressWebsitesHeadline"></h2>
      </div>
      <div class="project-cards-container">
        <div class="project-card">
          
          <div class="iphone-x digitalnakancelarija">
          </div>
          
          <div class="project-card-info">
            <h3 id="wordpressWebsitesDigitalnaKancelarijaHeadline"></h3>
            <p id="wordpressWebsitesDigitalnaKancelarijaDescription"></p>
            <br />
            <div class="project-used-tech">
              <i class="fab fa-wordpress"></i>
              <i class="fab fa-css3-alt"></i>
              <i class="fab fa-js"></i>
            </div>
            
            <div class="button-container">
              <a id="wordpressWebsitesButtonDK"  href="https://www.digitalnakancelarija.rs"" class="button" target="_blank"></a>
            </div>

          </div>
        </div>


        <div class="project-card">
          
        <div class="iphone-x pobedimoastmu">
        </div>
          
          <div class="project-card-info">
          <h3 id="wordpressWebsitesPobedimoAstmuHeadline"></h3>
          <p id="wordpressWebsitesPobedimoAstmuDescription"></p>
            <br />
            <div class="project-used-tech">
              <i class="fab fa-wordpress"></i>
              <i class="fab fa-mailchimp"></i>
              <i class="fab fa-css3-alt"></i>
            </div>
              <div class="button-container">
                <a id="wordpressWebsitesButtonPA"  href="https://www.pobedimoastmu.rs"" class="button" target="_blank"></a>
              </div>
            </div>
        </div>


        <div class="project-card">
          
        <div class="iphone-x medana">
        </div>

          <div class="project-card-info">
          <h3 id="wordpressWebsitesMedanaHeadline"></h3>
          <p id="wordpressWebsitesMedanaDescription"></p>
            <br />
            <div class="project-used-tech">
              <i class="fab fa-wordpress"></i>
              <i class="fab fa-mailchimp"></i>
              <i class="fas fa-shopping-basket"></i>
            </div>
              <div class="button-container">
                <a id="wordpressWebsitesButtonMd" href="https://www.medana.rs" class="button" target="_blank"></a>
              </div>
            </div>
        </div>

        
      </div>
    </div>
  </section>


  <section class="contact" id="contact">
    <div class="container">
      <h3 id="contactSubHeadline"></h3>
      <h2 id="contactHeadline"></h2>
      <p id="contactDescription"></p>
      <a id="contactButton" target="_blank" href="https://www.linkedin.com/in/strahinjacokic/" class="button"></a>
    </div>
  </section>



  <section class="footer">
    <div class="container">
      <p id="footerMadeInDescription"></p>
      <p id="footerCopyright"></p>
    </div>
  </section>
  `
  );
})();
