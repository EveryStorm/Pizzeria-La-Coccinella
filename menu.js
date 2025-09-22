const menuData = {
  "Antipasti": [
    { nome: "Antipasto Casereccio", prezzo: 8, ingredienti: "Salumi, formaggi, sottaceti" },
    { nome: "Crudo e Mozzarella", prezzo: 10, ingredienti: "Prosciutto crudo, mozzarella fresca" },
    { nome: "Insalata di Mare", prezzo: 10, ingredienti: "Frutti di mare misti, verdure" },
    { nome: "Tagliata di Vitello", prezzo: 13, ingredienti: "Vitello, rucola, scaglie di grana" }
  ],

  "Contorni": [
    { nome: "Insaltona", prezzo: 6, ingredienti: "Insalata mista, pomodori, tonno, mais" },
    { nome: "Insalata Verde", prezzo: 3, ingredienti: "Lattuga fresca, olio, limone" },
    { nome: "Bruschette", prezzo: 5, ingredienti: "Pane, pomodoro, olio extravergine" }
  ],

  "Frittura": [
    { nome: "Calzone Fritto", prezzo: 2, ingredienti: "Impasto fritto, pomodoro, mozzarella" },
    { nome: "Hot Dog", prezzo: 3, ingredienti: "Wurstel, pane, salse" },
    { nome: "Arancino", prezzo: 1.5, ingredienti: "Riso, ragù, piselli" },
    { nome: "Arancino Nduja", prezzo: 2, ingredienti: "Riso, nduja piccante, mozzarella" },
    { nome: "Crocchette Patate", prezzo: 0.8, ingredienti: "Patate, pangrattato, olio" },
    { nome: "Crocchette Riso", prezzo: 0.8, ingredienti: "Riso, mozzarella, pangrattato" },
    { nome: "Crocchette Carne", prezzo: 0.8, ingredienti: "Carne macinata, pangrattato" },
    { nome: "Crocchette Salmone", prezzo: 0.9, ingredienti: "Salmone, patate, erbe aromatiche" },
    { nome: "Patatine", prezzo: 2.5, ingredienti: "Patate fritte" },
    { nome: "Patatine + Mozzarella", prezzo: 3, ingredienti: "Patate fritte, mozzarella filante" },
    { nome: "Patatine + Salsiccia", prezzo: 3.5, ingredienti: "Patate fritte, salsiccia" },
    { nome: "Patatine + Mozzarella + Salsiccia", prezzo: 4, ingredienti: "Patate fritte, mozzarella, salsiccia" },
    { nome: "Cotoletta di Pollo con Patatine", prezzo: 8, ingredienti: "Cotoletta, patatine fritte" }
  ],

  "Pizze Rosse": [
    { nome: "Casareccia", prezzo: 7, ingredienti: "Pomodoro, mozzarella, origano" },
    { nome: "Messicana", prezzo: 7, ingredienti: "Pomodoro, mozzarella, peperoni, jalapeños" },
    { nome: "Vulcano", prezzo: 7, ingredienti: "Pomodoro, mozzarella, nduja, peperoni" },
    { nome: "Parmigiana", prezzo: 7, ingredienti: "Pomodoro, mozzarella, melanzane, parmigiano" },
    { nome: "Frutti di Mare", prezzo: 10, ingredienti: "Pomodoro, mozzarella, frutti di mare" },
    { nome: "Americana", prezzo: 7, ingredienti: "Pomodoro, mozzarella, wurstel, mais" },
    { nome: "Nduja", prezzo: 7, ingredienti: "Pomodoro, mozzarella, nduja calabra" },
    { nome: "Tonno e Cipolla", prezzo: 7, ingredienti: "Pomodoro, mozzarella, tonno, cipolla" },
    { nome: "Inglesina", prezzo: 7, ingredienti: "Pomodoro, mozzarella, prosciutto, uovo" },
    { nome: "Boscaiola", prezzo: 8, ingredienti: "Pomodoro, mozzarella, funghi, salsiccia" },
    { nome: "Capricciosa", prezzo: 7, ingredienti: "Pomodoro, mozzarella, prosciutto, carciofi, olive" },
    { nome: "4 Stagioni", prezzo: 7, ingredienti: "Pomodoro, mozzarella, funghi, prosciutto, carciofi, olive" },
    { nome: "4 Formaggi Rossa", prezzo: 7, ingredienti: "Pomodoro, mozzarella, formaggi misti" },
    { nome: "Margherita", prezzo: 6, ingredienti: "Pomodoro, mozzarella, basilico" },
    { nome: "Napoletana", prezzo: 7, ingredienti: "Pomodoro, mozzarella, acciughe, origano" },
    { nome: "Della Casa", prezzo: 7, ingredienti: "Pomodoro, mozzarella, specialità del giorno" },
    { nome: "Calabrese", prezzo: 7, ingredienti: "Pomodoro, mozzarella, salame piccante" },
    { nome: "Viennese", prezzo: 8, ingredienti: "Pomodoro, mozzarella, wurstel" },
    { nome: "Marinara", prezzo: 5, ingredienti: "Pomodoro, aglio, origano" },
    { nome: "Ortolana", prezzo: 7, ingredienti: "Pomodoro, mozzarella, verdure grigliate" },
    { nome: "Salsiccia e Rape", prezzo: 8, ingredienti: "Pomodoro, mozzarella, salsiccia, cime di rapa" },
    { nome: "Provolona", prezzo: 8, ingredienti: "Pomodoro, provola affumicata" },
    { nome: "Carbonara", prezzo: 8, ingredienti: "Pomodoro, mozzarella, uovo, pancetta" },
    { nome: "Montanara", prezzo: 8, ingredienti: "Pomodoro, mozzarella, funghi, speck" },
    { nome: "Pirata", prezzo: 7, ingredienti: "Pomodoro, mozzarella, tonno, cipolla, olive" },
    { nome: "Delicata", prezzo: 10, ingredienti: "Pomodoro, mozzarella, ricotta, prosciutto" },
    { nome: "Giovanni", prezzo: 8, ingredienti: "Pomodoro, mozzarella, prosciutto crudo, rucola" },
    { nome: "Perla di Campo", prezzo: 8, ingredienti: "Pomodoro, mozzarella, verdure miste" }
  ],

  "Pizze Bianche": [
    { nome: "Coccinella", prezzo: 7, ingredienti: "Mozzarella, pomodorini, rucola" },
    { nome: "Marily", prezzo: 7, ingredienti: "Mozzarella, prosciutto cotto, funghi" },
    { nome: "Mare e Monti", prezzo: 10, ingredienti: "Mozzarella, gamberetti, funghi, zucchine" },
    { nome: "Pizza Bresaola", prezzo: 10, ingredienti: "Mozzarella, bresaola, rucola, grana" },
    { nome: "Mitica", prezzo: 7, ingredienti: "Mozzarella, salsiccia, funghi" },
    { nome: "Pregiata", prezzo: 7, ingredienti: "Mozzarella, speck, provola" },
    { nome: "Romana", prezzo: 7, ingredienti: "Mozzarella, alici, capperi" },
    { nome: "Primavera", prezzo: 7, ingredienti: "Mozzarella, pomodorini, basilico" },
    { nome: "Dal Re", prezzo: 7, ingredienti: "Mozzarella, prosciutto crudo, grana" },
    { nome: "Tropeana", prezzo: 7, ingredienti: "Mozzarella, cipolla di Tropea" },
    { nome: "Crudaiola", prezzo: 8, ingredienti: "Mozzarella, pomodorini freschi, rucola" },
    { nome: "Caprese", prezzo: 10, ingredienti: "Mozzarella di bufala, pomodorini, basilico" },
    { nome: "Crudo", prezzo: 7, ingredienti: "Mozzarella, prosciutto crudo" },
    { nome: "Formaggi", prezzo: 7, ingredienti: "Mozzarella, formaggi misti" },
    { nome: "Regina", prezzo: 7, ingredienti: "Mozzarella, pomodorini, bufala" },
    { nome: "Dal Contadino", prezzo: 7, ingredienti: "Mozzarella, verdure grigliate" },
    { nome: "Gamberetti", prezzo: 8, ingredienti: "Mozzarella, gamberetti" },
    { nome: "Gamberetti e Zucchine", prezzo: 9, ingredienti: "Mozzarella, gamberetti, zucchine" },
    { nome: "Fantasia", prezzo: 7, ingredienti: "Mozzarella, fantasia dello chef" },
    { nome: "Calzone Pizza", prezzo: 8, ingredienti: "Mozzarella, prosciutto, funghi" },
    { nome: "Pizza alla Nutella", prezzo: 10, ingredienti: "Impasto pizza, Nutella" },
    { nome: "Margherita Integrale", prezzo: 7, ingredienti: "Impasto integrale, pomodoro, mozzarella" },
    { nome: "Pizza Integrale Farcita Salumi", prezzo: 8, ingredienti: "Impasto integrale, mozzarella, salumi" },
    { nome: "Pizza Integrale Farcita Verdure", prezzo: 9, ingredienti: "Impasto integrale, mozzarella, verdure" },
    { nome: "Pizza Integrale Farcita Specialità", prezzo: 10, ingredienti: "Impasto integrale, mozzarella, specialità del giorno" }
  ],

  "Pizze Speciali": [
    { nome: "Sofia", prezzo: 10, ingredienti: "Mozzarella, speck, funghi porcini" },
    { nome: "Mortacchio", prezzo: 10, ingredienti: "Mozzarella, mortadella, pistacchi" },
    { nome: "Tirolese", prezzo: 10, ingredienti: "Mozzarella, speck, scamorza" },
    { nome: "Tosca", prezzo: 10, ingredienti: "Mozzarella, gorgonzola, noci" },
    { nome: "Bufalotta", prezzo: 10, ingredienti: "Mozzarella di bufala, pomodorini, basilico" }
  ],

  "Bibite": [
    { nome: "Acqua Naturale 50 ml", prezzo: 1, ingredienti: "" },
    { nome: "Acqua Naturale 1 Lt", prezzo: 2, ingredienti: "" },
    { nome: "Acqua Gassata 50 ml", prezzo: 1, ingredienti: "" },
    { nome: "Acqua Gassata 1 Lt", prezzo: 2, ingredienti: "" },
    { nome: "Brasilena Piccola", prezzo: 1, ingredienti: "" },
    { nome: "Brasilena Grande", prezzo: 2, ingredienti: "" },
    { nome: "Coca Cola Lattina", prezzo: 2, ingredienti: "" },
    { nome: "Sprite Lattina", prezzo: 2, ingredienti: "" },
    { nome: "Fanta Lattina", prezzo: 2, ingredienti: "" },
    { nome: "Coca Cola in Vetro 33 Cl", prezzo: 2, ingredienti: "" },
    { nome: "Coca Cola in Vetro 1 Lt", prezzo: 3.5, ingredienti: "" },
    { nome: "Estathé Pesca", prezzo: 1.5, ingredienti: "" },
    { nome: "Estathé Limone", prezzo: 1.5, ingredienti: "" },
    { nome: "Amari Vari", prezzo: 3, ingredienti: "" },
    { nome: "Amaro Jefferson", prezzo: 4, ingredienti: "" }
  ],

  "Birre": [
    { nome: "Peroni 33 Cl", prezzo: 1.5, ingredienti: "" },
    { nome: "Heineken 33 Cl", prezzo: 2, ingredienti: "" },
    { nome: "Heineken 66 Cl", prezzo: 3, ingredienti: "" },
    { nome: "Beck's 33 Cl", prezzo: 2, ingredienti: "" },
    { nome: "Nastro Azzurro", prezzo: 2, ingredienti: "" },
    { nome: "Dreher Lemon", prezzo: 2, ingredienti: "" },
    { nome: "Birra Alla Spina Piccola", prezzo: 3, ingredienti: "" },
    { nome: "Birra Alla Spina Media", prezzo: 3.5, ingredienti: "" }
  ],

  "Birre Speciali": [
    { nome: "Leffe Rouge", prezzo: 4, ingredienti: "" },
    { nome: "Leffe Ambrée", prezzo: 4, ingredienti: "" },
    { nome: "Leffe Blonde", prezzo: 3.5, ingredienti: "" },
    { nome: "Ichnusa", prezzo: 3, ingredienti: "" },
    { nome: "Corona 33 Cl", prezzo: 3.5, ingredienti: "" },
    { nome: "Tennent's 33 Cl", prezzo: 3.5, ingredienti: "" },
    { nome: "Ceres 33 Cl", prezzo: 3.5, ingredienti: "" },
    { nome: "Moretti Rossa 33 Cl", prezzo: 3, ingredienti: "" },
    { nome: "Franziskaner Bionda", prezzo: 4, ingredienti: "" },
    { nome: "Franziskaner Rossa", prezzo: 4, ingredienti: "" }
  ],

  "Dessert": [
    { nome: "Sorbetto al Limone", prezzo: 3, ingredienti: "Sorbetto fresco al limone" },
    { nome: "Fetta di Torta Gelato Saint Honoré", prezzo: 3, ingredienti: "Torta gelato Saint Honoré" }
  ]
};

// Genera il menù dinamicamente
function generateMenu() {
  const main = document.getElementById("menu");

  for (const categoria in menuData) {
    const section = document.createElement("section");
    section.className = "menu-section";
    section.innerHTML = `<h2>${categoria}</h2>`;

    menuData[categoria].forEach(piatto => {
      const div = document.createElement("div");
      div.className = "item";
      div.onclick = () => toggleDetails(div);
      div.innerHTML = `
        <div class="item-header">
          <span class="item-name">${piatto.nome}</span>
          <span class="price">€${piatto.prezzo}</span>
        </div>
        <div class="details">${piatto.ingredienti || ""}</div>
      `;
      section.appendChild(div);
    });

    main.appendChild(section);
  }
}

// Genera subito il menù
document.addEventListener('DOMContentLoaded', generateMenu);
