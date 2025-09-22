function generateMenu() {
  const menuData = {
    "Antipasti": [
      { nome: "Antipasto Casereccio", prezzo: 8, ingredienti: "Salumi, formaggi, sottaceti" },
      { nome: "Crudo e Mozzarella", prezzo: 10, ingredienti: "Prosciutto crudo, mozzarella fresca" },
      { nome: "Insalata di Mare", prezzo: 10, ingredienti: "Gamberetti, calamari, cozze con olio e limone" },
      { nome: "Tagliata di Vitello", prezzo: 13, ingredienti: "Vitello grigliato con rucola e parmigiano" }
    ],
    "Contorni": [
      { nome: "Insaltona", prezzo: 6, ingredienti: "Insalata mista con pomodorini e condimento" },
      { nome: "Insalata Verde", prezzo: 3, ingredienti: "Lattuga, olio e sale" },
      { nome: "Bruschette", prezzo: 5, ingredienti: "Pane tostato con pomodoro e basilico" }
    ],
    "Frittura": [
      { nome: "Calzone Fritto", prezzo: 2, ingredienti: "Calzone fritto con ripieno di mozzarella e salumi" },
      { nome: "Hot Dog", prezzo: 3, ingredienti: "Panino con wurstel e ketchup" },
      { nome: "Arancino", prezzo: 1.5, ingredienti: "Riso, ragù e piselli" },
      { nome: "Arancino Nduja", prezzo: 2, ingredienti: "Riso, nduja, formaggio" }
    ],
    "Pizze Rosse": [
      { nome: "Margherita", prezzo: 6, ingredienti: "Pomodoro, Mozzarella, Basilico" },
      { nome: "Messicana", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Peperoni, Jalapeños" },
      { nome: "Vulcano", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Nduja, Peperoni" },
      { nome: "Frutti di Mare", prezzo: 10, ingredienti: "Pomodoro, Mozzarella, Gamberetti, Calamari, Cozze" }
    ],
    "Bibite": [
      { nome: "Acqua Naturale 50ml", prezzo: 1, ingredienti: "" },
      { nome: "Coca Cola Lattina", prezzo: 2, ingredienti: "" }
    ],
    "Dessert": [
      { nome: "Sorbetto al Limone", prezzo: 3, ingredienti: "" },
      { nome: "Fetta di Torta Gelato Saint Honoré", prezzo: 3, ingredienti: "" }
    ]
  };

  const main = document.getElementById("menu");

  for (const categoria in menuData) {
    const section = document.createElement("section");
    section.className = "menu-section";
    section.innerHTML = `<h2>${categoria}</h2>`;

    menuData[categoria].forEach(piatto => {
      const div = document.createElement("div");
      div.className = "item";
      div.onclick = () => {
        const details = div.querySelector(".details");
        details.style.display = details.style.display === "block" ? "none" : "block";
      };
      div.innerHTML = `
        <div class="item-header">
          <span class="item-name">${piatto.nome}</span>
          <span class="price">€${piatto.prezzo}</span>
        </div>
        <div class="details">${piatto.ingredienti}</div>
      `;
      section.appendChild(div);
    });

    main.appendChild(section);
  }
}
