//Création du tableau qui contiendra tous les articles


const articlesArray = [
    article = {
        "titre" : "Da Nang en fête" ,
        "catégorie" : "évennement",
        "date" : "14/07",
        "localisation" : "Nam Trung Bo, Da Nang" ,
        "image" : "../assets/img/vietnam-7427070 (1).jpg",
    } ,
    article = {
        "titre" : "le succés du billard !",
        "catégorie" : "loisir",
        "date" : "14/08",
        "localisation" : "Ho Chi Minh City" ,
        "image" : "../assets/img/billard - Copie.jpg" ,
    } ,
    article = {
        "titre" : "la Pagode Linh Ung",
        "catégorie" : "lieux",
        "date" : "05/07",
        "localisation" : "Nam Trung Bo, Da Nang" ,
        "image" : "../assets/img/buddha-7438162.jpg",
    } ,
    article = {
        "titre" : "le festival des lanternes",
        "catégorie" : "évennement",
        "date" : "05/06",
        "localisation" : "Quang Nam, Hoi An",
        "image" : "../assets/img/lantern_4670043 - Copie.jpg",
    } ,
    article = {
        "titre" : "la pêche à la plage" ,
        "catégorie" : "lieux",
        "date" : "02/06",
        "localisation" : "Delta du Mekong, Tien Giang",
        "image" : "../assets/img/sea.jpg",
    } ,
    article = {
        "titre" : "Da Nang" ,
        "catégorie" : "activités",
        "date" : "14/07",
        "localisation" : "Nam Trung Bo, Da Nang" ,
        "image" : "../assets/img/sunset.jpg",
    } ,
    article = {
        "titre" : "Sortie nocturne à Hanoi",
        "catégorie" : "sortie",
        "date" : "14/09",
        "localisation" : "Nord Vietnam, Hanoi" ,
        "image" : "../assets/img/night-6759684_1920.jpg" ,
    } ,
    article = {
        "titre" : "le pont du Dragon",
        "catégorie" : "culture",
        "date" : "21/06",
        "localisation" : "Nam Trung Bo, Da Nang",
        "image" : "../assets/img/dragon_bridge-7557779.jpg",
    } ,
];

const divContainer = document.querySelector("#searchResultsContainer");
const searchForm = document.querySelector("#searchForm");
const container = document.querySelector("#searchResultsContainer");
const searchInput = document.querySelector("#searchInput");
searchForm.addEventListener("submit", function(e){
    divContainer.innerHTML = "";
    e.preventDefault();
    const value = searchInput.value.toLowerCase().split(" ");
    console.log(value);
    for (let i = 0 ; i < articlesArray.length ; i++){
        for (let key in articlesArray[i]){
            if (articlesArray[i][key].toLowerCase().includes(value)){
            console.log(articlesArray[i][key]+ "ok");
            const article = document.createElement("article");
            const ancre = document.createElement("a");
            const div = document.createElement("div");
            div.classList.add("articleContenair");
            const divOne = document.createElement("div");
            divOne.classList.add("articleContenairImage");
            const divTwo = document.createElement("div");
            divTwo.classList.add("articleContenairInfo");
            const divThree = document.createElement("div");
            divThree.classList.add("articleInfoTop");
            const divFour = document.createElement("div");
            divFour.classList.add("articleInfoTitle");
            const divFive = document.createElement("div");
            divFive.classList.add("articleInfoBottom");
            const title = document.createElement("h4");
            title.classList.add("h4-ArticleTitle");
            const image = document.createElement("img");
            image.classList.add("articleImage");
            const icon = document.createElement("img");
            const paragraph = document.createElement("p");
            const paragraphOne = document.createElement("p");
            const paragraphTwo = document.createElement("p");
            const categories = document.createElement ("e");
            const date = document.createElement ("e");
            const location = document.createElement ("e");
            divContainer.appendChild(article);
            article.appendChild(ancre);
            ancre.appendChild(div);
            div.append(divOne , divTwo);
            divOne.appendChild(image);
            divTwo.append(divThree, divFour , divFive);
            divThree.append(paragraph, paragraphOne);
            divFour.appendChild(title);
            divFive.append(paragraphTwo ,icon);
            paragraph.appendChild(categories);
            paragraphOne.appendChild(date);
            paragraphTwo.appendChild(location);
            console.log(divContainer);
            image.setAttribute("src",articlesArray[i].image);
            icon.setAttribute("src","../assets/img/pin.svg");
            categories.innerText = articlesArray[i].catégorie;
            date.innerText = articlesArray[i].date;
            title.innerText = articlesArray[i].titre;
            location.innerText = articlesArray[i].localisation;
            break;
         }
        }
         
    }
   
});

console.log(searchInput);
