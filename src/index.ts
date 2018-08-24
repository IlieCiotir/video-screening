
function createFromConfig() {
    const videos = document.getElementById('videos') as HTMLInputElement;
    const overlay = document.getElementById('image') as HTMLInputElement;
    createOverlay(overlay);
    createVideoElements(videos);
    document.getElementById('config').remove();
}

function createVideoElements(videos: HTMLInputElement) {
    const holder = document.getElementById('holder');
    if (holder) {
        for (let i = 0; i < 4; i++) {
            const source = videos.files.item(i % videos.files.length);
            const video = document.createElement('video');
            video.src = window.URL.createObjectURL(source);
            video.autoplay = true;
            video.loop = true;
            const videoHolder = document.createElement('div');
            videoHolder.classList.add('video-holder');
            videoHolder.appendChild(video);
            holder.appendChild(videoHolder);
        }
    }
}

function createOverlay(overlay: HTMLInputElement) {
    const holder = document.getElementById('overlay');
    const image = document.createElement('img');
    image.src = window.URL.createObjectURL(overlay.files.item(0));
    holder.appendChild(image);
}

function updateVideos(input) {
    console.log(input.value);
}
