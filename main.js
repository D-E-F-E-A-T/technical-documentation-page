function openCloseNavBar() {
  var width = document.getElementById("navbar").style.width;
  if (width == "60px") {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("title-button").innerText = "JS Doc";
    document.getElementById("main-doc").style.marginLeft = "240px";
    collection = document.getElementsByClassName("nav-link");
    document.getElementById("nav-bar-header").style.borderBottom =
      "1px solid black";

    var links = [
      ["Introduction", "#Introduction"],
      ["What you should already know", "#What_you_should_already_know"],
      ["JavaScript and Java", "#JavaScript_and_Java"],
      ["Hello world", "#Hello_world"],
      ["Variables", "#Variables"],
      ["Declaring variables", "#Declaring_Variables"],
      ["Variable_scope", "#Variable_scope"],
      ["Global variables", "#Global_variables"]
    ];

    for (l of links) {
      var a = document.createElement("a");
      a.className = "nav-link";
      a.innerText = l[0];
      a.href = l[1];
      document.getElementById("navbar").appendChild(a);
    }
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.color = "black";
      collection[i].style.pointerEvents = "auto";
      collection[i].style.userSelect = "auto";
      collection[i].style.borderBottom = "1px solid black";
    }
  } else {
    // Remove bordas
    collection = document.getElementsByClassName("nav-link");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.border = "none";
    }

    // Remove elementos
    var navBar = document.getElementById("navbar");

    var navNodes = navBar.childNodes;
    console.log(navNodes);

    for (let i = 0; i < navNodes.length; i++) {
      if (navNodes[i].className == "nav-link") {
        navBar.removeChild(navNodes[i]);
        i = i - 1;
      }
    }
    document.getElementById("title-button").innerText = "JS";
    document.getElementById("navbar").style.width = "60px";
    document.getElementById("main-doc").style.marginLeft = "50px";
    document.getElementById("nav-bar-header").style.borderBottom = "none";
  }
}
