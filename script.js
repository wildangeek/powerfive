Number.prototype.powerFive = function () {
    let ini = this;
    let hasil = Math.pow(ini, 5);
    return hasil;
  };
  
  let angka = 4;
  console.log(angka.powerFive());