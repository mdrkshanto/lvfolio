<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light justify-content-between">
    <ul class="navbar-nav">
      <li class="nav-item">
        <button class="btn shadow-none nav-link" data-widget="pushmenu" role="button"
          ><i class="fas fa-bars"></i
        ></button>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link :to="{name:'homePage'}" class="nav-link" :class="$route.name==='homePage'?'active':''">Home</router-link>
      </li>
    </ul>

    <ul class="navbar-nav">
      <li class="nav-item">
        <button class="btn shadow-none nav-link">Logout</button>
      </li>
    </ul>
  </nav>
</template>
