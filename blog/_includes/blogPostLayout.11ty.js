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
            <h3 id="date">${date.toLocaleDateString()}</h3>
            ${content}
          </div>
        </div>
    </body>
</html>`;
};
