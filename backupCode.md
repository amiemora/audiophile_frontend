Old feed card 
       <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
                <ListGroup.Item>username just shared a tune!</ListGroup.Item>
                <ListGroup.Item>song: </ListGroup.Item>
                <ListGroup.Item>artist: </ListGroup.Item>
                <ListGroup.Item>Go Listen: <i class="fa-brands fa-spotify"></i>
                <i class="fa-brands fa-soundcloud"></i><i class="fa-solid fa-music"></i></ListGroup.Item>
                <ListGroup.Item>album: </ListGroup.Item>
                <ListGroup.Item>genre: </ListGroup.Item>
                <ListGroup.Item>posted at: </ListGroup.Item>
                <ListGroup.Item>Likes: </ListGroup.Item>
                <ListGroup.Item>Comment: </ListGroup.Item>
            </ListGroup>
            </Card>


Profile 
  <div class="view-width">

   
    <section class="profile-header">
      <div class="profile-header-inner flexbox">
        <div class="phi-info-wrapper flexbox">
          <div class="phi-info-left flexbox">
            
            <div class="phi-profile-picture-wrapper">
              <div class="phi-profile-picture-inner flexbox">
              
              </div>
          
            </div>
            
            <div class="phi-profile-username-wrapper flexbox-col-left">
              <h3 class="phi-profile-username flexbox">Username</h3>
              <p class="phi-profile-tagline">Something neat and funny!</p>
            </div>
          </div>
          <div class="phi-info-right flexbox-right">
            <div>
              <button type="button" class="btn-primary-gray button btn-primary flexbox">
                Feed<div class="btn-secondary"></div>
              </button>
            </div>
          </div>
        </div>
        
        <div class="profile-header-overlay"></div>
        
      </div>
    </section>

   
    <section class="profile-page">
      <h3>Profile Posts</h3>
      <div class="profile-page-inner">
        <div class="profile-page-item flexbox">
         
        </div>
        
      </div>
    </section>

  </div>

  CSS profil 
  @media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}




.nav-item {
  text-decoration: none;
}

/* ABOUT PAGE */
.meme {
  height: 45%;
}

:root {
  /* Main */
  --primary: 300, 92%, 48%;
  --secondary: 178, 100%, 40%;
  --tertiary: 201, 96%, 71%;
  --background: 240, 4%, 3%;
  --text-primary: 0, 0%, 100%;
  /* Colors */
  --black: 0, 0%, 0%;
  --white: 0, 0%, 100%;
  --grooble: 233, 3%, 48%;
  --red: 347, 84%, 68%;
  --orange: 23, 84%, 68%;
  --yellow: 52, 84%, 68%;
  --green: 114, 84%, 68%;
  --teal: 163, 84%, 68%;
  --blue: 219, 84%, 68%;
  --purple: 279, 84%, 68%;
  --pink: 312, 84%, 68%;
  /* Gradients */
  --gradient: linear-gradient(90deg, hsla(var(--primary), 1) 0%, hsla(var(--secondary), 1) 50%, hsla(var(--tertiary), 1) 100%);
  /* Sizes */
  --heading-large: 5.6rem;
  --heading-medium: 3.6rem;
  --heading-small: 2.4rem;
  --paragraph: 1.2rem;
  /* Transitions */
  --transition-main: .175, .685, .32;
  /* Fonts */
  --font-main: "Poppins";
}

/* ==================
  2. Global Styles
 ================== */

*, *::before, *::after {
  box-sizing: inherit;
}
html, body {
  margin: 0;
  width: 100%;
  color: hsl(var(--text-primary));
  font-family: var(--font-main);
  background-color: hsl(var(--background));
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  box-sizing: border-box;
}

/* ================
  2.1 Typography
 =============== */

