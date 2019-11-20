function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var str = angka.toString()
    var total = 1
    for (var i = 0; i < str.length; i++) {
        if (str.length === 1) {
            return angka
        } else if (str.length > 1) {
            total *= Number(str[i])
        }
    }
    return kaliTerusRekursif(total)
    // return total
    // console.log(strSinggah)
    // console.log(str)
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6