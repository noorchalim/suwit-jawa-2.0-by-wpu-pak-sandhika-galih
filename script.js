function getPilihanComputer(){
  const comp = Math.random();

  if(comp < 0.34) return "gajah";
  else if(comp >= 0.34 && comp < 0.67) return "orang";
    return "semut";

}

function getHasil(comp, player){

  // menentukan rules
  if( player == comp ) return "SERI";
  if ( player == "gajah") return (comp == "orang") ? "MENANG" : "KALAH";
  if ( player == "orang") return (comp == "gajah") ? "KALAH" : "MENANG";
  if (player == "semut") return ( comp == "orang") ? "KALAH" : "MENANG";
}

function putar(){
  const gmbrComputer = document.querySelector('.img-komputer');
  const gambar = ['gajah', 'semut', 'orang'];
  let i = 0;
  const waktuAwal = new Date().getTime();
  setInterval(function() {
    if(new Date().getTime() - waktuAwal > 1000){
      clearInterval;
      return;
    }
    gmbrComputer.setAttribute('src','img/'+gambar[i++]+'.png')
    if(i==gambar.length)i=0;
  }, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pl){
  pl.addEventListener('click', function(){
    const pilihanComputer = getPilihanComputer();
      const pilihanPlayer = pl.className;
      const hasil = getHasil(pilihanComputer,pilihanPlayer);

      putar();

      setTimeout(function(){
        console.log('comp : '+ pilihanComputer);
        console.log('player : '+ pilihanPlayer);
        console.log('hasil : '+ hasil);

        const gmbrComputer = document.querySelector('.img-komputer');
        gmbrComputer.setAttribute('src','img/' + pilihanComputer + '.png');

        const infonya = document.querySelector('.info');
        infonya.innerHTML = hasil;
      }, 1000)
  })
});










// const pyGajah = document.querySelector('.gajah');
// pyGajah.addEventListener('click', function(){
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pyGajah.className;
//   const hasil = getHasil(pilihanComputer,pilihanPlayer);
//   console.log('comp : '+pilihanComputer);
//   console.log('player : '+pilihanPlayer);
//   console.log('hasil : '+hasil);
//
//   const gmbrComputer = document.querySelector('.img-komputer');
//   gmbrComputer.setAttribute('src','img/' + pilihanComputer + '.png')
//
//   const infonya = document.querySelector('.info');
//   infonya.innerHTML = hasil;
//
// });
//
// const pyOrang = document.querySelector('.orang');
// pyOrang.addEventListener('click', function(){
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pyOrang.className;
//   const hasil = getHasil(pilihanComputer,pilihanPlayer);
//   console.log('comp : '+pilihanComputer);
//   console.log('player : '+pilihanPlayer);
//   console.log('hasil : '+hasil);
//
//   const gmbrComputer = document.querySelector('.img-komputer');
//   gmbrComputer.setAttribute('src','img/' + pilihanComputer + '.png')
//
//   const infonya = document.querySelector('.info');
//   infonya.innerHTML = hasil;
//
// });
//
// const pySemut = document.querySelector('.semut');
// pySemut.addEventListener('click', function(){
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pySemut.className;
//   const hasil = getHasil(pilihanComputer,pilihanPlayer);
//   console.log('comp : '+pilihanComputer);
//   console.log('player : '+pilihanPlayer);
//   console.log('hasil : '+hasil);
//
//   const gmbrComputer = document.querySelector('.img-komputer');
//   gmbrComputer.setAttribute('src','img/' + pilihanComputer + '.png')
//
//   const infonya = document.querySelector('.info');
//   infonya.innerHTML = hasil;
//
// });




















// akhir
