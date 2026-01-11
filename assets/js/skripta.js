
//regex i validacija forme

const phoneRegex = /^(\+)?[0-9]{7,15}$/;
const emailRegex = /^[\w\d._+-]+\@[\w\d\._+-]+\.[a-zA-Z\d]{2,}$/;
const nameRegex = /^[A-ŽĆČĐŠ][a-zčćžđš]{1,9}$/;
const messageRegex = /\S+/;

let ime = document.getElementById('name');
let fon = document.getElementById('phone');
let mejl = document.getElementById('email');
let poruka = document.getElementById('message');
let dugmeforma = document.getElementById('formbutton');

let imeerror = document.getElementById('nameerror');
let mejlerror = document.getElementById('mailerror');
let fonerror = document.getElementById('phonerror');
let porukaerror = document.getElementById('messageerror');

let radio1 = document.getElementById('demo-priority-low');
let radio2 = document.getElementById('demo-priority-normal');
let radioerror = document.getElementById('radioerror');



dugmeforma.addEventListener('click',function(e){
 e.preventDefault();
 if(!nameRegex.test(ime.value)){
    imeerror.textContent = "enter a valid name ";

 } 
 else(imeerror.textContent='')

  if(!emailRegex.test(mejl.value)){
    mejlerror.textContent = "enter a valid mail address";

 } 
  else(mejlerror.textContent='')

  if(!phoneRegex.test(fon.value)){
    fonerror.textContent = "invalid phone number";

 } 
  else(fonerror.textContent='')

  if(radio1.checked || radio2.checked){
    radioerror.textContent='';
  }
  else(radioerror.textContent="please select an option")


  if(!messageRegex.test(poruka.value)){
    porukaerror.textContent = "please enter a message";
    } 
  else(porukaerror.textContent = "")

})

//generisanje menija

const navbar = document.getElementById('navbarlist');

const navbarLinkList = [
{
href:"index.html",
text:"Home",
},

{
href:"autor.html",
text:"Autor",
},
]

navbarLinkList.forEach(item => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = item.href;
  a.textContent = item.text;
  li.appendChild(a);
  navbar.appendChild(li);
});


// dinamicko generisanje sekcija o nama sa naizmenicnim stilovima

const sekcijeList = [
  {
    id: "one",
    image: "images/pic01.jpg",
    title: "Fast. Secure. Reliable Web Hosting.",
    text: "BlueSkyHost is a modern web hosting provider designed to help students, creators, and small businesses get online quickly and easily. Whether you’re launching your first website or managing multiple projects, we provide the tools and performance you need to succeed."
  },
  {
    id: "two",
    image: "images/pic02.jpg",
    title: "Why Choose BlueSkyHost?",
    text: "We believe hosting should be simple, affordable, and powerful. Our platform is built to give you peace of mind while your website runs smoothly 24/7."
  },
  {
    id: "three",
    image: "images/pic03.jpg",
    title: "Powerful Cloud Hosting Built for the Future",
    text: "Our cloud hosting platform delivers high performance, flexibility, and reliability by using a distributed network of servers.  Unlike traditional hosting, cloud hosting ensures your website stays online even during high traffic or unexpected demand."
  }
];

const kontejnerSekcije = document.getElementById("containerSekcije");

sekcijeList.forEach((item, index) => {

  const sekcija = document.createElement("section");
  let altovi;
  if (index % 2 !== 0) {
    altovi = "alt";
  } else {
    altovi = "";
  }
  const stilovi = `style${(index % 3) + 1}`;

  sekcija.id = item.id;
  sekcija.className = `wrapper spotlight ${altovi} ${stilovi}`;

  sekcija.innerHTML = `
    <div class="inner">
        <a href="#" class="image">
            <img src="${item.image}" alt="" />
        </a>
        <div class="content">
            <h2 class="major">${item.title}</h2>
            <p>${item.text}</p>
        </div>
    </div>
  `;
  
  kontejnerSekcije.appendChild(sekcija);
});

// servisi kompresovano za vidljivost koda 

