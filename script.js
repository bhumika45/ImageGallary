const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentIndex = 0;

galleryItems.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentIndex = index;
    showLightbox(image.src);
  });
});

closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

function showLightbox(src) {
  lightbox.style.display = 'block';
  lightboxImg.src = src;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
}

// Filtering logic
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    button.classList.add('active');
    const category = button.getAttribute('data-filter');
    filterGallery(category);
  });
});

function filterGallery(category) {
  document.querySelectorAll('.gallery-item').forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
