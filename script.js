document.querySelectorAll('path').forEach(path => {
  path.classList.add('country');
});

const tooltip = document.getElementById('tooltip');
const countries = document.querySelectorAll('.country');

countries.forEach(country => {
  country.addEventListener('mouseover', () => {
    const title_country = country.getAttribute('title');
    const value_country = country.getAttribute('data-value');
    tooltip.innerHTML = `${title_country}<br><small>${value_country}</small>`;
    tooltip.style.display = 'block';
  });

  country.addEventListener('mousemove', (e) => {
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px'; 
  });

  country.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });
  if (country.getAttribute('data-value') == 10.0) {
    country.style.fill = 'black';
  }
});

document.querySelectorAll('path.region').forEach(path => {
  path.classList.add('region');
});

const regione = document.querySelectorAll('path.region');

regione.forEach(region => {
  region.addEventListener('mouseover', () => {
    console.log('Mouse over:', region);
    const title_region = region.getAttribute('title');
    const value_region = region.getAttribute('data-value')
    tooltip.innerHTML = `${title_region}<br><small>${value_region}</small>`;
    tooltip.style.display = 'block';
  });

  region.addEventListener('mousemove', (e) => {
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';
  });

  region.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });
});
