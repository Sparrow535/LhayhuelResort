document.getElementById("see-more-btn").addEventListener("click", function () {
    var moreContent = document.getElementById("more-content");
    var toggleIcon = document.getElementById("toggle-icon");
    
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        toggleIcon.classList.remove("ti-angle-down");
        toggleIcon.classList.add("ti-angle-up");
    } else {
        moreContent.style.display = "none";
        toggleIcon.classList.remove("ti-angle-up");
        toggleIcon.classList.add("ti-angle-down");
    }
});