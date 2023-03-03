// Lista över regissörer, skådespelare och manusförfattare
let regissorer = [
  { namn: "Steven Spielberg", förmåga: "action", kostnad: 50000 },
  { namn: "Quentin Tarantino", förmåga: "drama", kostnad: 60000 },
  { namn: "James Cameron", förmåga: "action", kostnad: 55000 },
  { namn: "Christopher Nolan", förmåga: "drama", kostnad: 65000 },
];

let skådespelare = [
  { namn: "Tom Cruise", förmåga: "action", kostnad: 30000 },
  { namn: "Brad Pitt", förmåga: "drama", kostnad: 35000 },
  { namn: "Robert De Niro", förmåga: "drama", kostnad: 40000 },
  { namn: "Scarlett Johansson", förmåga: "action", kostnad: 32000 },
];

let manusförfattare = [
  { namn: "Aaron Sorkin", förmåga: "drama", kostnad: 25000 },
  { namn: "Christopher McQuarrie", förmåga: "action", kostnad: 27000 },
  { namn: "Nora Ephron", förmåga: "romantik", kostnad: 22000 },
  { namn: "Adam McKay", förmåga: "komedi", kostnad: 20000 },
];
// Lista över manus för varje filmgenre
let actionManus = [
  { titel: "The Heist", längd: 120, kostnad: 20000, kvalitet: 7 },
  { titel: "The Hitman", längd: 110, kostnad: 18000, kvalitet: 6 },
  { titel: "The Chase", längd: 105, kostnad: 15000, kvalitet: 5 },
];

let dramaManus = [
  { titel: "The Trial", längd: 130, kostnad: 22000, kvalitet: 8 },
  { titel: "The Secrets We Keep", längd: 115, kostnad: 19000, kvalitet: 7 },
  { titel: "The Lost Child", längd: 100, kostnad: 17000, kvalitet: 6 },
];

let romantikManus = [
  { titel: "The Perfect Match", längd: 100, kostnad: 15000, kvalitet: 7 },
  { titel: "The Love Affair", längd: 110, kostnad: 17000, kvalitet: 6 },
  { titel: "The Wedding Planner", längd: 95, kostnad: 13000, kvalitet: 5 },
];

let komediManus = [
  { titel: "The Misadventures of Ted", längd: 95, kostnad: 15000, kvalitet: 6 },
  { titel: "The Crazy Family", längd: 100, kostnad: 17000, kvalitet: 7 },
  { titel: "The Awkward Date", längd: 90, kostnad: 13000, kvalitet: 5 },
];

// Funktion för att välja manus baserat på vald genre
function väljManus(genre) {
  switch (genre) {
    case "action":
      return actionManus;
    case "drama":
      return dramaManus;
    case "romantik":
      return romantikManus;
    case "komedi":
      return komediManus;
    default:
      return actionManus;
  }
}
let budget = 1000000;
let tidsram = 12; // månader

// Funktion för att räkna ut kostnaden för ett projekt baserat på vald regissör, skådespelare, manus och längd
function beräknaKostnad(regissör, skådespelare, manus, längd) {
  let regKostnad = regissör.kostnad;
  let skådKostnad = skådespelare.reduce(
    (total, actor) => total + actor.kostnad,
    0
  );
  let manusKostnad = manus.kostnad;
  let produktionsKostnad = (regKostnad + skådKostnad + manusKostnad) * längd;
  return produktionsKostnad;
}

// Funktion för att räkna ut hur många månader det tar att slutföra ett projekt baserat på vald längd
function beräknaTidslinje(längd) {
  let månader = Math.ceil(längd / 30);
  return månader;
}

// Användning av funktionerna för att räkna ut kostnad och tidslinje för ett projekt
let valdRegissör = regissorer[0];
let valdaSkådespelare = [skådespelare[0], skådespelare[1]];
let valtManus = manusförfattare[0];
let valdLängd = 120;
let projektKostnad = beräknaKostnad(
  valdRegissör,
  valdaSkådespelare,
  valtManus,
  valdLängd
);
let projektTidsram = beräknaTidslinje(valdLängd);

// Lista över biografer med publika och kostnader
let biografer = [
  { namn: "Hollywood Cinema", publika: 5000, kostnad: 300000 },
  { namn: "Sunset Boulevard Theater", publika: 4500, kostnad: 250000 },
  { namn: "Beverly Hills Playhouse", publika: 5500, kostnad: 350000 },
];

// Funktion för att välja biograf baserat på vald publika och budget
function väljBiograf(publika, budget) {
  let möjligaBiografer = biografer.filter(
    (bio) => bio.publika >= publika && bio.kostnad <= budget
  );
  let valdBiograf =
    möjligaBiografer[Math.floor(Math.random() * möjligaBiografer.length)];
  return valdBiograf;
}

// Användning av funktionen för att välja en biograf
let valdPublika = 5000;
let biograf = väljBiograf(valdPublika, budget);

