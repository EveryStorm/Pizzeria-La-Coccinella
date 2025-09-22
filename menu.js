function generateMenu() {
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
      { nome: "Arancino", prezzo: 1.5, ingredienti: "Riso, ragù, piselli" },
      { nome: "Arancino Nduja", prezzo: 2, ingredienti: "Riso, nduja, formaggio" },
      { nome: "Crocchette Patate", prezzo: 0.8, ingredienti: "Patate schiacciate e fritte" },
      { nome: "Crocchette Riso", prezzo: 0.8, ingredienti: "Riso e formaggio" },
      { nome: "Crocchette Carne", prezzo: 0.8, ingredienti: "Carne trita, pangrattato" },
      { nome: "Crocchette Salmone", prezzo: 0.9, ingredienti: "Salmone e formaggio" },
      { nome: "Patatine", prezzo: 2.5, ingredienti: "Patatine fritte" },
      { nome: "Patatine + Mozzarella", prezzo: 3, ingredienti: "Patatine fritte, mozzarella filante" },
      { nome: "Patatine + Salsiccia", prezzo: 3.5, ingredienti: "Patatine fritte, salsiccia" },
      { nome: "Patatine + Mozzarella + Salsiccia", prezzo: 4, ingredienti: "Patatine, mozzarella, salsiccia" },
      { nome: "Cotoletta di Pollo con Patatine", prezzo: 8, ingredienti: "Cotoletta di pollo fritta, patatine" }
    ],
    "Pizze Rosse": [
      { nome: "Casareccia", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Origano" },
      { nome: "Messicana", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Peperoni, Jalapeños" },
      { nome: "Vulcano", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Nduja, Peperoni" },
      { nome: "Parmigiana", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Melanzane, Parmigiano" },
      { nome: "Frutti di Mare", prezzo: 10, ingredienti: "Pomodoro, Mozzarella, Gamberetti, Calamari, Cozze" },
      { nome: "Americana", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Wurstel, Mais" },
      { nome: "Nduja", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Nduja Calabra" },
      { nome: "Tonno e Cipolla", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Tonno, Cipolla" },
      { nome: "Inglesina", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Uovo, Prosciutto" },
      { nome: "Boscaiola", prezzo: 8, ingredienti: "Pomodoro, Mozzarella, Funghi, Salsiccia" },
      { nome: "Capricciosa", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Prosciutto, Funghi, Carciofi" },
      { nome: "4 Stagioni", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Prosciutto, Funghi, Carciofi, Olive" },
      { nome: "4 Formaggi Rossa", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Gorgonzola, Parmigiano, Emmental" },
      { nome: "Margherita", prezzo: 6, ingredienti: "Pomodoro, Mozzarella, Basilico" },
      { nome: "Napoletana", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Acciughe, Capperi" },
      { nome: "Della Casa", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Prosciutto, Funghi" },
      { nome: "Calabrese", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Salame piccante" },
      { nome: "Viennese", prezzo: 8, ingredienti: "Pomodoro, Mozzarella, Wurstel, Funghi" },
      { nome: "Marinara", prezzo: 5, ingredienti: "Pomodoro, Aglio, Origano" },
      { nome: "Ortolana", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Verdure grigliate" },
      { nome: "Salsiccia e Rape", prezzo: 8, ingredienti: "Pomodoro, Mozzarella, Salsiccia, Rape" },
      { nome: "Provolona", prezzo: 8, ingredienti: "Pomodoro, Mozzarella, Provolone" },
      { nome: "Carbonara", prezzo: 8, ingredienti: "Pomodoro, Mozzarella, Uovo, Pancetta" },
      { nome: "Montanara", prezzo: 8, ingredienti: "Pomodoro, Mozzarella, Funghi, Salsiccia" },
      { nome: "Pirata", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Tonno, Peperoni" },
      { nome: "Delicata", prezzo: 10, ingredienti: "Pomodoro, Mozzarella, Prosciutto Crudo, Rucola" },
      { nome: "Giovanni", prezzo: 8, ingredienti: "Pomodoro, Mozzarella, Funghi, Prosciutto Cotto" },
      { nome: "Perla di Campo", prezzo: 8, ingredienti: "Pomodoro, Mozzarella, Funghi, Prosciutto Crudo" }
    ],
    "Pizze Bianche": [
      { nome: "Coccinella", prezzo: 7, ingredienti: "Mozzarella, Pomodorini, Rucola" },
      { nome: "Marily", prezzo: 7, ingredienti: "Mozzarella, Prosciutto Cotto, Funghi" },
      { nome: "Mare e Monti", prezzo: 10, ingredienti: "Mozzarella, Gamberetti, Funghi, Zucchine" },
      { nome: "Pizza Bresaola", prezzo: 10, ingredienti: "Mozzarella, Bresaola, Rucola, Grana" },
      { nome: "Mitica", prezzo: 7, ingredienti: "Mozzarella, Prosciutto Crudo, Funghi" },
      { nome: "Pregiata", prezzo: 7, ingredienti: "Mozzarella, Prosciutto, Funghi, Olive" },
      { nome: "Romana", prezzo: 7, ingredienti: "Mozzarella, Prosciutto Crudo, Pomodorini" },
      { nome: "Primavera", prezzo: 7, ingredienti: "Mozzarella, Verdure miste" },
      { nome: "Dal Re", prezzo: 7, ingredienti: "Mozzarella, Salame, Funghi" },
      { nome: "Tropeana", prezzo: 7, ingredienti: "Mozzarella, 'Nduja, Cipolla" },
      { nome: "Crudaiola", prezzo: 8, ingredienti: "Mozzarella, Pomodorini, Rucola, Grana" },
      { nome: "Caprese", prezzo: 10, ingredienti: "Mozzarella, Pomodoro, Basilico" },
      { nome: "Crudo", prezzo: 7, ingredienti: "Mozzarella, Prosciutto Crudo" },
      { nome: "Formaggi", prezzo: 7, ingredienti: "Mozzarella, Gorgonzola, Emmental, Parmigiano" },
      { nome: "Regina", prezzo: 7, ingredienti: "Mozzarella, Prosciutto Cotto, Funghi" },
      { nome: "Dal Contadino", prezzo: 7, ingredienti: "Mozzarella, Verdure miste" },
      { nome: "Gamberetti", prezzo: 8, ingredienti: "Mozzarella, Gamberetti, Zucchine" },
      { nome: "Gamberetti e Zucchine", prezzo: 9, ingredienti: "Mozzarella, Gamberetti, Zucchine" },
      { nome: "Fantasia", prezzo: 7, ingredienti: "Mozzarella, Verdure miste" },
      { nome: "Calzone Pizza", prezzo: 8, ingredienti: "Mozzarella, Prosciutto, Funghi" },
      { nome: "Pizza alla Nutella", prezzo: 10, ingredienti: "Nutella, zucchero a velo" },
      { nome: "Margherita Integrale", prezzo: 7, ingredienti: "Pomodoro, Mozzarella, Basilico" },
      { nome: "Pizza Integrale Farcita 1", prezzo: 8, ingredienti: "Mozzarella, Prosciutto, Funghi" },
      { nome: "Pizza Integrale Farcita 2", prezzo: 9, ingredienti: "Mozzarella, Salame, Funghi" },
      { nome: "Pizza Integrale Farcita 3", prezzo: 10, ingredienti: "Mozzarella, Verdure miste" }
    ],
    "Pizze Speciali": [
      { nome: "Sofia", prezzo: 10, ingredienti: "Mozzarella, Prosciutto Crudo, Funghi" },
      { nome: "Mortacchio", prezzo: 10, ingredienti: "Mozzarella, Nduja, Salsiccia" },
      { nome: "Tirolese", prezzo: 10, ingredienti: "Mozzarella, Speck, Funghi" },
      { nome: "Tosca", prezzo: 10, ingredienti: "Mozzarella, Gorgonzola, Noci" },
      { nome: "Bufalotta", prezzo: 10, ingredienti: "Mozzarella di Bufala, Pomodorini, Basilico" }
    ],
    "Bibite": [
      { nome: "Acqua Naturale 50ml", prezzo: 1, ingredienti: "" },
      { nome: "Acqua Naturale 1L", prezzo: 2, ingredienti: "" },
      { nome: "Acqua Gassata 50ml", prezzo: 1, ingredienti: "" },
      { nome: "Acqua Gassata 1L", prezzo: 2, ingredienti: "" },
      { nome: "Brasilena Piccola", prezzo: 1, ingredienti: "" },
      { nome: "Brasilena Grande", prezzo: 2, ingredienti: "" },
      { nome: "Coca Cola Lattina", prezzo: 2, ingredienti: "" },
      { nome: "Sprite Lattina", prezzo: 2, ingredienti: "" },
      { nome: "Fanta Lattina", prezzo: 2, ingredienti: "" },
      { nome: "Coca Cola in Vetro 33cl", prezzo: 2, ingredienti: "" },
      { nome: "Coca Cola in Vetro 1L", prezzo: 3.5, ingredienti: "" },
      { nome: "Estathé Pesca", prezzo: 1.5, ingredienti: "" },
      { nome: "Estathé Limone", prezzo: 1.5, ingredienti: "" },
      { nome: "Amari Vari", prezzo: 3, ingredienti: "" },
      { nome: "Amaro Jefferson", prezzo: 4, ingredienti: "" }
    ],
    "Birre": [
      { nome: "Peroni 33cl", prezzo: 1.5, ingredienti: "" },
      { nome: "Heineken 33cl", prezzo: 2, ingredienti: "" },
      { nome: "Heineken 66cl", prezzo: 3, ingredienti: "" },
      { nome: "Beck's 33cl", prezzo: 2, ingredienti: "" },
      { nome: "Nastro Azzurro", prezzo: 2, ingredienti: "" },
      { nome: "Dreher Lemon", prezzo: 2, ingredienti: "" },
      { nome: "Birra alla Spina Piccola", prezzo: 3, ingredienti: "" },
      { nome: "Birra alla Spina Media", prezzo: 3.5, ingredienti: "" },
      { nome: "Leffe Rouge", prezzo: 4, ingredienti: "" },
      { nome: "Leffe Ambrée", prezzo: 4, ingredienti: "" },
      { nome: "Leffe Blonde", prezzo: 3.5, ingredienti: "" },
      { nome: "Ichnusa", prezzo: 3, ingredienti: "" },
      { nome: "Corona 33cl", prezzo: 3.5, ingredienti: "" },
      { nome: "Tennent's 33cl", prezzo: 3.5, ingredienti: "" },
      { nome: "Ceres 33cl", prezzo: 3.5, ingredienti: "" },
      { nome: "Moretti Rossa 33cl", prezzo: 3, ingredienti: "" },
      { nome: "Franziskaner Bion", prezzo: 4, ingredienti: "" },
      { nome: "Franziskaner Rossa", prezzo: 4, ingredienti: "" }
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
