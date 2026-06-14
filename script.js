// 🎥 ADD VIDEOS HERE
const videos = [
    {
        file: "videos/sample1.mp4",
        title: "Guild Event 1"
    },
    {
        file: "videos/sample2.mp4",
        title: "Battle Highlights"
    }
];

// 🖼️ ADD IMAGES HERE
const images = [
    {
        file: "images/img1.jpg",
        title: "Base Design"
    },
    {
        file: "images/img2.jpg",
        title: "Team Screenshot"
    }
];

// LOAD GALLERY (ONLY ON GALLERY PAGE)
window.onload = () => {
    const videoContainer = document.getElementById("videoGallery");
    const imageContainer = document.getElementById("imageGallery");

    if (videoContainer) {
        videos.forEach(v => {
            videoContainer.innerHTML += `
                <div class="media-card">
                    <video src="${v.file}" controls></video>
                    <p>${v.title}</p>
                </div>
            `;
        });
    }

    if (imageContainer) {
        images.forEach(i => {
            imageContainer.innerHTML += `
                <div class="media-card">
                    <img src="${i.file}" />
                    <p>${i.title}</p>
                </div>
            `;
        });
    }
};
