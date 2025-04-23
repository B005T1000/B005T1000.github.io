document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('country-list');
  
    fetch('https://restcountries.com/v3.1/all')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Sort by GDP per capita (simulated via population for demo)
        const poorCountries = data
          .filter(c => c.population < 5000000)
          .sort((a, b) => a.population - b.population)
          .slice(0, 5);
  
        list.innerHTML = '';
        poorCountries.forEach(country => {
          const li = document.createElement('li');
          li.textContent = `${country.name.common} — Population: ${country.population.toLocaleString()}`;
          list.appendChild(li);
        });
      })
      .catch(err => {
        console.error(err);
        list.innerHTML = '<li>Sorry, we couldn’t load the global insight data at this time.</li>';
      });
  });
  