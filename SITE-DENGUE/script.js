let listaCasos = [];

function registrarCaso() {
  let nome = document.getElementById("nome").value;
  let endereco = document.getElementById("endereco").value;
  let obs = document.getElementById("obs").value;

  if (nome === "" || endereco === "") {
    alert("Preencha todos os campos!");
    return;
  }

  let caso = {
    nome: nome,
    endereco: endereco,
    observacoes: obs
  };

  listaCasos.push(caso);
  mostrarCasos();

  document.getElementById("nome").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("obs").value = "";
}

function mostrarCasos() {
  let area = document.getElementById("casos");
  area.innerHTML = "";

  listaCasos.forEach(function(caso) {
    area.innerHTML += "<p><strong>Paciente:</strong> " + caso.nome + "<br>" +
                      "<strong>Endereço:</strong> " + caso.endereco + "<br>" +
                      "<strong>Obs:</strong> " + caso.observacoes + "</p><hr>";
  });
}
