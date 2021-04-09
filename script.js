//filter items by category
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("canHide");
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("is-hidden");
    if (x[i].className.indexOf(c) > -1) {
      x[i].classList.remove("is-hidden");
    }
  }
}

//search bar
const searchBar = document.getElementById("searchBar");
const mobileSearch = document.getElementsByClassName(
  "mobile-search"
)[0];
const itemList = document.getElementsByClassName("item-name");
const itemNames = [];
for (i = 0; i < itemList.length; i++) {
  itemNames.push(itemList[i].innerHTML.toLowerCase());
}

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  //const matches = itemNames.filter(s => s.includes(searchString));
  for (i = 0; i < itemList.length; i++) {
    if (
      itemList[i].innerHTML
        .toLowerCase()
        .includes(searchString.toLowerCase()) == false
    ) {
      itemList[i].parentElement.classList.add("is-hidden");
    } else {
      itemList[i].parentElement.classList.remove("is-hidden");
    }
  }
  if (searchString == "") {
    for (i = 0; i < itemList.length; i++) {
      itemList[i].parentElement.classList.remove("is-hidden");
    }
  }
});

mobileSearch.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  //const matches = itemNames.filter(s => s.includes(searchString));
  for (i = 0; i < itemList.length; i++) {
    if (
      itemList[i].innerHTML
        .toLowerCase()
        .includes(searchString.toLowerCase()) == false
    ) {
      itemList[i].parentElement.classList.add("is-hidden");
    } else {
      itemList[i].parentElement.classList.remove("is-hidden");
    }
  }
  if (searchString == "") {
    for (i = 0; i < itemList.length; i++) {
      itemList[i].parentElement.classList.remove("is-hidden");
    }
  }
});

function activate(e) {
  var x = document.getElementsByClassName("canHide");
  var tag = document.getElementsByClassName("tagg");

  if (e.classList.contains("activeCat")) {
    e.classList.remove("activeCat");
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("is-hidden");
    }
  } else {
    for (i = 0; i < x.length; i++) {
      tag[i].classList.remove("activeCat");
    }
    e.classList.add("activeCat");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

//donation modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