// Lista över andra studios att samarbeta med
let andraStudios = [
  { namn: "Warner Bros", risk: 0.1, kostnad: 50000 },
  { namn: "Universal Pictures", risk: 0.15, kostnad: 45000 },
  { namn: "Paramount Pictures", risk: 0.2, kostnad: 55000 },
];

// Funktion för att välja en annan studio att samarbeta med baserat på vald risk och budget
function väljAnnatStudios(risk, budget) {
  let möjligaStudios = andraStudios.filter(
    (studio) => studio.risk <= risk && studio.kostnad <= budget
  );
  let valdStudio =
    möjligaStudios[Math.floor(Math.random() * möjligaStudios.length)];
  return valdStudio;
}

// Användning av funktionen för att välja en annan studio att samarbeta med
let valdRisk = 0.1;
let annanStudio = väljAnnatStudios(valdRisk, budget);

// Lista över filmer med vinst, publika och kvalitet
let filmer = [
  { titel: "The Heist", vinst: 500000, publika: 8000, kvalitet: 7 },
  { titel: "The Trial", vinst: 700000, publika: 9000, kvalitet: 8 },
  { titel: "The Perfect Match", vinst: 300000, publika: 5000, kvalitet: 7 },
  {
    titel: "The Misadventures of Ted",
    vinst: 400000,
    publika: 6000,
    kvalitet: 6,
  },
  { titel: "The Secrets We Keep", vinst: 600000, publika: 7500, kvalitet: 7 },
  { titel: "The Love Affair", vinst: 450000, publika: 6500, kvalitet: 6 },
  { titel: "The Crazy Family", vinst: 350000, publika: 5500, kvalitet: 7 },
  { titel: "The Hitman", vinst: 250000, publika: 4000, kvalitet: 6 },
  { titel: "The Chase", vinst: 200000, publika: 3500, kvalitet: 5 },
  { titel: "The Awkward Date", vinst: 150000, publika: 2500, kvalitet: 5 },
  { titel: "The Wedding Planner", vinst: 100000, publika: 2000, kvalitet: 4 },
  { titel: "The Lost Child", vinst: 50000, publika: 1500, kvalitet: 3 },
];

// Funktion för att räkna ut en studios totala vinst baserat på deras filmer
function beräknaVinst(studioFilmer) {
  let totalVinst = studioFilmer.reduce((total, film) => total + film.vinst, 0);
  return totalVinst;
}

// Funktion för att räkna ut en studios totala publika baserat på deras filmer
function beräknaPublik(studioFilmer) {
  let totalPublik = studioFilmer.reduce(
    (total, film) => total + film.publika,
    0
  );
  return totalPublik;
}

// Funktion för att räkna ut en studios genomsnittliga kvalitet baserat på deras filmer
function beräknaKvalitet(studioFilmer) {
  let totalKvalitet = studioFilmer.reduce(
    (total, film) => total + film.kvalitet,
    0
  );
  let genomsnittligKvalitet = totalKvalitet / studioFilmer.length;
  return genomsnittligKvalitet;
}

// Lista över alla studios med deras filmer
let studios = [
  { namn: "Min studio", filmer: [filmer[0], filmer[2], filmer[4]] },
  { namn: "Warner Bros", filmer: [filmer[1], filmer[3]] },
  { namn: "Universal Pictures", filmer: [filmer[5], filmer[7], filmer[9]] },
  {
    namn: "Paramount Pictures",
    filmer: [filmer[6], filmer[8], filmer[10], filmer[11]],
  },
];
// Funktion för att sortera studios baserat på deras totala vinst
function sorteraStudiosVinst() {
  studios.sort((a, b) => {
    let vinstA = beräknaVinst(a.filmer);
    let vinstB = beräknaVinst(b.filmer);
    return vinstB - vinstA;
  });
}

// Funktion för att sortera studios baserat på deras totala publika
function sorteraStudiosPublik() {
  studios.sort((a, b) => {
    let publikA = beräknaPublik(a.filmer);
    let publikB = beräknaPublik(b.filmer);
    return publikB - publikA;
  });
}

// Funktion för att sortera studios baserat på deras genomsnittliga kvalitet
function sorteraStudiosKvalitet() {
  studios.sort((a, b) => {
    let kvalitetA = beräknaKvalitet(a.filmer);
    let kvalitetB = beräknaKvalitet(b.filmer);
    return kvalitetB - kvalitetA;
  });
}

// Användning av funktionerna för att sortera studios baserat på deras vinst, publika och kvalitet
sorteraStudiosVinst();
sorteraStudiosPublik();
sorteraStudiosKvalitet();

const skådespelareSelect = document.getElementById("skådespelare");

for (let i = 0; i < skådespelare.length; i++) {
  const option = document.createElement("option");
  option.value = skådespelare[i].kostnad; // Sätt value-attributet till skådespelarens lön
  option.dataset.namn = skådespelare[i].namn;
  option.textContent = `${skådespelare[i].namn} (${skådespelare[i].kostnad} dollar)`;
  skådespelareSelect.appendChild(option);
}
