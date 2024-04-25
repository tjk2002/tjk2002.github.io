window.onload = function() {
    const galleryContainer = document.getElementById('gallery-container');
    const gallery = JSON.parse(sessionStorage.getItem('gallery')) || [];

    gallery.forEach(dataUrl => {
        const img = new Image();
        img.src = dataUrl;
        img.alt = "Canvas Artwork";
        galleryContainer.appendChild(img);
    });

    if (gallery.length === 0) {
        galleryContainer.innerHTML = '<p>No images saved in this session.</p>';
    }
};
