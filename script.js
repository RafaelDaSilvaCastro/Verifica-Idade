function Verificar(){
  var data = new Date()
  var ano  = data.getFullYear()
  
  var formAno = document.getElementById('txtano')
  //var res     = document.querySelector('div#res')
  var res = document.getElementById('res')
  if(formAno.value.length == 0 || formAno.value > ano){
    alert('Verifique os dados e tente novamente!')

  }
  else{
    var formSexo = document.getElementsByName('radsex')
    var idade    = ano - formAno.value
    var img      = document.createElement('img')
    img.setAttribute('id', 'foto') 
    var genero   = ''

    if(formSexo[0].checked){
      genero = 'M'

      if(idade >= 0 && idade < 10){
        //crianca
        img.setAttribute('src', 'assets/CriançaHomem.jpg')
      }else if(idade < 21){
        //jovem
        img.setAttribute('src', 'assets/JovemHomem.jpg')
      }else if(idade < 50){
        //adulto 
        img.setAttribute('src', 'assets/AdultoHomem.jpg')
      }else{
        //idoso
        img.setAttribute('src', 'assets/IdosoHomem.jpg')
        
      }

    }else if(formSexo[1].checked){
      genero = 'M'

      if(idade >= 0 && idade < 10){
        //crianca
        img.setAttribute('src', 'assets/CriancaMulher.jpg')
      }else if(idade < 21){
        //jovem
        img.setAttribute('src', 'assets/JovemMulher.jpg')
      }else if(idade < 50){
        //adulto 
        img.setAttribute('src', 'assets/AdultoMulher.jpg')
      }else{
        //idoso
        img.setAttribute('src', 'assets/IdosoMulher.jpg')
        
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Sua idade é aproximadamente ${idade} anos...<br><br>`
    res.appendChild(img)
  }

}


