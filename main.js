let linhas = ''

document.addEventListener('submit', function(e) {
  e.preventDefault()

  const inputNomeContato = document.getElementById('nome-contato')
  const inputNumeroContato = document.getElementById('numero-contato')

  let linha = '<tr>'
  linha += `<td>${inputNomeContato.value}</td>`
  linha += `<td>${inputNumeroContato.value}</td>`
  linha += '</tr>'

  linhas += linha

  const corpoTabela = document.querySelector('tbody')
  corpoTabela.innerHTML = linhas

  console.log(inputNomeContato.value)
  console.log(inputNumeroContato.value)
})