//contador
function animateCounter(id, target, duration) {
  const el = document.getElementById(id);
  let start = 0;
  const increment = target / (duration / 16);
  let animation;

  function update() {
    start += increment;
    if (start < target) {
      el.textContent = Math.floor(start);
      animation = requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  }

  update();

  return () => {
    cancelAnimationFrame(animation);
    el.textContent = 0;
  };
}

let resetAnimations;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Inicia animaciones y guarda función para cancelarlas
        resetAnimations = [
          animateCounter("counter1", 120, 2500),
          animateCounter("counter2", 345, 2500),
          animateCounter("counter3", 42, 2500),
        ];
      } else {
        // Reinicia números al salir de la vista
        if (resetAnimations) {
          resetAnimations.forEach((reset) => reset());
        }
      }
    });
  },
  { threshold: 0.6 }
);

observer.observe(document.getElementById("stats-section"));

const header = document.querySelector("header");
