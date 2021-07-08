class Service {

  constructor(element) {
      this.classes = {
        ctx: element,
        item: 'js-service',
        title: 'js-title',
        description: 'js-description'
      }
      this.state = {
        itemActive: 'services__item--active',
        titleTransform: 'services__title--transform',
        descriptionActive: 'services__description--active'
      }
      //DOM selecting context
      this.ctx = document.querySelector(`.${this.classes.ctx}`);
  }
  init = () => {
    //DOM selecting all items
    this.items = this.ctx.querySelectorAll(`.${this.classes.item}`);
    this.setEventHandler();
  }
  setEventHandler = () => {
    const component = this;
    this.items.forEach((item, i) => {
      ['mouseover','click'].forEach( event => item.addEventListener(event,() => component.showDescription(item)));
      item.addEventListener('mouseout',() => component.hideDescription(item));
    });
  }
  showDescription = (item) => {
    item.classList.add(this.state.itemActive);
    item.querySelector(`.${this.classes.title}`).classList.add(this.state.titleTransform);
    item.querySelector(`.${this.classes.description}`).classList.add(this.state.descriptionActive);
  }
  hideDescription = (item) => {
    item.classList.remove(this.state.itemActive);
    item.querySelector(`.${this.classes.title}`).classList.remove(this.state.titleTransform);
    item.querySelector(`.${this.classes.description}`).classList.remove(this.state.descriptionActive);
  }

}
const service = new Service('js-services');
const service2 = new Service('js-services2');
service.init();
service2.init();
