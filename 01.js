const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Hola Vue',
    frutas: [
      {nombre: 'Manzana', cantidad: 3},
      {nombre: 'Pera', cantidad: 0},
      {nombre: 'Uva', cantidad: 5},
    ],
    nuevaFruta: ''
  },
  methods: {
    agregarFruta() {
      this.frutas.push({
        nombre: this.nuevaFruta, cantidad: 0
      });
    }
  }
});