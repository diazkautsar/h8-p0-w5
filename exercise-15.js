function makanTerusRekursif(waktu) {
    // you can only write your code here!
    // var count = 0
    // for (var i = waktu; i > 0; i -= 15) {
    //     if (i > 0) {
    //         count++
    //     }
    // }
    // console.log(count)
    var pesan = 0
    if (waktu === 0) {
      return 0
    } else if (waktu > 0 && waktu < 15) {
      return 1
    } else {
      pesan += 1
      return pesan + makanTerusRekursif(waktu - 15)
    }
  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0