// 🎥 ADD VIDEOS HERE
const videos = [
    { file: "videos/guild-video.mp4", title: "The system was never designed for you to win." },
    { file: "videos/sample2.mp4", title: "Memorial" }
];


// 🖼️ ADD IMAGES HERE
const images = [
    { file: "images/flag.png", title: "Our national flag! (subject to change)" },
    { file: "images/img2.jpg", title: "Team Screenshot" }
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

// ===== MEMBERS DATA (EDIT HERE) =====
const members = [
    {
        name: "@rytedd",
        rank: "Founder",
        img: "images/member1.jpg"
    },
    {
        name: "@depressedorange",
        rank: "Co-Founder",
        img: "images/member2.jpg"
    },
    {
        name: "@itskl4us",
        rank: "Co-Founder",
        img: "images/member3.jpg"
    }
];

// ===== LOAD MEMBERS =====
window.addEventListener("load", () => {

    const container = document.getElementById("membersGrid");

    if (container) {
        members.forEach(m => {
            container.innerHTML += `
                <div class="member-card">
                    <img src="${m.img}" />
                    <div class="member-name">${m.name}</div>
                    <div class="member-rank">${m.rank}</div>
                </div>
            `;
        });
    }
});
