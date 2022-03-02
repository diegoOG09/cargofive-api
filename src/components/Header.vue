<template>
  <header id="header">
    <nav id="nav">
      <div class="logo">
        <img src="logo.png" alt="Logo de cargofive" />
      </div>
      <div class="menu">
        <li><a href="#">Benefits</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Log In</a></li>
        <li><a id="navBtn" href="#">Free Trial</a></li>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      toggle: document.querySelector(".menu"),
    };
  },
};
</script>

<style lang="scss">
#header {
  background-color: white;
  #nav {
    max-width: 65%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .menu {
      display: flex;
      color: #031b4e;
      font-size: 17px;
      font-weight: 500;
      list-style: none;
      column-gap: 2.5rem;

      a {
        text-decoration: none;
        color: #031b4e;
      }

      #navBtn {
        text-decoration: none;
        color: white;
        background-color: #1e6fe6;
        padding: 0.7rem 1rem;
        border-radius: 4px;
        font-weight: 700;
      }
    }
  }
}

//media queries
@media (max-width: 400px) {
  #nav {
    padding-bottom: 1rem;
    flex-direction: column;
    .menu {
      flex-direction: column;

      li {
        margin-bottom: 0.8rem;
        &:nth-child(4) {
          margin-bottom: 2rem;
        }
      }
    }
  }
}
</style>