document.addEventListener('DOMContentLoaded', () => {
    const filterLinks = document.querySelectorAll('ul li a');
    const pics = document.querySelectorAll('.pic');

    filterLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.getAttribute('data-filter');

        pics.forEach(pic => {
          const category = pic.getAttribute('data-category');
          if (filter === 'All' || category === filter) {
            pic.style.display = 'block';
          } else {
            pic.style.display = 'none';
          }
        });
      });
    });
  });