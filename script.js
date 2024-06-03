
document.querySelectorAll('path').forEach(path => {
  path.classList.add('country');
});

const tooltip = document.getElementById('tooltip');
const countries = document.querySelectorAll('.country');

countries.forEach(country => {
  country.addEventListener('mouseover', () => {
    const title = country.getAttribute('title');
    const value = country.getAttribute('data-value');
    tooltip.innerHTML = `${title}<br><small>${value}</small>`;
    tooltip.style.display = 'block';
  });

  country.addEventListener('mousemove', (e) => {
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px'; 
  });

  country.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });
});
