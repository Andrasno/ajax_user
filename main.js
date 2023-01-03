document.addEventListener("DOMContentLoaded", function(){
    const nome = document.querySelector('#nome');
    const perfil = document.querySelector('#perfil');
    const repositorios = document.querySelector('#numero-repositorios')
    const seguidores = document.querySelector('#numero-seguidores')    
    const seguindo = document.querySelector('#seguindo')   
    const link = document.querySelector('#link-perfil')
    const avatar = document.querySelector('#avatar')

   

    fetch('https://api.github.com/users/Andrasno').then(function(resposta){
        return resposta.json();
    }).then(function(json){
        nome.innerText = json.name;
        perfil.innerText = json.login;
        seguindo.innetText = json.followers;
        seguidores.innerText = json.following;
        repositorios.innerText = json.public_repos;
        avatar.src = json.avatar_url;
        link.href = json.html_url;
        


    })
})