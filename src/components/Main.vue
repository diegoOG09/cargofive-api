<template>
  <main id="main">
    <h1 class="title">Consultar puertos</h1>
    <div class="search-input">
      <input
        v-model="search"
        v-on:keyup.enter="searchData"
        id="search-input"
        type="text"
        placeholder="Busca el nombre, pais o continente..."
      />
    </div>

    <div class="container">
      <table class="tg">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Continent</th>
            <th>Country</th>
            <th>Coordinates</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="port in countriesFilter" v-bind:key="port.id">
            <td>{{ port.id }}</td>
            <td>{{ port.name }}</td>
            <td>{{ port.continent }}</td>
            <td>{{ port.country }}</td>
            <td>{{ port.coordinates }}</td>
          </tr>
        </tbody>
      </table>

      <nav class="pagination" role="navigation" aria-label="pagination">
        <a class="pagination-previous" v-on:click="changePage(page - 1)"
          >Anterior</a
        >
        <ul class="pagination-list">
          <li>
            <a class="pagination-link is-current">{{ page }}</a>
          </li>
        </ul>
        <a class="pagination-next" v-on:click="changePage(page + 1)"
          >Siguiente</a
        >
      </nav>
    </div>
  </main>
</template>

<script>
document.querySelector("html").style.scrollBehavior = "smooth";
import axios from "axios";

export default {
  name: "App",
  data: function () {
    return {
      ports: [],
      page: 1,
      pages: 1,
      search: "",
    };
  },
  created() {
    this.fetch();
  },
  computed: {
    countriesFilter: function () {
      let search = this.search;
      return this.ports.filter((element) => {
        return (
          element.country.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
          element.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
          element.continent.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
      });
    },
  },
  methods: {
    fetch() {
      const params = {
        page: this.page,
        country: this.search,
      };
      let result = axios
        .get("https://fake-cargofive.herokuapp.com/api/ports", { params })
        .then((res) => {
          console.log(res);
          this.ports = res.data.data;
          this.pages = res.data.meta.last_page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changePage(page) {
      this.page = page <= 0 || page > this.pages ? this.page : page;
      this.fetch();
      window.scrollTo(0, 0);
    },
    searchData() {
      this.page = 1;
      this.fetch();
    },
  },
};
</script>

<style lang="scss">
#main {
  margin-top: 2rem;
  .consultarBtn {
    margin-bottom: 2rem;
    border: none;
    background-color: #1e6fe6;
    padding: 0.7rem 1rem;
    color: white;
    margin-top: 1.5rem;
    font-weight: 600;
    border-radius: 0 7px 7px 0;
    cursor: pointer;
  }
  .tg {
    color: #031b4e;
    max-width: 65%;
    margin: 0 auto;
    border: none;
    border-collapse: collapse;
    border-spacing: 0;
    white-space: nowrap;
    background-color: white;

    th {
      padding: 0.2rem 1rem 0.2rem 0.5rem;
      font-size: 14px;
    }
    th:nth-child(3) {
      padding-right: 1.5rem;
    }
    thead {
      background-color: #1e6fe6;
      color: white;
      text-align: left;
    }
    td {
      text-align: left;
      padding: 0.7rem 1rem 0.7rem 0.5rem;
      font-weight: 400;
      border-right: 1px solid #ececec;
      &:nth-child(2) {
        max-width: 350px;
      }
      &:nth-child(4) {
        width: 190px;
      }
    }
    tr:nth-child(even) {
      background: #f8f8f8;
    }
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2rem;

    .pagination-list {
      margin: 0;
      list-style: none;
    }
  }
  #search-input {
    border: 1px solid rgb(235, 235, 235);
    border-radius: 7px 7px 7px 7px;
    padding: 0.7rem 1rem;
    width: 18.5rem;
    margin: 1.5rem 0 2rem 0;
  }

  .pagination {
    margin-top: 3rem;
    padding-bottom: 3rem;
  }

  .pagination-previous {
    color: white;
    padding: 0.7rem 1rem;
    border-radius: 7px;
    background-color: #1e6fe6;
    cursor: pointer;
  }
  .pagination-next {
    color: white;
    padding: 0.7rem 1rem;
    border-radius: 7px;
    background-color: #1e6fe6;
    cursor: pointer;
  }
  .pagination-link {
    color: white;
    background-color: #1e6fe6;
    border-radius: 100%;
    padding: 0.5rem 1rem;
  }
}

//media queries
@media (max-width: 400px) {
  #main {
    .consultarBtn {
      border-radius: 7px 7px 7px 7px;
    }
    .title {
      margin-bottom: 1rem;
    }
    .tg {
      display: block;
      max-width: 90%;
      width: 100%;
      white-space: nowrap;
      overflow-x: auto;
    }
  }
}
</style>