function changeVocals (str) {
    //code di sini
    var hasil = ``

    for (var i = 0; i < str.length; i++) {
        if (str[i] === `A`) {
            hasil += `B`
        } else if (str[i] === `I`) {
            hasil += `J`
        } else if (str[i] === `U`) {
            hasil += `V`
        } else if (str[i] === `E`) {
            hasil += `F`
        } else if (str[i] === `O`) {
            hasil += `P`
        } else if (str[i] === `a`) {
            hasil += `b`
        } else if (str[i] === `i`) {
            hasil += `j`
        } else if (str[i] === `u`) {
            hasil += `v`
        } else if (str[i] === `e`) {
            hasil += `f`
        } else if (str[i] === `o`) {
            hasil += `p`
        } else {
            hasil += str[i]
        }
    }
    str = hasil
    return str;
  }
  
  function reverseWord (str) {
    //code di sini
    var balik = ``;
    for (var i = str.length-1; i >= 0; i--) {
        balik += str[i]
    }
    // console.log(balik)
    str = balik
    return balik
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var berubah = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            berubah += str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            berubah += str[i].toUpperCase();
        }
    }
    str = berubah
    return str
  }
  
  function removeSpaces (str) {
    //code di sini
    var spasi = `` 
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ` `) {
            spasi += str[i]
        }
    }
    str = spasi
    return str
  }
  
  function passwordGenerator (name) {
    //code di sini
    if (name.length >= 5){
        var pertama = changeVocals(name);
        //   console.log(pertama)
          var kedua = reverseWord(pertama);
        //   console.log(kedua)
          var ketiga = setLowerUpperCase(kedua);
        //   console.log(ketiga)
          var keempat = removeSpaces(ketiga);
        //   console.log(keempat)
      } else {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
      }
      return keempat
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

