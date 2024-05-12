<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Las estrategias de planeación y evaluación deben tener diferentes aspectos evaluativos, destacándose los planes existentes, así como el monitoreo y la aplicación de estos. En la siguiente figura, se aprecian las temáticas desarrolladas en el componente:

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-down-right")
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="Imagen que relaciona de manera resumida la temática abordada durante este componente formativo, teniendo claro que para que para que haya  una adecuada estrategia de planeación y evaluación deben existir planes tácticos y operativos, procesos administrativos y un monitoreo en el procedimiento.")
      .col-auto(data-aos="fade-down-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>
<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Sintesis',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
