const redes = ["Facebook", "Twitter", "Instagram",
"TikTok", "YouTube"];

redes.map(item => item.toLowerCase())
  .filter(item => item.length > 7)
  .forEach(item => console.log(item));