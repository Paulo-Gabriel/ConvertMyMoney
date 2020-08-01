const axios = require('axios')

let current_datetime = new Date()
let formatted_date = (current_datetime.getMonth() ) + "-" + current_datetime.getDate() +"-" + current_datetime.getFullYear()
console.log(formatted_date)



url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${formatted_date}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
axios.get(url).then(res => console.log(res.data.value[0].cotacaoVenda))