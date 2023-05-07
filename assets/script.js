initializeslider();

function initializeslider() {
  const nextbutton = document.querySelector('#slider #next');
  const previousbutton = document.querySelector('#slider #previous');

  const allImages = Array.from(document.querySelectorAll('#slider #image'));

  let state = {
    image: 0,
  };

  function send(event) {
    const actives = Array.from(
      document.querySelectorAll('#slider [data-active]')
    );

    Array.from(actives).forEach(active =>
      active.removeAttribute('data-active')
    );

    switch (event) {
      case 'Previous':
        state.image--;
        break;
      case 'Next':
        state.image++;
        break;
      default:
        state.image = +event;
        break;
    }

    var arrayLength = allImages.length;

    state.image = Math.max(0, Math.min(state.image, arrayLength - 1));

    Array.from(
      document.querySelectorAll(`#slider [data-key ="${state.image}"]`)
    ).forEach(el => {
      el.setAttribute('data-active', true);
    });
  }

  nextbutton.addEventListener('click', () => {
    if (state.image >= 5) {
      send(0);
    } else {
      send('Next');
    }
  });

  previousbutton.addEventListener('click', () => {
    send('Previous');
  });

  const buttons = Array.from(document.querySelectorAll('#slider #stat'));

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      send(button.dataset.key);
    });
  });

  send(0);

  setInterval(function () {
    if (state.image >= 5) {
      send(0);
    } else {
      send('Next');
    }
  }, 4000);
}
