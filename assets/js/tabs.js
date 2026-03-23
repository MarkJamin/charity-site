const tabLinks = document.querySelectorAll('.tab-link');
const tabPanels = document.querySelectorAll('.tab-panel');

function setActiveTab(targetId) {
  tabLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.target === targetId);
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle('active', panel.id === targetId);
  });
}

tabLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const targetId = link.dataset.target;
    setActiveTab(targetId);
  });
});

if (tabLinks.length > 0) {
  setActiveTab(tabLinks[0].dataset.target);
}
