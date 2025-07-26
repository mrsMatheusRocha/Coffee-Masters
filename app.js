import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/Details.page.js';
import { OrderPage } from './components/OrderPage.js';
import ProductItem from './components/ProductItem.js';
import CartItem from './components/CartItem.js';

window.app = {}
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  app.router.init();
  loadData();
});

window.addEventListener("appcartchange", () => {
  const badge = document.getElementById("badge");
  const quantity = app.store.cart.reduce((acc,item) => acc + item.quantity, 0);
  badge.textContent = quantity;
  badge.hidden = quantity == 0;
})