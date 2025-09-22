const menuData = {
  "Antipasti": [
    { nome: "Antipasto Casereccio", prezzo: 8, ingredienti: "Salumi, formaggi, sottaceti" },
    { nome: "Crudo e Mozzarella", prezzo: 10, ingredienti: "Prosciutto crudo, mozzarella fresca" },
    { nome: "Insalata di Mare", prezzo: 10, ingredienti: "Gamberetti, calamari, cozze, olio e limone" },
    { nome: "Tagliata di Vitello", prezzo: 13, ingredienti: "Vitello grigliato, rucola, parmigiano" }
  ],
  "Contorni": [
    { nome: "Insaltona", prezzo: 6, ingredienti: "Insalata mista con pomodorini" },
    { nome: "Insalata Verde", prezzo: 3, ingredienti: "Lattuga, olio e sale" },
    { nome: "Bruschette", prezzo: 5, ingredienti: "Pane tostato con pomodoro e basilico" }
  ],
  "Frittura": [
    { nome: "Calzone Fritto", prezzo: 2, ingredienti: "Calzone fritto ripieno di mozzarella e salumi" },
    { nome: "Hot Dog", prezzo: 3, ingredienti: "Panino con wurstel e ketchup" },
    { nome: "Arancino", prezzo: 1.5, ingredienti: "Riso, ragù, piselli" }
  ],
  "Pizze Rosse": [
    { nome: "Margherita", prezzo: 6, ingredienti: "Pomodoro, Mozzarella, Basilico" },
    { nome: "Messicana", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Peperoni, Jalapeños" },
    { nome: "Vulcano", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Nduja, Peperoni" }
    // aggiungi tutte le altre pizze rosse qui
  ]
  // puoi continuare con Pizze Bianche, Pizze Speciali, Bibite, Birre, Dessert
};

function generateMenu() {
  const main = document.getElementById("menu");

  for (const categoria in menuData) {
    // Sezione principale
    const section = document.createElement("section");
    section.className = "menu-section";

    // Titolo cliccabile della sezione
    const title = document.createElement("h2");
    title.className = "section-title";
    title.textContent = categoria;
    section.appendChild(title);

    // Contenuto della sezione (piatti), nascosto di default
    const content = document.createElement("div");
    content.className = "section-content";
    content.style.display = "none";

    menuData[categoria].forEach(piatto => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "item";

      itemDiv.innerHTML = `
        <div class="item-header">
          <span class="item-name">${piatto.nome}</span>
          <span class="price">€${piatto.prezzo}</span>
        </div>
        <div class="details">${piatto.ingredienti}</div>
      `;

      // Ingredienti a comparsa cliccando sul piatto
      const header = itemDiv.querySelector(".item-header");
      const details = itemDiv.querySelector(".details");
      details.style.display = "none";
      header.addEventListener("click", () => {
        details.style.display = details.style.display === "block" ? "none" : "block";
      });

      content.appendChild(itemDiv);
    });

    section.appendChild(content);

    // Collapsible sezione cliccando sul titolo
    title.addEventListener("click", () => {
      content.style.display = content.style.display === "block" ? "none" : "block";
    });

    main.appendChild(section);
  }
}

// Chiama la funzione per generare il menu
document.addEventListener("DOMContentLoaded", generateMenu);
