<template>
<!-- Services -->
  <div class="services section" id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="service in services" :key="service.id">
          <div class="service-item">
            <div class="icon">
              <img :src="service.img" :alt="service.alt">
            </div>
            <div class="main-content">
              <h4>{{ service.name }}</h4>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- End Services -->
  <section class="section courses" id="courses" >
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="section-heading">
            <h6>Biblioteca Virtual</h6>
            <h2>Enlaces Bibliotecas Virtuales</h2>
          </div>
        </div>
      </div>
      <ul class="event_filter">
        <li>
          <a class="is_active" href="#!" data-filter="*">Mostrar Todos</a>
        </li>
        <li>
          <a href="#!" data-filter=".u">Unitepc</a>
        </li>
        <li>
          <a href="#!" data-filter=".n">Nacionales</a>
        </li>
        <li>
          <a href="#!" data-filter=".i">Internacionales</a>
        </li>
      </ul>
      <div class="row event_box">
        <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 u">
          <div class="events_item">
            <div class="thumb">
              <a href="#" target="_blank"><img src="../assets/images/course-01.jpg" alt=""></a>
              <span class="category">UNITEPC</span>
              <span class="price"><h6><em>#</em>1</h6></span>
            </div>
            <div class="down-content">
              <span class="author">Catalogo de Libros de la Biblioteca La Amistad</span>
              <h4>Lil Dbi Web</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6  u">
          <div class="events_item">
            <div class="thumb">
              <a href="https://unitepc.edu.bo/biblioteca/" target="_blank"><img src="../assets/images/course-02.jpg" alt=""></a>
              <span class="category">UNITEPC</span>
              <span class="price"><h6><em>#</em>2</h6></span>
            </div>
            <div class="down-content">
              <span class="author">Catalogo de Libros de la Biblioteca Sede Central</span>
              <h4>Biblioteca Virtual UNITEPC</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6  u">
          <div class="events_item">
            <div class="thumb">
              <a href="https://unitepc.edu.bo/biblioteca/" target="_blank"><img src="../assets/images/course-02.jpg" alt=""></a>
              <span class="category">UNITEPC</span>
              <span class="price"><h6><em>#</em>3</h6></span>
            </div>
            <div class="down-content">
              <span class="author">Revista oficial para el área de salud de la Universidad Técnica Privada Cosmos, sección de difusión científica y tecnológica, que inició sus publicaciones, en enero del 2016.</span>
              <h4>Revista Científica de Salud</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6  u">
          <div class="events_item">
            <div class="thumb">
              <a href="https://unitepc.edu.bo/biblioteca/" target="_blank"><img src="../assets/images/course-03.jpg" alt=""></a>
              <span class="category">UNITEPC</span>
              <span class="price"><h6><em>#</em>4</h6></span>
            </div>
            <div class="down-content">
              <span class="author">Sitio de difusión científica, tecnológica e innovación, que inició sus publicaciones, en enero del 2022.</span>
              <h4>Revista Científica de salud de la Amazonia</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6  u">
          <div class="events_item">
            <div class="thumb">
              <a href="https://unitepc.edu.bo/biblioteca/" target="_blank"><img src="../assets/images/course-05.jpg" alt=""></a>
              <span class="category">UNITEPC</span>
              <span class="price"><h6><em>#</em>5</h6></span>
            </div>
            <div class="down-content">
              <span class="author">Aquí podrás compartir y encontrar apuntes para todas las carreras</span>
              <h4>Central de Apuntes</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6  u">
          <div class="events_item">
            <div class="thumb">
              <a href="https://unitepc.edu.bo/biblioteca/" target="_blank"><img src="../assets/images/course-05.jpg" alt=""></a>
              <span class="category">UNITEPC</span>
              <span class="price"><h6><em>#</em>6</h6></span>
            </div>
            <div class="down-content">
              <span class="author">Aquí podrás encontrar contenidos de trabajos de grado como ser proyectos, tesis, articulos, etc.</span>
              <h4>Repositorio UNITEPC</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="section fun-facts">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="wrapper">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="counter">
                  <h2 class="timer count-title count-number" data-to="150" data-speed="1000"></h2>
                   <p class="count-text ">Happy Students</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="counter">
                  <h2 class="timer count-title count-number" data-to="804" data-speed="1000"></h2>
                  <p class="count-text ">Course Hours</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="counter">
                  <h2 class="timer count-title count-number" data-to="50" data-speed="1000"></h2>
                  <p class="count-text ">Employed Students</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="counter end">
                  <h2 class="timer count-title count-number" data-to="15" data-speed="1000"></h2>
                  <p class="count-text ">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section events" id="events">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="section-heading">
            <h6>Schedule</h6>
            <h2>Upcoming Events</h2>
          </div>
        </div>
        <div class="col-lg-12 col-md-6">
          <div class="item">
            <div class="row">
              <div class="col-lg-3">
                <div class="image">
                  <img src="assets/images/event-01.jpg" alt="">
                </div>
              </div>
              <div class="col-lg-9">
                <ul>
                  <li>
                    <span class="category">Web Design</span>
                    <h4>UI Best Practices</h4>
                  </li>
                  <li>
                    <span>Date:</span>
                    <h6>16 Feb 2036</h6>
                  </li>
                  <li>
                    <span>Duration:</span>
                    <h6>22 Hours</h6>
                  </li>
                  <li>
                    <span>Price:</span>
                    <h6>$120</h6>
                  </li>
                </ul>
                <a href="#"><i class="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-6">
          <div class="item">
            <div class="row">
              <div class="col-lg-3">
                <div class="image">
                  <img src="../assets/images/event-02.jpg" alt="">
                </div>
              </div>
              <div class="col-lg-9">
                <ul>
                  <li>
                    <span class="category">Front End</span>
                    <h4>New Design Trend</h4>
                  </li>
                  <li>
                    <span>Date:</span>
                    <h6>24 Feb 2036</h6>
                  </li>
                  <li>
                    <span>Duration:</span>
                    <h6>30 Hours</h6>
                  </li>
                  <li>
                    <span>Price:</span>
                    <h6>$320</h6>
                  </li>
                </ul>
                <a href="#"><i class="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-6">
          <div class="item">
            <div class="row">
              <div class="col-lg-3">
                <div class="image">
                  <img src="assets/images/event-03.jpg" alt="">
                </div>
              </div>
              <div class="col-lg-9">
                <ul>
                  <li>
                    <span class="category">Full Stack</span>
                    <h4>Web Programming</h4>
                  </li>
                  <li>
                    <span>Date:</span>
                    <h6>12 Mar 2036</h6>
                  </li>
                  <li>
                    <span>Duration:</span>
                    <h6>48 Hours</h6>
                  </li>
                  <li>
                    <span>Price:</span>
                    <h6>$440</h6>
                  </li>
                </ul>
                <a href="#"><i class="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Data from '../assets/js/data.js'
import { reactive, ref } from 'vue'

const services = ref(Data)

console.log(services)
</script>

<style lang="scss" scoped>

</style>