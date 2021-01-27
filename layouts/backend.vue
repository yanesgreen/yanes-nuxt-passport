<template>
  <div id="backend">
    <!-- wrapper -->
    <div class="wrapper" :class="{ extrapadding: isOpen }">
      <!-- header -->
      <header id="header" class="header" :class="{ extrapadding: isOpen }">
        <div class="header__toggle" @click="toggleSideNav">
          <i
            id="header-toggle"
            class="bx bx-menu"
            :class="{ 'bx-menu': !isOpen, 'bx-x': isOpen }"
          ></i>
        </div>
        <div class="text-uppercase font-weight-bold">
          Hi, {{ this.$auth.user.name }}
        </div>
      </header>
      <!-- sidenav -->
      <div id="sidenav" class="sidenav" :class="{ show: isOpen }">
        <nav class="nav">
          <!-- logo + links group -->
          <div>
            <!-- nav logo -->
            <a href="#" class="nav__logo">
              <i class="bx bx-layer nav__logo-icon"></i>
              <span class="nav__logo-name">MyApp</span>
            </a>
            <!-- nav list -->
            <div class="nav__list">
              <!-- link -->
              <nuxt-link :to="{name: 'home'}" class="nav__link">
                <i class="bx bx-grid-alt nav__link-icon"></i>
                <span class="nav__link-name">Dashboard</span>
              </nuxt-link>
              <!-- link -->
              <nuxt-link :to="{name: 'users'}" class="nav__link">
                <i class="bx bx-user nav__icon"></i>
                <span class="nav__link-name">Users</span>
              </nuxt-link>
              <!-- link -->
              <nuxt-link :to="{name: 'products'}" class="nav__link ">
                <i class='bx bxs-basket nav__link-icon'></i>
                <span class="nav__link-name">Products</span>
              </nuxt-link>
            </div>
          </div>
          <!-- logout group -->
          <div>
            <!-- link logout -->
            <a @click.prevent="logout" href="" class="nav__link">
              <i class="bx bx-log-out nav__link-icon"></i>
              <span class="nav__link-name">Logout</span>
            </a>
          </div>
        </nav>
      </div>
      <!-- main content -->
      <main class="py-3">
        <div class="container-fluid">
          <Nuxt/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    name: "backend",
    data() {
      return {
        user: null,
        isOpen: false
      }
    },
    methods: {
      toggleSideNav() {
        this.isOpen = !this.isOpen;
      },
      async logout() {
        await this.$auth.logout().then(() => this.$toast.global.logout())
      }
    },
  }
</script>

<style>
  @import "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css";

  #backend {
    --header-height: 3rem;
    --nav-width: 68px;
    --first-color: #4723d9;
    --first-color-light: #afa5d9;
    --white-color: #f7f6fb;
    --z-fixed: 100;
    width: 100%;
    height: 100%;
  }

  #backend .wrapper {
    position: relative;
    margin: var(--header-height) 0 0 0;
    padding: 0 1rem;
    transition: 0.5s;
  }

  #backend a {
    text-decoration: none;
  }

  #backend .title {
    font-size: 2em;
  }

  #backend .header {
    width: 100%;
    height: var(--header-height);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    background-color: var(--white-color);
    z-index: var(--z-fixed);
    transition: 0.5s;
  }

  #backend .header .header__toggle {
    color: var(--first-color);
    font-size: 1.5rem;
    cursor: pointer;
  }

  #backend .header .header__image {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
  }

  #backend .header .header__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  #backend .sidenav {
    position: fixed;
    top: 0;
    left: -30%;
    width: var(--nav-width);
    height: 100vh;
    background-color: var(--first-color);
    padding: 0.5rem 1rem 0 0;
    transition: 0.5s;
    z-index: var(--z-fixed);
  }

  #backend .sidenav .nav {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }

  #backend .sidenav .nav .nav__link:last-child {
    margin-top: auto;
  }

  #backend .sidenav .nav .nav__logo,
  #backend .sidenav .nav .nav__link {
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    column-gap: 1rem;
    padding: 0.5rem 0 0.5rem 1.5rem;
    margin-bottom: 2rem;
  }

  #backend .sidenav .nav .nav__logo .nav__logo-icon {
    font-size: 1.25rem;
    color: var(--white-color);
  }

  #backend .sidenav .nav .nav__logo .nav__logo-name {
    color: var(--white-color);
    font-weight: 700;
  }

  #backend .sidenav .nav .nav__link {
    position: relative;
    color: var(--first-color-light);
    margin-bottom: 1.5rem;
    transition: 0.3s;
  }

  #backend .sidenav .nav .nav__link::before {
    content: "";
    position: absolute;
    left: 0;
    width: 2px;
    height: 32px;
    background-color: var(--white-color);
    opacity: 0;
    transition: 0.3s;
  }

  #backend .sidenav .nav .nav__link:hover {
    color: var(--white-color);
  }

  #backend .sidenav .nav .nav__link:hover::before {
    opacity: 1;
  }

  #backend .sidenav .nav .nav__link .nav__link-icon {
    font-size: 1.2rem;
  }

  /* dynamic class start here */
  #backend .sidenav.show {
    left: 0;
  }

  #backend .wrapper.extrapadding,
  #backend .header.extrapadding {
    padding-left: calc(var(--nav-width) + 1rem);
  }

  #backend .sidenav .nav .nav__link.active {
    color: var(--white-color);
  }

  #backend .sidenav .nav .nav__link.active::before {
    content: "";
    position: absolute;
    left: 0;
    width: 2px;
    height: 32px;
    background-color: var(--white-color);
  }

  /* media queries */
  @media screen and (min-width: 768px) {
    #backend .wrapper {
      margin: calc(var(--header-height) + 1rem) 0 0 0;
      padding-left: calc(var(--nav-width) + 2rem);
    }

    #backend .header {
      height: calc(var(--header-height) + 1rem);
      padding: 0 2rem 0 calc(var(--nav-width) + 2rem);
    }

    #backend .header .header__image {
      width: 40px;
      height: 40px;
    }

    #backend .header .header__image img {
      width: 45px;
    }

    #backend .sidenav {
      left: 0;
      padding: 1rem 1rem 0 0;
    }

    /* dynamic class start here */
    #backend .sidenav.show {
      width: calc(var(--nav-width) + 156px);
    }

    #backend .wrapper.extrapadding,
    #backend .header.extrapadding {
      padding-left: calc(var(--nav-width) + 188px);
    }
  }
</style>



