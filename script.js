let phrases = [
  { text: 'в домике', image: 'https://sun9-72.userapi.com/s/v1/ig2/ohvTbRJAHGHmDM9yLGsi3UD0VriUyvLqTEVO1U16aUUAdzbnzzLFKohYVuPShfwCTgKeT0a_j_mqILemdOOPgSwB.jpg?quality=95&as=32x33,48x50,72x74,108x111,160x165,240x248,360x371,480x495,540x557,640x660,720x743,1080x1114,1280x1321,1440x1486,2481x2560&from=bu&cs=2481x0' },
  { text: 'на полу', image: 'https://sun9-5.userapi.com/s/v1/ig2/WqVBYQI90QaXNdp_doNTrnuo1JSQqhZ1gDfZEKH-4SGsIpU-5PyCW8zOnjpobnOYJ1xxJnup5vIRD25szHyRl8Uu.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280&from=bu&cs=1280x0' },
  { text: 'в коробке', image: 'https://sun9-9.userapi.com/s/v1/ig2/NAAv0QPZWF36WDYbWmR37Ke4RVSdz9Fq58bGxylNHXZes6LxwI8LU3vPLnA8w7L28OCxqFRhRIog6xPWItPCrdEt.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,1920x1920&from=bu&cs=1920x0' },
  { text: 'на кроватке', image: 'https://sun9-5.userapi.com/s/v1/ig2/O3FnxbGoPFPN3GncX0iGqAtjmTv01JfsNBPriRyMw2xaqnKxWZG4frHFy66jyy65JC_f8g7EbLh92rP-Dvu8jl1L.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280&from=bu&cs=1280x0' },
  { text: 'на баскетбольной площадке', image: 'https://sun9-71.userapi.com/s/v1/ig2/tyfRM6ucR44Z5rb26fuPsnmn7Wdy4aChhu3kf_wDhcNqKBeVmVoSTD--X1Ma2UuXkEfCPg0VJi1oaHEFMosjy7kZ.jpg?quality=95&as=32x27,48x41,72x62,108x93,160x138,240x206,360x309,480x413,540x464,640x550,720x619,783x673&from=bu&cs=783x0' },
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src', randomElement.image);

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
}
