const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Hola Vue',
    frutas: [
      {nombre: 'Manzana', cantidad: 3},
      {nombre: 'Pera', cantidad: 0},
      {nombre: 'Uva', cantidad: 5},
    ],
    nuevaFruta: '',
    total: 0
  },
  methods: {
    agregarFruta() {
      this.frutas.push({
        nombre: this.nuevaFruta, cantidad: 0
      });
      this.nuevaFruta = '';
    }
  },
  computed: {
    totalFrutas() {
      this.total = 0;
      for (fruta of this.frutas) {
        this.total += fruta.cantidad;
      }
      return this.total;
    }
  }
});