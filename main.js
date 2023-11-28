new Vue({
    el: '#app',
    template: `
      <div>
        <app-container>
          <app-header slot="header"></app-header>
          <app-list slot="list"></app-list>
          <app-form slot="form"></app-form>
        </app-container>
      </div>
    `
  });
  