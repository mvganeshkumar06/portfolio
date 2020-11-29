exports.render = ({ title, date, content }) => {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta
      name="description"
      content="This is my personal portfolio which I use to showcase my contributions, projects and techinal experience"
    />

    <meta name="keywords" content="potfolio-app" />

    <meta name="author" content="M.V.Ganesh Kumar" />

    <title>Ganesh Kumar</title>

    <link rel="stylesheet" href="../../../../css/blogPost.css" />
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.0/styles/vs.min.css">
  </head>
    <body>
        <div id="navbarContainer">
          <img id="profile" src="../../../../assets/profile.svg" alt="profile picture"/>
          <p id="navText">GANESH KUMAR</p>
          <ul id="navbar">
            <a id="home" href="../../../../index.html">
              <li>HOME</li>
            </a>

            <a id="projects" href="../../../../projects.html">
              <li>PROJECTS</li>
            </a>

            <a id="blogs" href="../../../../blog.html">
              <li>BLOGS</li>
            </a>
          </ul>
        </div>
        <div id="postContainer">
          <div id="postItem"> 
            <h1 id="title">${title}</h1>
            <p id="date">${date.toLocaleDateString()}</p>
            ${content}
          </div>
        </div>
        <footer>
      <div id="socialFooter">
        <h4>
          Made with
          <img
            id="heartIcon"
            src="https://img.icons8.com/fluent/48/000000/like.png"
          />
          by Ganesh Kumar
        </h4>
        <a
          href="https://mvganeshkumar.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="icons"
            src="https://img.icons8.com/windows/64/000000/domain.png"
            alt="website"
          />
        </a>
        <a
          href="https://github.com/Ganesh-Kumar6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="icons"
            src="https://img.icons8.com/fluent/48/000000/github.png"
            alt="github"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/ganesh-kumar6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="icons"
            src="https://img.icons8.com/fluent/48/000000/linkedin.png"
            alt="linkedin"
          />
        </a>
      </div>
      <a id="iconAttribution" href="https://icons8.com">Icons by Icons8</a>
    </footer>
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
    </body>
</html>`;
};