/* Headings */
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  color: hsl(var(--text-primary));
}
/* Font Size */
h1 {
  font-size: var(--heading-large);
}
h2 {
  font-size: var(--heading-medium);
}
h3 {
  font-size: var(--heading-small);
}
h4 {
  font-size: calc(var(--heading-small) - .2rem);
}
h5 {
  font-size: calc(var(--heading-small) - .4rem);
}
h6 {
  font-size: calc(var(--heading-small) - .6rem);
}
/* Font Weight */
h1, h2 {
  font-weight: 900;
}
h3, h4, h5, h6 {
  font-weight: 800;
}
/* Paragraphs */
p {
  margin: 0;
  color: hsl(var(--text-primary));
  font-size: var(--paragraph);
}
/* Links */
a {
  color: hsla(var(--primary), 1);
  font-size: var(--paragraph);
  text-decoration: underline;
}
a:visited {
  color: hsla(var(--primary), .5);
}

/* =============
  2.2 Buttons
 ============= */

button {
  padding: .8em 1.2em;
  color: hsl(var(--text-primary));
  background-color: hsl(var(--background));
  border: 1px solid hsl(var(--white));
  font-size: var(--paragraph);
  cursor: pointer;
  outline: none;
}
button:focus {
  box-shadow:
          0 0 0 2px hsl(var(--black));
  border: 1px solid transparent;
}
.btn-primary-gray {
  color: hsl(var(--white)) !important;
  background: hsl(var(--black)) !important;
}
.button, .btn-secondary {
  margin: 0;
  width: 100%;
  position: relative;
  padding: 1.2em 1.8em;
  letter-spacing: .025em;
  color: hsl(var(--background));
  font-size: var(--paragraph);
  background: var(--gradient);
  background-size: 500%;
  border-radius: 5em;
  border: none;
  transform: scaleX(1);
  transition: transform .3s cubic-bezier(var(--transition-main), 1.275), filter .3s cubic-bezier(var(--transition-main), 1.275), bottom .3s cubic-bezier(var(--transition-main), 1.275), background-position 7.5s cubic-bezier(var(--transition-main), .955);
}
.button {
  transition: transform .3s cubic-bezier(var(--transition-main), 1.275), bottom .3s cubic-bezier(var(--transition-main), 1.275), background-position 17.5s cubic-bezier(var(--transition-main), .955);
}
.button, .button .btn-secondary {
  bottom: 0;
  background-position: 0 50%;
}
.button .btn-secondary {
  left: 0;
  width: 100%;
  position: absolute;
  filter: blur(1rem);
  transform: scale3d(.85, .95, 1);
  transition: transform .3s cubic-bezier(var(--transition-main), 1.275), filter .3s cubic-bezier(var(--transition-main), 1.275), bottom .3s cubic-bezier(var(--transition-main), 1.275), background-position 7.5s cubic-bezier(var(--transition-main), .955), opacity 3s cubic-bezier(var(--transition-main), 1.275);
  opacity: .3;
  z-index: -1;
}
.button:focus {
  outline: none;
}
.button:hover {
  bottom: 2px;
  transform: scale3d(1.1, 1.1, 1);
  background-position: 100% 50%;
  outline: none;
}
.btn-secondary, .button:hover .btn-secondary {
  bottom: -5px;
  background-position: 100% 50%;
  filter: blur(1.6rem);
  opacity: .4;
}
.button ion-icon {
  margin: 0 .5em .075em 0;
}

/* ===========
  2.3 Lists
 =========== */

ul, ol {
  margin: 1em 0;
}

/* ===========
  2.4 Forms
 =========== */

form {
  margin: 0;
}
fieldset {
  margin: 0;
  padding: .5em 0;
  border: none;
}
input {
  padding: .8em 1.2em;
  color: hsl(var(--text-primary));
  font-size: var(--paragraph);
  border: 2px solid hsl(var(--white));
  outline: none;
}
textarea {
  padding: .8em 1.2em;
  color: hsl(var(--text-primary));
  font-size: var(--paragraph);
  font-family: var(--font-main);
  border: 2px solid hsl(var(--white));
  outline: none;
}
input, textarea {
  transition: all .2s ease-in-out;
}
input:hover, input:focus, textarea:hover, textarea:focus {
  box-shadow:
          0 0 0 2px hsl(var(--white));
  border: 2px solid transparent;
}
select {
  padding: .8em 1.2em;
  color: hsl(var(--text-primary));
  font-size: var(--paragraph);
  border: 1px solid hsl(var(--black));
  outline: none;
}

