const button = document.querySelector('#button'); 
button.addEventListener("click", hamOne);

function hamOne() {
  const html = document.querySelector("html");
  const current = html.getAttribute("data-color-scheme");

  // Toggle giữa 'light' và 'dark'
  const newScheme = current === 'light' ? 'dark' : 'light';
  html.setAttribute("data-color-scheme", newScheme);
  // document.querySelectorAll(".avatar").src = "/image/avatar2.jpg";

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





