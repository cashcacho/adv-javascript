getFactBtn.addEventListener('click', () => {
    fetch('https://api.api-ninjas.com/v1/cryptoprice?symbol=LTCBTC')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  