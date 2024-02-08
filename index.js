function toggleReadMore(button) {
    var section = button.closest('.section');
    var moreContent = section.querySelector('.moreContent');

    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
    } else {
        moreContent.style.display = "none";
    }
}