const services = [ { category: "Hosting Services", name: "Shared Hosting", description: "A cost-effective solution for beginners and small websites. ", features: [ "Ideal for personal sites and projects", "Easy setup and management", "Affordable pricing", "Free SSL certificate" ] }, 
{ category: "Hosting Services", name: "Cloud Hosting", description: "Flexible and scalable hosting powered by multiple servers.", features: [ "On-demand resource scaling", "High availability and uptime", "Pay-as-you-use model", "Perfect for growing websites" ] },
{ category: "Hosting Services", name: "VPS Hosting ", description: "More power and control than shared hosting.", features: [ "Dedicated resources", "Full root access", "Custom server configurations", "Suitable for developers and businesses" ] }, 
{ category: "Hosting Services", name: "Dedicated Server Hosting", description: "A physical server dedicated to one customer.", features: [ "Maximum performance", "Full server control", "Advanced security", "Best for high-traffic websites" ] }, 
{ category: "Website & Application Services", name: "Website Builder", description: "Create websites without coding.", features: [ "Drag-and-drop editor", "Professional templates", "Mobile-friendly designs", "Fast publishing" ] }, 
{ category: "Website & Application Services", name: "Application Hosting", description: "Optimized hosting for popular apps.", features: [ "WordPress hosting", "Database hosting", "CMS and framework support", "One-click installation" ] }, 
{ category: "Security Services", name: "SSL Certificates", description: "Encrypt data and secure websites.", features: [ "Free and premium SSL options", "Improves trust and SEO", "Easy installation" ] }, 
{ category: "Security Services", name: "DDoS Protection", description: "Protect websites from malicious attacks.", features: [ "Traffic filtering", "Automatic threat detection", "Network-level protection" ] }, 
{ category: "Security Services", name: "Backup & Recovery", description: "Keep your data safe.", features: [ "Automated daily backups", "Easy data restoration", "Off-site storage" ] }, 
{ category: "Email & Domain Services", name: "Domain Registration", description: "Register and manage domains in one place.", features: [ "Multiple domain extensions", "Easy DNS management", "Domain privacy protection" ] }, 
{ category: "Email & Domain Services", name: "Email Hosting", description: "Professional email solutions.", features: [ "Custom domain email addresses", "Spam and virus protection", "Webmail and mobile access" , "Easy migration" ] }, 
{ category: "Support & Management", name: "Managed Hosting", description: "We handle the technical work for you.", features: [ "Server maintenance", "Software updates", "Security monitoring", "Technical support" ] }, 
{ category: "Support & Management", name: "24/7 Technical Support", description: "Help whenever you need it.", features: [ "Live chat and email support", "Knowledge base and tutorials", "Fast response times","24/7 uptime" ] } ];


//ispis i filtriranje servisa

const servisListaKontejner = document.getElementById("services-list");
const loadMoreBtn = document.getElementById("seemorebutton");
const kategorijeSelect = document.getElementById("demo-category");

const brUcitaj = 2;
let currentIndex = 0;
let filtrirano = [...services];

const kategorije = [...new Set(services.map(s => s.category))];
kategorije.forEach(cat => {
  const option = document.createElement("option");
  option.value = cat;
  option.textContent = cat;
  kategorijeSelect.appendChild(option);
});

function prikaz(reset = false) {
  if (reset) {
    servisListaKontejner.innerHTML = "";
    currentIndex = 0;
  }

  const nextItems = filtrirano.slice(
    currentIndex,
    currentIndex + brUcitaj
  );

  nextItems.forEach((service, index) => {
    const article = document.createElement("article");

    article.innerHTML = `
      <a href="#" class="image">
        <img src="images/pic0${((currentIndex + index) % 4) + 4}.jpg" alt="${service.name}">
      </a>
      <h3 class="major">${service.name}</h3>
      <p>${service.description}</p>
      <ul>
        ${service.features.map(f => `<li>${f}</li>`).join("")}
      </ul>
      <a href="#footer" class="special">Contact Us</a>
    `;

    servisListaKontejner.appendChild(article);
  });

  currentIndex += brUcitaj;

  loadMoreBtn.style.display = currentIndex >= filtrirano.length ? "none" : "inline-block";
}

// inicijalno prikaz

prikaz();

// ucitavanje

loadMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  prikaz();
});

// Filteriranje

kategorijeSelect.addEventListener("change", () => {
  const selektovanaKategorija = kategorijeSelect.value;

  if (selektovanaKategorija) {
  filtrirano = services.filter(s => s.category === selektovanaKategorija);
  } else {
  filtrirano = [...services];
  }

  prikaz(true); // Resetuje
});


//snizenje tajmer

let tajmerDatum = new Date("Mar 14, 2026 23:59:59:59").getTime();
setInterval(function(){
let trenutniDatum = new Date().getTime();
let razlika = tajmerDatum - trenutniDatum;

let dani = Math.floor(razlika / (1000 * 60 * 60 * 24));
let sati = Math.floor((razlika % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minuti = Math.floor((razlika % (1000 * 60 * 60)) / (1000 * 60));
let sekunde = Math.floor((razlika % (1000 * 60)) / 1000);

if(document.getElementById('snizenjetajmer')){
document.getElementById('snizenjetajmer').innerHTML ="SPECIAL HOLIDAY SALE 30% off ALL services: <br>"+ dani + "d " + sati + "h " + minuti + "m " + sekunde + "s";
}
},1000);

