Vue.component('app-form', {
    template: `
      <div class="component">
        <h2>Formulario</h2>
        <form>
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name">
          <br>
          <label for="email">Correo:</label>
          <input type="email" id="email" name="email">
          <br>
          <div class="space"></div> <!-- Espacio vertical -->
          <button type="submit" class="center-button">Enviar</button>
        </form>
      </div>
    `
  });
  