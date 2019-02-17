"use strict";

var dropdownBtns = document.getElementsByClassName("btn--expand");
var i;

for (i = 0; i < dropdownBtns.length; i++) {
  dropdownBtns[i].addEventListener("click", function() {
    if (this.classList.contains("btn-expand--active")) {
      this.classList.toggle("btn-expand--active");
      this.childNodes[0].classList.remove("fa-chevron-down");
      this.childNodes[0].classList.add("fa-chevron-left");
    } else {
      this.classList.toggle("btn-expand--active");
      this.childNodes[0].classList.remove("fa-chevron-left");
      this.childNodes[0].classList.add("fa-chevron-down");
    }

    let dropPanel = this.parentNode.parentNode.nextElementSibling;
    dropPanel.classList.toggle("contact-dropdown--active");

    if (dropPanel.style.maxHeight) {
      dropPanel.style.maxHeight = null;
    } else {
      dropPanel.style.maxHeight = dropPanel.scrollHeight + "px";
    }
  });
}
