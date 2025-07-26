const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach(a => {
      a.addEventListener("click", event => {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        Router.go(href);
      });
    });
    Router.go(location.pathname);
  },

  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, '', route);
    }
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("menu-page");
        break;
      case "/order":
        pageElement = document.createElement("order-page");
        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("details-page");
          pageElement.dataset.productId = route.substring(route.lastIndexOf("-") + 1);
        }
        break;
    }
    if (pageElement) {
      document.querySelector("main").innerHTML = " ";
      document.querySelector("main").appendChild(pageElement);
    } else {
      document.querySelector("main").innerHTML = "Ooups, 404!";
    }

    window.scrollX = 0;
  }
}

export default Router;