<template>
  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="index.html" class="logo">
              <h1>UNITEPC</h1>
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Search Start ***** -->
            <div class="search-input">
              <form id="search" action="#">
                <input type="text" placeholder="Buscar Libros" id='searchText' name="searchKeyword" onkeypress="handle" />
                <i class="fa fa-search"></i>
              </form>
            </div>
            <!-- ***** Search Start ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section"><a href="#top" class="active">Inicio</a></li>
              <li class="scroll-to-section"><a href="#services">Servicios</a></li>
              <li class="scroll-to-section"><a href="#courses">Virtual</a></li>
              <li class="scroll-to-section"><a href="#events">Horario</a></li>
            </ul>
            <a class='menu-trigger'>
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>