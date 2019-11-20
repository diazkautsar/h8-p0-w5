function totalDigitRekursif(angka) {
    // you can only write your code here!
    var string = angka.toString()
    // var total = 0
    // for (var i = 0; i < string.length; i++) {
    //     total = total + Number(string[i])
    // }
    // console.log(total)
    
    if (string.length === 0) {
        return Number(angka);
    } else {
        var tampung = Number(string[0]);
        string = string.slice(1);
        return tampung + totalDigitRekursif(string)
    }

  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5