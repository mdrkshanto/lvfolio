<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-black sticky-top py-0">
    <router-link :to="{name:'fHome'}" class="navbar-brand">Md Rezaul Karim Shanto</router-link>
    <button
      class="navbar-toggler shadow-none"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target=".mainMenu"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse mainMenu justify-content-end">
      <ul class="navbar-nav align-items-center">
        <li class="nav-item">
          <router-link :to="{name:'fHome'}" class="nav-link" :class="$route.name === 'fHome'?'active':''">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'fAbout'}" class="nav-link" :class="$route.name === 'fAbout'?'active':''">About</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'fResume'}" class="nav-link" :class="$route.name === 'fResume'?'active':''">Resume</router-link>
        </li>
        <li class="nav-item">
          <a href="skills.html" class="nav-link">Skills</a>
        </li>
        <li class="nav-item">
          <a href="contact.html" class="nav-link">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
