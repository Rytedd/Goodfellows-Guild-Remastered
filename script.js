// 🎥 ADD VIDEOS HERE
const videos = [
    {
        file: "videos/guild-video.mp4",
        title: "The system was never designed for you to win."
    },
    {
        file: "videos/sample2.mp4",
        title: "Battle Highlights"
    }
];

// 🖼️ ADD IMAGES HERE
const images = [
    {
        file: "images/flag.jpg",
        title: "Our national flag! (subject to change)"
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
