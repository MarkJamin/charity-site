const tabLinks = document.querySelectorAll('.tab-link');
const tabPanels = document.querySelectorAll('.tab-panel');
const sidebarToggle = document.getElementById('sidebar-toggle');
const page = document.querySelector('.page');

function setActiveTab(targetId) {
  tabLinks.forEach((link) => {
    if (link.dataset.target) {
      link.classList.toggle('active', link.dataset.target === targetId);
    }
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle('active', panel.id === targetId);
  });
}

function updateSidebarToggleLabel() {
  if (!sidebarToggle) return;
  if (page.classList.contains('sidebar-hidden')) {
    sidebarToggle.textContent = 'Show sidebar';
  } else {
    sidebarToggle.textContent = 'Full view';
  }
}

function toggleSidebar() {
  page.classList.toggle('sidebar-hidden');
  updateSidebarToggleLabel();
}

tabLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const targetId = link.dataset.target;
    setActiveTab(targetId);
  });
});

if (sidebarToggle) {
  sidebarToggle.addEventListener('click', toggleSidebar);
}

if (tabLinks.length > 0) {
  setActiveTab(tabLinks[0].dataset.target);
}

updateSidebarToggleLabel();
