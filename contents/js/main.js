const button = document.querySelector('#button'); 
button.addEventListener("click", hamOne);

function hamOne() {
  const html = document.querySelector("html");
  const current = html.getAttribute("data-color-scheme");

  // Toggle giữa 'light' và 'dark'
  const newScheme = current === 'light' ? 'dark' : 'light';
  html.setAttribute("data-color-scheme", newScheme);

  const images = document.querySelectorAll(".avatar"); // class chung
    images.forEach(img => {
      // const newAvatar = images ==='/image/avatar.jpg' ? '/image/avatar2.jpg' : '/image/avatar.jpg';
       img.src = img.src.includes('image/avatar.jpg') ? 'image/avatar2.jpg' : 'image/avatar.jpg';
    });
}


const tabs = document.querySelectorAll('.inner-item');
    const contents = document.querySelectorAll('.inner-item-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.dataset.tab;
        const targetContent = document.getElementById(targetId);
        const isActive = tab.classList.contains('active');

        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        if (!isActive) {
          tab.classList.add('active');
          targetContent.classList.add('active');
        }
      });
    });


  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  const closeMenu = document.getElementById('close-menu');

  menuToggle.addEventListener('click', () => {
    nav.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
    nav.classList.remove('active');
  });


window.addEventListener('scroll', function() {
  const navbar = document.getElementById('header-taskbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } 
});

const filterItems = document.querySelectorAll("[data-filter-item]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const selectItem = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]"); // Đã sửa từ "selecct"

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    const category = item.dataset.category.toLowerCase();
    const show = selectedValue === "all" || selectedValue === category;
    item.classList.toggle("active", show);
  });
};

// Lưu nút cuối cùng đã click (desktop)
let lastClickedBtn = document.querySelector("[data-filter-btn].active");

filterBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

    // Đồng bộ dropdown (mobile)
    if (selectValue) {
      selectValue.innerText = this.innerText;
    }
  });
});

// Dropdown cho mobile
selectItem.forEach(item => {
  item.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    filterFunc(selectedValue);

    if (selectValue) {
      selectValue.innerText = this.innerText;
    }

    // Cập nhật nút filter (desktop)
    filterBtn.forEach(btn => {
      const isMatch = btn.innerText.toLowerCase() === selectedValue;
      btn.classList.toggle("active", isMatch);
      if (isMatch) lastClickedBtn = btn;
    });
  });
});


const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });