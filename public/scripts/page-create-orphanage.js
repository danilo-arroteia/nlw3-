//create map
const map = L.map("mapid").setView([-27.2203382, -49.6428627], 15);

// create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//Add photo Field

function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector("#images");

  // pegar o container para duplicr .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // realizar o clone da ultima imagem adicionada (duplicação)
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verificar se o campo está vazia, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  //limpar o campo antes de adicionar ao container de imagens
  input.value = "";

  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    // limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo
  span.parentNode.remove();
}

// Select yes or no

function toggleSelect() {
  //retirar a classe .active ( dos botões )
  document.querySelectorAll(".button-select button").forEach((button) => {
    button.classList.remove("active");
  });

  //colocar a classe .active nesse botão clicado
  const button = event.currentTarget;
  button.classList.add("active");

  //atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name = "open_on_weekends"]');

  input.value = button.dataset.value;
}

function validate(event) {
  const lat = document.querySelector("[name=lat]");
  const lng = document.querySelector("[name=lng]");

  if (lat.value == "") {
    event.preventDefault();
    alert("Selecione um local no mapa !");
  } else if (lng.value == "") {
    event.preventDefault();
    alert("Selecione um local no mapa !");
  }
}
