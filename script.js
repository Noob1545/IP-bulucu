fetch('https://ipinfo.io/json')
  .then(response => {
    if (response.ok) {
      return response.json(); // Veriyi JSON formatına dönüştür
    }
    console.log(response);
    throw new Error('IP bilgisi alınamadı.');
  })
  .then(data => {
    const ipAddress = data.ip; // JSON verisinden IP adresini al
    document.getElementsByTagName("p")[0].textContent = ipAddress
  })
  .catch(error => {
    console.error('Hata:', error);
  });
