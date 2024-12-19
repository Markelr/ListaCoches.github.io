const { createApp } = Vue;

createApp({
  template: `
    <div class="car-list-container">
  <h1>Lista de Coches</h1>

  <div class="car-list">
    <div class="car-item" v-for="coche in paginatedcoches" :key="coche.id">
      <img :src="coche.imagen" :alt="coche.coche" class="car-image" />
      <div class="car-details">
        <h2 class="car-title">{{ coche.marca }} {{ coche.modelo }}</h2>
        <p class="car-info">
          Año: {{ coche.año }} | Precio: {{ coche.precio }}
        </p>
      </div>
    </div>
  </div>

  <div class="pagination-controls">
    <button @click="prevPage" :disabled="currentPage === 1" class="pagination-button">
      Anterior
    </button>
    <span class="pagination-info">
      Página {{ currentPage }} de {{ totalPages }}
    </span>
    <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-button">
      Siguiente
    </button>
  </div>
</div>


  `,
  data() {
    return {
      coches: [
        { id: 1, modelo: "Enzo", marca: "Ferrari", año: 2003, precio: 4000000, imagen: "img/ferrarienzo.webp" },
        { id: 2, modelo: "F40", marca: "Ferrari", año: 1987, precio: 800000, imagen: "img/Ferrarif40.webp" },
        { id: 3, modelo: "Diablo", marca: "Lamborghini", año: 1963 , precio: 230775, imagen: "img/lamborghiniDiablo.webp" },
        { id: 4, modelo: "Gallardo", marca: "Lamborghini", año: 2003 , precio: 108900, imagen: "img/lamborghinigallardo.webp" },
        { id: 5, modelo: "Urus", marca: "Lamborghini", año:  2017 , precio: 240294, imagen: "img/lamborghiniurus.webp" },
        { id: 6, modelo: "911", marca: "Porsche", año: 1964 , precio: 108900, imagen: "img/porsche911.webp" },
        { id: 7, modelo: "Carrera", marca: "Porsche", año:  1984  , precio: 174065	, imagen: "img/porschecarrera.webp" },
        { id: 8, modelo: "Gtr-r34 skyline", marca: "Nissan", año: 1999  , precio: 231.446	, imagen: "img/NissanGTR-R34Skyline.webp" },
        { id: 9, modelo: "M5", marca: "BMW", año:  1980   , precio: 163600, imagen: "img/bmwm5.webp" },
        { id: 10, modelo: "GT", marca: "Opel", año: "1968"  , precio:20000	, imagen: "img/opelgt.webp" },
        { id: 11, modelo: "Divo", marca: "Bugatti", año: 2018  , precio: 5900000	, imagen: "img/bugattidivo.webp" },
        { id: 12, modelo: "Huayra", marca: "Pagani", año: 2011  , precio: 3400000	, imagen: "img/paganihuayra.webp" },
        { id: 13, modelo: "R8", marca: "Audi", año: 2007, precio: 168500	, imagen: "img/audir8.webp" },
        { id: 14, modelo: "GTR", marca: "Nissan", año: 2007  , precio: 120000	, imagen: "img/nissangtr.webp" },
        { id: 15, modelo: "MX-5", marca: "Mazda", año: 1989  , precio: 13996	, imagen: "img/mazdamiata.webp" },
      ],
      currentPage: 1,
      itemsPerPage: 4,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.coches.length / this.itemsPerPage);
    },
    paginatedcoches() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.coches.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
}).mount('#app');
