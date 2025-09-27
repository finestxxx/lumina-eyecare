// Grab elements
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar on click
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
  // Select all elements that should be animated
  const animatedElements = document.querySelectorAll(
    ".slide-from-top"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add 'visible' or 'active' class to trigger CSS animations/transitions
          // This covers all animation types used in the CSS
          entry.target.classList.add("visible");
        } else {
          // Optional: Remove classes to replay animation on scroll up
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the element is visible
    }
  );

  // Observe each animated element
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});
