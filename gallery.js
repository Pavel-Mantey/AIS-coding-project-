const tabs = document.querySelectorAll('.tab');
const pages = document.querySelectorAll('.page');

tabs.forEach(clickedTab => {
    clickedTab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('current'));
        clickedTab.classList.add('current');

        // 2. Hide all gallery pages by removing the 'active' class
        pages.forEach(page => page.classList.remove('active'));

        // 3. Find the target page ID from data-target and make it visible
        const targetId = clickedTab.getAttribute('data-target');
        const targetPage = document.getElementById(targetId);
        targetPage.classList.add('active');
    });
});

const viewButtons = document.querySelectorAll('.view-more');

viewButtons.forEach(btn =>{
    btn.addEventListener('click',()=>{
        const currentSection = btn.closest('.page')
        const hiddenCols = currentSection.querySelectorAll('.col3, .col4');
        const isHidden = hiddenCols[0].classList.contains('hidden');

        hiddenCols.forEach(col =>{
            if(isHidden){
                col.classList.remove('hidden');
                btn.textContent = 'View Less';
            }
            else{
                col.classList.add('hidden');
                btn.textContent = 'View More';
            }
            
        })
        

    })
})



