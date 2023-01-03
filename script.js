const nomeCompleto = document.querySelector('#nomeCompleto');
const bio = document.querySelector('#bio');

const nomeGithub = 'Caio2M'

const apiGit = `https://api.github.com/users/${nomeGithub}`;

const reposApi = `https://api.github.com/users/${nomeGithub}/repos`;

fetch(apiGit)
  .then(response => response.json())
  .then(body =>{
    const result = body;
 
    nomeCompleto.innerText = result.name;
    console.log('nome enviado ' + result.name);

  })

  fetch(apiGit)
  .then(response => response.json())
  .then(body =>{
    const result = body;
 
    bio.innerText = result.bio;
    console.log('bio enviada' + result.bio);
  })

  fetch(apiGit)
  .then(response => response.json())
  .then(function(result){
    img = result.avatar_url;
    document.getElementById('fotoPerfil').src = img
  
    /* const imagem = `<img src="${img}">`;*/
    console.log('Foto enviada ' + result.avatar_url);
  })
 
  fetch(apiGit)
  .then(response => response.json())
  .then(function(result){
    local = result.location;

    if (local === null) {
      const removerDiv = document.getElementById('mapinha');
      removerDiv.style.display = 'none';
     }

    const localizacao = document.getElementById('local');
    localizacao.innerHTML = local;
    console.log('localizaão enviada ' +result.location);

  })

  fetch(apiGit)
  .then(response => response.json())
  .then(function(result){
    corp = result.company;

    if (corp === null) {
      const removerDiv = document.getElementById('empresaID');
      removerDiv.style.display = 'none';
     }

    company = document.getElementById('empresa');
    company.innerHTML = corp;
    console.log('empresa enviada ' + result.company);
  })

  fetch(apiGit)
  .then(response => response.json())
  .then(function(result){
    log = result.login;

    if (log === null) {
      const removerDiv = document.getElementById('github');
      removerDiv.style.display = 'none';
     }
  
    login = document.getElementById('nomeGit');
    login.innerHTML = log;
    console.log('logingit enviado ' + result.login);
  })

  fetch(apiGit)
  .then(response => response.json())
  .then(function(result){
    mail = result.email;

    if (mail === null) {
     const removerDiv = document.getElementById('tirarEmail');
     removerDiv.style.display = 'none';
    }

    email = document.getElementById('email');
    email.innerHTML = mail;
    console.log('email enviada ' + result.email);
  })


  fetch(apiGit)
  .then(response => response.json())
  .then(function(result){
    twitter = result.twitter_username;

    if (twitter === null) {
     const removerDiv = document.getElementById('twitterDiv');
     removerDiv.style.display = 'none';
    }

    twitter1 = document.getElementById('twitter');
    twitter1.innerHTML = '@' + twitter;
    console.log('twitter enviado ' + result.twitter_username);
  })

fetch(apiGit)
.then(response => response.json())
.then(function(result){
   qntdRepos = result.public_repos;
   let x = qntdRepos - 1;
  if(x > 8){
    x = 8;

    fetch(reposApi)
    .then(response => response.json())
    .then(function(result){
      console.log(result);
      console.log(result[x].name);
    
      for (let index = 0; index < x; index++) {
        const titleProject = result[index].name;
        const descriptionProject = result[index].description;
        const estrelinha = result[index].stargazers_count;
        const fork = result[index].forks_count;
        const url = result[index].html_url;
    
        const repositorios = document.getElementById('IDprojetos');
        repositorios.innerHTML += 
        `
        <div class="DivProjeto">
        <div class="tituloProjeto">
        <a style="display: contents;" href="${url}">
          <img class="pasta" src="img/folderfolder.png" alt="">
          <h3 id="nomeProjeto">${titleProject}</h3></a>
        </div>
        <p id="textoProjeto">${descriptionProject}</p>
        <div class="sub-info">
          <div class="starShare">
            <div class="star"> 
              <img src="img/starstar.png" alt=""><p id="idStar">${estrelinha}</p>
            </div> 
            <div class="share">
              <img src="img/git-branchgit-branch.png" alt=""><p id="idShare">${fork}</p>
            </div> 
          </div>
        </div> 
      </div>`;
    
    
      }
      
    })
    

  }
  else{

   fetch(reposApi)
.then(response => response.json())
.then(function(result){
  console.log(result);
  console.log(result[x].name);

  for (let index = 0; index < qntdRepos; index++) {
    const titleProject = result[index].name;
    const descriptionProject = result[index].description;
    const estrelinha = result[index].stargazers_count;
    const fork = result[index].forks_count;
    const url = result[index].html_url;

    const repositorios = document.getElementById('IDprojetos');
    repositorios.innerHTML += 
    `
    <div class="DivProjeto">
    <div class="tituloProjeto">
    <a style="display: contents;" href="${url}">
      <img class="pasta" src="img/folderfolder.png" alt="">
      <h3 id="nomeProjeto">${titleProject}</h3></a>
    </div>
    <p id="textoProjeto">${descriptionProject}</p>
    <div class="sub-info">
      <div class="starShare">
        <div class="star"> 
          <img src="img/starstar.png" alt=""><p id="idStar">${estrelinha}</p>
        </div> 
        <div class="share">
          <img src="img/git-branchgit-branch.png" alt=""><p id="idShare">${fork}</p>
        </div> 
      </div>
    </div> 
  </div>`;


  }
  
})

}

})


