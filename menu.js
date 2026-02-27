const categoryHeader = document.getElementById('categoryHeader');
const categoryList = document.getElementById('categoryList');
const categoryItems = document.querySelectorAll('.categoryItem');


categoryHeader.addEventListener('click', function() {
    this.classList.toggle('active');
    categoryList.classList.toggle('active');
});


categoryItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
        

        categoryItems.forEach(cat => cat.classList.remove('active'));
        
        this.classList.add('active');
    
        const category = this.textContent.trim();
        console.log('Selected:', category);
    });
});