/* ============
  3. Classes
 ============ */

.material-icons-round {
  user-select: none;
  cursor: default;
}

/* ====================
  3.1 Global classes
 ==================== */

/* ===============
  3.1.1 Flexbox
 =============== */

.flexbox {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flexbox-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.flexbox-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
/* Columns */
.flexbox-col {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.flexbox-col-left {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
}
.flexbox-col-left-ns {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
}
.flexbox-col-right {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
}
.flexbox-col-right-ns {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
}
.flexbox-col-start-center {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}
/* Spacings */
.flexbox-space-bet {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* ===============
  3.2 Classes
 =============== */

.view-width {
  width: 70%;
}

/* ==============
  3.2.1 Navbar
 ============== */

/* ==============
  3.2.2 Header
 ============== */

/* ============
  3.2.3 Main
 ============ */

#main {
  min-height: 110vh;
}

/* ======================
  3.2.3.1 Profile Page
 ====================== */

/* Profile Header */
.profile-header {
  width: 100%;
  position: relative;
}
.profile-header-inner {
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 2;
}
.profile-header-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(hsla(var(--background), .33) 0%, hsla(var(--background), .77) 50%, hsla(var(--background), 1) 100%);
  z-index: 3;
}
.profile-header-image {
  min-width: 100%;
  max-width: 110%;
  min-height: 100%;
  position: absolute;
  filter: hue-rotate(-5deg) saturate(1.25);
  object-fit: cover;
}
/* Profile Info */
.phi-info-wrapper {
  padding: 4em 4em 8em 4em;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2em;
  z-index: 5;
}
.phi-info-left {
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2em;
  z-index: 5;
}
/* Profile Info */
.phi-info-wrapper {
  padding: 4em 4em 8em 4em;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2em;
  z-index: 5;
}
/* Profile Picture */
.phi-profile-picture-wrapper {
  width: 10em;
  height: 10em;
  position: relative;
}
.phi-profile-picture-inner {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  z-index: 6;
}
.phi-profile-picture {
  min-width: 100%;
  max-width: 105%;
  min-height: 100%;
  position: absolute;
  object-fit: cover;
}
.phi-profile-picture-blur {
  top: 1em;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  transform: scale(.8, .8);
  filter: blur(1rem) hue-rotate(-5deg) saturate(1.25);
}
/* Profile Username */
.phi-profile-username-wrapper {

}
.phi-profile-username span {
  margin: 0 0 0 .3em;
}
.phi-profile-tagline {
  color: hsl(var(--grooble));
}

/* Profile Page */
.profile-page {
  margin: 10em 0;
}
.profile-page > h3 {
  font-size: var(--paragraph);
  text-transform: uppercase;
}
.profile-page-inner {
  margin: 1.5em 0;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 0;
}
.profile-page-item {
  margin: 0;
  height: 30vh;
  flex-grow: 1;
  position: relative;
  cursor: pointer;
}
.profile-page-item-image {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}

/* ==============
  3.2.4 Footer
 ============== */

/* ================
  4. ::Selectors
 ================ */

/* Selection */
::selection {
  color: hsl(var(--white));
  background: hsla(var(--primary), .33);
}
/* Scrollbar */
::-webkit-scrollbar-track {
  background-color: hsl(var(--background));
}
::-webkit-scrollbar {
  width: 8px;
  background-color: hsl(var(--background));
}
::-webkit-scrollbar-thumb {
  background-color: hsl(var(--primary));
}

/* ===============
  5. @keyframes
 =============== */

/* =================
  6. @media rules
 ================= */

/* =======================
  6.1 max-width: 1660px
 ======================= */

@media only screen and (max-width: 1660px) {
  :root {
      /* Sizes */
      --heading-large: 5.4rem;
      --heading-medium: 3.4rem;
      --heading-small: 2.2rem;
  }

  /* ===============
      3.2 Classes
     =============== */

  /* ==============
      3.2.1 Navbar
     ============== */

  /* ==============
      3.2.2 Header
     ============== */

  /* ============
      3.2.3 Main
     ============ */

  /* ======================
      3.2.3.1 Profile Page
     ====================== */

  /* ==============
      3.2.4 Footer
     ============== */

}

/* =======================
  6.2 max-width: 1456px
 ======================= */

@media only screen and (max-width: 1456px) {
  :root {
      /* Sizes */
      --heading-large: 5.2rem;
      --heading-medium: 3.2rem;
      --heading-small: 2rem;
  }

  /* ===============
      3.2 Classes
     =============== */

  .view-width {
      width: 80%;
  }

  /* ==============
      3.2.1 Navbar
     ============== */

  /* ==============
      3.2.2 Header
     ============== */

  /* ============
      3.2.3 Main
     ============ */

  /* ======================
      3.2.3.1 Profile Page
     ====================== */

  /* ==============
      3.2.4 Footer
     ============== */

}

/* =======================
  6.3 max-width: 1220px
 ======================= */

@media only screen and (max-width: 1220px) {

  /* ===============
      3.2 Classes
     =============== */

  .view-width {
      width: 70%;
  }

  /* ==============
      3.2.1 Navbar
     ============== */

  /* ==============
      3.2.2 Header
     ============== */

  /* ============
      3.2.3 Main
     ============ */

  /* ======================
      3.2.3.1 Profile Page
     ====================== */

  /* ==============
      3.2.4 Footer
     ============== */

}

/* =======================
  6.4 max-width: 1024px
 ======================= */

@media only screen and (max-width: 1024px) {
  :root {
      /* Sizes */
      --heading-large: 5rem;
      --heading-medium: 3rem;
      --heading-small: 1.8rem;
  }

  /* ===============
      3.2 Classes
     =============== */

  .view-width {
      width: 75%;
  }

  /* ==============
      3.2.1 Navbar
     ============== */

  /* ==============
      3.2.2 Header
     ============== */

  /* ============
      3.2.3 Main
     ============ */

  /* ======================
      3.2.3.1 Profile Page
     ====================== */

  /* Profile Info */
  .phi-info-wrapper {
      grid-template-columns: auto;
      place-items: center;
      gap: 2em;
  }
  .phi-info-right {
      justify-content: center;
      align-items: center;
  }

  /* ==============
      3.2.4 Footer
     ============== */

}

/* ======================
  6.5 max-width: 756px
 ====================== */

@media only screen and (max-width: 756px) {
  :root {
      /* Sizes */
      --heading-large: 4rem;
      --heading-medium: 2.6rem;
      --heading-small: 1.6rem;
      --paragraph: 1rem;
      --navbar-buttons: 2rem;
  }

  /* ===============
      3.2 Classes
     =============== */

  .view-width {
      width: calc(100% - 5em);
  }

  /* ==============
      3.2.1 Navbar
     ============== */

  /* ==============
      3.2.2 Header
     ============== */

  /* ============
      3.2.3 Main
     ============ */

  .phi-info-left {
      grid-template-columns: auto;
      place-items: center;
      gap: 2em;
  }
  /* Profile Username */
  .phi-profile-username-wrapper {
      justify-content: center;
      align-items: center;
  }

  /* ======================
      3.2.3.1 Profile Page
     ====================== */

  /* ==============
      3.2.4 Footer
     ============== */

}

/* ======================
  6.6 max-width: 576px
 ====================== */

@media only screen and (max-width: 576px) {

  /* ===============
      3.2 Classes
     =============== */

  .view-width {
      width: calc(100% - 3em);
  }

  /* ==============
      3.2.1 Navbar
     ============== */

  /* ==============
      3.2.2 Header
     ============== */

  /* ============
      3.2.3 Main
     ============ */

  /* ======================
      3.2.3.1 Profile Page
     ====================== */

  /* ==============
      3.2.4 Footer
     ============== */

}

/* ======================
  6.7 max-width: 496px
 ====================== */

@media only screen and (max-width: 496px) {

  /* ===============
      3.2 Classes
     =============== */

  /* ==============
      3.2.1 Navbar
     ============== */

  /* ==============
      3.2.2 Header
     ============== */

  /* ============
      3.2.3 Main
     ============ */

  /* ======================
      3.2.3.1 Profile Page
     ====================== */

  /* ==============
      3.2.4 Footer
     ============== */

}