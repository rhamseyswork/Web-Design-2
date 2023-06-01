function showRadioSelectBlock(elementId, enable) {
    const element = document.getElementById(elementId);

    if (enable) {
        element.disabled = false;
    } else {
        element.disabled = true;
    }
}

function showBlock(elementId, enable) {
    const element = document.getElementById(elementId);

    if (enable) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
