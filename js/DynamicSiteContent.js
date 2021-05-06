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
          <li><a id="navHome" class="nav-link" href="#hero">Home</a></li>
          <li><a id="navAbout" class="nav-link" href="#about-me">O meni</a></li>
          <li><a id="navProjects" class="nav-link" href="#projects">Projekti</a></li>
          <li><a id="navComponents" class="nav-link" href="#components">Komponente</a></li>
          <li><a id="navContact" class="button nav-button nav-link contact-button" id="nav-contact-button" href="#contact">Kontakt</a></li>
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
        <div class="tool-image-placeholder hidden">
          <div class="loaded loading-opacity"></div>
          <img src="./img/tools/html5-logo.svg" alt="" class="tool ">
          <div class="loading-popup">
            <p id="aboutHtmlPopup"></p>
          </div>
        </div>
        
        <div class="tool-image-placeholder hidden">
          <div class="loaded loading-opacity"></div>
          <img src="./img/tools/css3-logo.svg" alt="" class="tool ">
          <div class="loading-popup">
            <p id="aboutCSSPopup"></p>
          </div>
        </div>

        <div class="tool-image-placeholder hidden">
          <div class="loading loading-opacity"></div>
          <img src="./img/tools/javascript-logo.svg" alt="" class="tool">
          <div class="loading-popup">
            <p id="aboutJSPopup"></p>
          </div>
        </div>

        <div class="tool-image-placeholder hidden">
          <div class="not-loaded loading-opacity"></div>
          <img src="./img/tools/react-logo.svg" alt="" class="tool">
          <div class="loading-popup">
            <p id="aboutReactPopup"></p>
          </div>
        </div>

        <div class="tool-image-placeholder hidden">
          <div class="not-loaded loading-opacity"></div>
          <img src="./img/tools/sass-logo.svg" alt="" class="tool">
          <div class="loading-popup">
            <p id="aboutSaasPopup"></p>
          </div>
        </div>

        <div class="tool-image-placeholder hidden">
          <div class="not-loaded loading-opacity"></div>
          <img src="./img/tools/bootstrap-5-logo.svg" alt="" class="tool">
          <div class="loading-popup">
            <p id="aboutBootstrapPopup"></p>
          </div>
        </div>
        
        <div class="tool-image-placeholder hidden">
          <div class="loaded loading-opacity"></div>
          <img src="./img/tools/visual-studio-code-logo.svg" alt="" class="tool">
          <div class="loading-popup">
            <p id="aboutVscodePopup"></p>
          </div>
        </div>
        <div class="tool-image-placeholder hidden">
          <div class="loading loading-opacity"></div>
          <img src="./img/tools/git-logo.svg" alt="" class="tool">
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
          
          <img src="./img/Project.png" alt="" />
          
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
            <a href="./components/Card-Slider/index.html" class="button" target="_blank">Demo</a>
            <a href="https://github.com/scokic/personal-portfolio-website/tree/main/components/Card-Slider" class="button github-button" target="_blank">GitHub</a>
          </div>
          </div>
        </div>

        <div class="project-card">
          
          <img src="./img/Project.png" alt="" />
          
          <div class="project-card-info">
          <h3 id="projectsNotesAppHeadline"></h3>
          <p id="projectsNotesAppDescription"></p>
            <br />
            <div class="project-used-tech">
              <i class="fab fa-html5"></i>
              <i class="fab fa-css3-alt"></i>
              <i class="fab fa-js"></i>
              <i class="fab fa-gripfire"></i>
            </div>
            <div class="button-container">
              <a href="./components/Card-Slider/index.html" class="button" target="_blank">Demo</a>
              <a href="https://github.com/scokic/personal-portfolio-website/tree/main/components/Card-Slider" class="button github-button" target="_blank">GitHub</a>
            </div>
          </div>
        </div>

        <div class="project-card">
          <img src="./img/Project.png" alt="" />
          <div class="project-card-info">
          <h3 id="projectsDiceGameHeadline"></h3>
          <p id="projectsDiceGameDescription"></p>
            <br />
            <div class="project-used-tech">
              <i class="fab fa-js"></i>
            </div>
            <div class="button-container">
              <a href="./components/Kanban-Board/index.html" class="button" target="_blank">Demo</a>
              <a href="https://github.com/scokic/personal-portfolio-website/tree/main/components/Card-Slider" class="button github-button" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-container components" id="components">
    <div class="container">
      <div id="headline-container">
        <h2 id="componentsHeadline"></h2>
      </div>
      <div class="project-cards-container">
        <div class="project-card">
          
          <img src="./img/Modern Card Slider.png" alt="" />
          
          <div class="project-card-info">
            <h3 id="componentsSliderHeadline"></h3>
            <p id="componentsSliderDescription"></p>
            <br />
            <div class="project-used-tech">
              <i class="fab fa-html5"></i>
              <i class="fab fa-css3-alt"></i>
              <i class="fab fa-js"></i>
            </div>
            
            <div class="button-container">
              <a href="./components/Card-Slider/index.html" class="button" target="_blank">Demo</a>
              <a href="https://github.com/scokic/personal-portfolio-website/tree/main/components/Card-Slider" class="button github-button" target="_blank">GitHub</a>
            </div>

          </div>
        </div>
      


        <div class="project-card">
          
          <img src="./img/Kanban Board.png" alt="" />
          
          <div class="project-card-info">
          <h3 id="componentsKanbanHeadline"></h3>
          <p id="componentsKanbanDescription"></p>
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
      </div>
    </div>
  </section>


  <section class="contact" id="contact">
    <div class="container">
      <h3 id="contactSubHeadline"></h3>
      <h2 id="contactHeadline"></h2>
      <p id="contactDescription"></p>
      <a id="contactButton" href="https://www.linkedin.com/in/strahinjacokic/" class="button"></a>
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
