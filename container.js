Vue.component('app-container', {
    template: `
      <div class="container">
        <slot name="header"></slot>
        <slot name="list"></slot>
        <slot name="form"></slot>
      </div>
    `
  });
  