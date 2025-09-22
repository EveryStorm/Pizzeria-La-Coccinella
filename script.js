const main = document.getElementById("menu");
const searchInput = document.getElementById("search");

// Funzione che genera il menù
function generaMenu() {
  main.innerHTML = ""; // pulisco prima

  for (const categoria in menuData) {
    const section = document.createElement("section");
    section.className = "menu-section";
    section.innerHTML = `<h2>${categoria}</h2>`;

    menuData[categoria].forEach(piatto => {
      const div = document.createElement("div");
      div.className = "item";

      // click per mostrare dettagli
      div.onclick = () => {
        const details = div.querySelector(".details");
        details.style.display = details.style.display === "block" ? "none" : "block";
      };

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

// Funzione di ricerca
function filtraMenu() {
  const query = searchInput.value.toLowerCase();
  const items = document.querySelectorAll(".item");

  items.forEach(item => {
    const nome = item.querySelector(".item-name").textContent.toLowerCase();
    const dettagli = item.querySelector(".details").textContent.toLowerCase();

    if (nome.includes(query) || dettagli.includes(query)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

// Avvio
generaMenu();
searchInput.addEventListener("input", filtraMenu);