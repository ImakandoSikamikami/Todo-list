import { createElement } from "../framework/render";


function createTaskBoardComponentTemplate() {
    return (
        `<section class="taskboard">
        </section>`
      );
}

export default class TaskBoardComponent {
  get template() {
    return createTaskBoardComponentTemplate();
  }


   get element() {
     if (!this.element) {
       this.element = createElement(this.getTemplate());
     }

     (this.element)
     return this.element;
   }


  removeElement() {
    this.element = null;
  }
}
