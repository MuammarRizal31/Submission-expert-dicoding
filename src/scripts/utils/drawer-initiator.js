const DrawerInititor = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (e) => {
      this._toggleDrawer(e, drawer);
    });

    content.addEventListener('click', (e) => {
      this._closeDrawer(e, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('nav-itemss');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('nav-itemss');
  },
};

export default DrawerInititor;
