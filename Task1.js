const galleryItems = document.querySelectorAll('.gallery-item img');

// Select lightbox and lightbox image
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Add click event to each gallery image
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
    });
});
closeBtn.addEventListener('click',function(e){
    lightbox.style.display='none';
});
lightbox.addEventListener('click',function(e){
    if(e.target!==lightboxImg){
        lightbox.style.display='none';
    }
});