document.addEventListener("DOMContentLoaded", function () {
    const slideshow = document.querySelector(".slideshow");
    let currentIndex = 0;

    function showDevice(index) {
        const transformValue = `translateX(-${index * 100}%)`;
        slideshow.style.transform = transformValue;
    }

    // Function to advance to the next device
    function nextDevice() {
        currentIndex = (currentIndex + 1) % slideshow.children.length;
        showDevice(currentIndex);
    }

    // Function to go back to the previous device
    function prevDevice() {
        currentIndex = (currentIndex - 1 + slideshow.children.length) % slideshow.children.length;
        showDevice(currentIndex);
    }

    // Set an interval to automatically advance the slideshow
    setInterval(nextDevice, 5000); // Change 5000 to the desired interval in milliseconds
});
