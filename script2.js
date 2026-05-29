 // page navigation
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('.nav-links li a');
  function showPage(pageId) {
    pages.forEach(page => page.classList.remove('active-page'));
    const activePg = document.getElementById(pageId);
    if(activePg) activePg.classList.add('active-page');
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('data-page');
      if(linkPage === pageId) link.classList.add('active');
      else link.classList.remove('active');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = link.getAttribute('data-page');
      if(pageId) showPage(pageId);
    });
  });
  // Admission Portal - generate index number
  const admissionForm = document.getElementById('admissionForm');
  const indexResultDiv = document.getElementById('indexResult');
  if(admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const childName = document.getElementById('childName').value.trim();
      if(!childName) return alert('Please enter child name');
      const randomNum = Math.floor(Math.random() * 90000) + 10000;
      const examYear = new Date().getFullYear();
      const indexNumber = `AIS/ENT/${examYear}/${randomNum}`;
      indexResultDiv.innerHTML = `<div class="index-number-card"><i class="fas fa-id-card"></i> Entrance Exam Index Number: <strong style="font-size:1.4rem;">${indexNumber}</strong><br>Save this number. Exam details will be sent to ${document.getElementById('email').value}.<br><small>Present this on exam day.</small></div>`;
      // Optionally reset form? Not resetting but clear after? keep as reference
      admissionForm.reset();
      setTimeout(() => {
        indexResultDiv.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }
  // Quick contact demo
  const contactQuick = document.getElementById('contactQuick');
  if(contactQuick) {
    contactQuick.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Your message has been received. We will reply within 48 hours.');
      contactQuick.reset();
    });
  }
  // set default home if needed
  const logo = document.querySelector('.logo');
  if(logo) logo.addEventListener('click', () => showPage('home'));
