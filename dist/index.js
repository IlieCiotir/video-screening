function createFromConfig() {
    var videos = document.getElementById('videos');
    var overlay = document.getElementById('image');
    createOverlay(overlay);
    createVideoElements(videos);
    document.getElementById('config').remove();
}
function createVideoElements(videos) {
    var holder = document.getElementById('holder');
    if (holder) {
        for (var i = 0; i < 4; i++) {
            var source = videos.files.item(i % videos.files.length);
            var video = document.createElement('video');
            video.src = window.URL.createObjectURL(source);
            video.autoplay = true;
            video.loop = true;
            var videoHolder = document.createElement('div');
            videoHolder.classList.add('video-holder');
            videoHolder.appendChild(video);
            holder.appendChild(videoHolder);
        }
    }
}
function createOverlay(overlay) {
    var holder = document.getElementById('overlay');
    var image = document.createElement('img');
    image.src = window.URL.createObjectURL(overlay.files.item(0));
    holder.appendChild(image);
}
function updateVideos(input) {
    console.log(input.value);
}
