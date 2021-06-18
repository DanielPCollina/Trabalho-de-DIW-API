//Inicial Values
const API_KEY = '79b47b23ca612a186d057b1c035b2473'; //minha key de acesso do movie db
const url = 'https://api.themoviedb.org/3/movie/popular?api_key=79b47b23ca612a186d057b1c035b2473'; //url dos filmes populares
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'; //url pra pegar imagens

const moviesPopular = document.querySelector('#movies-popular');  //pega no html com o id movies-popular
/*
${IMAGE_URL + movies[0].poster_path} pega o url das imagens e junta com o url salvo no poster_path do data.results
${movies[0].title} pega o titulo do data.results
${movies[0].release_date} pega a data de lançamento do data.results
${movies[0].popularity} pega a popularidade do data.results
${movies[0].overview} pega o resumo do data.results
"https://www.themoviedb.org/movie/${movies[0].id}?language=pt-BR" inclue o id do data.results no link do site para gerar um link com mais informaçoes
*/
function createMovieContainer(movies){
    const movieElement = document.createElement('div'); // cria uma div 
        movieElement.setAttribute('class','row movie'); //coloca uma classe na div criada chamada row movie
        //toda a div criada onde usa de js pra implementar as informaçoes do site
        const movieTemplate = `
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 cardbox">
                <div class="card text-white bg-secondary">
                    <img src="${IMAGE_URL + movies[0].poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${movies[0].title}</h4>
                        <p class="card-text"><b>Lançamento:</b> ${movies[0].release_date}</p>
                        <p class="card-text"><b>Popularidade:</b> ${movies[0].popularity}</p>
                        <p class="card-text"><b>Sinopse:</b> ${movies[0].overview}</p>
                        <button type="button" class="btn btn-light">
                            <a target="_blank" href="https://www.themoviedb.org/movie/${movies[0].id}?language=pt-BR">Leia Mais</a>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 cardbox">
                <div class="card text-white bg-secondary">
                    <img src="${IMAGE_URL + movies[1].poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${movies[1].title}</h4>
                        <p class="card-text"><b>Lançamento:</b> ${movies[1].release_date}</p>
                        <p class="card-text"><b>Popularidade:</b> ${movies[1].popularity}</p>
                        <p class="card-text"><b>Sinopse:</b> ${movies[1].overview}</p>
                        <button type="button" class="btn btn-light">
                            <a target="_blank" href="https://www.themoviedb.org/movie/${movies[1].id}?language=pt-BR">Leia Mais</a>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 cardbox">
                <div class="card text-white bg-secondary">
                    <img src="${IMAGE_URL + movies[2].poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${movies[2].title}</h4>
                        <p class="card-text"><b>Lançamento:</b> ${movies[2].release_date}</p>
                        <p class="card-text"><b>Popularidade:</b> ${movies[2].popularity}</p>
                        <p class="card-text"><b>Sinopse:</b> ${movies[2].overview}</p>
                        <button type="button" class="btn btn-light">
                            <a target="_blank" href="https://www.themoviedb.org/movie/${movies[2].id}?language=pt-BR">Leia Mais</a>
                        </button>
                    </div>
                </div>
            </div>
        `;
        movieElement.innerHTML = movieTemplate; //adiciona ao elemento criado toda a div criada
        return movieElement; //retorna o elemento
}

window.onload = function(){ //cria um evento que começa a funcionar quando a tela termina de carregar
        fetch(url) //fetch faz as requisiçoes para o site do movie db
            .then((res)=>res.json()) //pega o json
            .then((data)=>{ //pega as informaçoes do url (data)
                const movies = data.results; //pega a parte de resultados da data
                const movieBlock = createMovieContainer(movies); //chama a funçao que cria um novo bloco container com os dados de movies
                moviesPopular.appendChild(movieBlock); //coloca esse bloco criado onde se encontra o id movies-popular
            })
            .catch((error)=>{ //printa o erro se algo não funcionar
                console.log('Erro: ', error);
            });
}