function getchoiceKomputer() {
  const comp = Math.random();
  
  if( comp < 0.34 ) return "gunting";
  if( comp >= 0.34 && comp < 0.67 ) return "kertas";
  return "batu";
}

function getResults(comp, player) {
  // menentukan rules
  if (player == comp) return "SERI";
  if(player == "gunting") return ( comp == "kertas" ) ? "MENANG" : "KALAH"; // ternary
  if(player == "kertas") return ( comp == "gunting" ) ? "KALAH" : "MENANG";
  if(player == "batu") return ( comp == "kertas" ) ? "KALAH" : "MENANG";
}

function spin() {
  const imgComputer = document.querySelector('.computerImage');
  const gambar = ['gunting','batu','kertas'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function() {
      if( new Date().getTime() - waktuMulai > 1000) {
          clearInterval;
          return;
      }
      imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
      if( i == gambar.length ) i = 0;
  }, 100)
}


const choice = document.querySelectorAll('li img')
choice.forEach(function(pil) {
  pil.addEventListener('click', () => {
      const choiceKomputer = getchoiceKomputer();
      const choicePlayer = pil.className;
      const hasil = getResults(choiceKomputer, choicePlayer);

      spin();

      setTimeout(() => {
      const imgComputer = document.querySelector('.computerImage');
      imgComputer.setAttribute('src', 'img/' + choiceKomputer + '.png');

      const results = document.querySelector('.results');
      results.innerHTML = hasil;                
      }, 1001);
  })
})




// const pGajah = document.querySelector('.gunting');
// pGajah.addEventListener('click', function() {
//     const choiceKomputer = getchoiceKomputer();
//     const choicePlayer = pGajah.className;
//     const hasil = getResults(choiceKomputer, choicePlayer);

//     const imgComputer = document.querySelector('.img-komputer');
  // imgComputer.setAttribute('src', 'img/' + choiceKomputer + '.png');

//     const results = document.querySelector('.results');
//     results.innerHTML = hasil;

// })

// const pOrang = document.querySelector('.kertas');
// pOrang.addEventListener('click', function() {
//     const choiceKomputer = getchoiceKomputer();
//     const choicePlayer = pOrang.className;
//     const hasil = getResults(choiceKomputer, choicePlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + choiceKomputer + '.png');

//     const results = document.querySelector('.results');
//     results.innerHTML = hasil;

// })

// const pkertas = document.querySelector('.batu');
// pkertas.addEventListener('click', function() {
//     const choiceKomputer = getchoiceKomputer();
//     const choicePlayer = pSemut.className;
//     const hasil = getResults(choiceKomputer, choicePlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + choiceKomputer + '.png');

//     const results = document.querySelector('.results');
//     results.innerHTML = hasil;

// })