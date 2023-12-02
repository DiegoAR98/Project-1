document.addEventListener('DOMContentLoaded', function() {
    var apiYTContainer = document.getElementById('api-yt');
    if (apiYTContainer) {
        var iframe = document.createElement('iframe');
        iframe.width = '560';
        iframe.height = '315';
        iframe.src = 'https://www.youtube.com/embed/mJNjksvmd9c';
        iframe.title = 'YouTube video player';
        iframe.frameborder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        apiYTContainer.appendChild(iframe);
    }
});    