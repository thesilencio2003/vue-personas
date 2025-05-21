<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Nuevo Departamento</h1>
    <div class="card">
      <div class="card-header fw-bold">
        Departamento
      </div>
      <div class="card-body">
        <form @submit.prevent="saveDepartamento">
          <div class="row mb-3">
            <label for="depa_codi" class="form-label">Código:</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
              <input type="text" class="form-control" id="depa_codi" placeholder="Código departamento" disabled
                v-model="departamento.depa_codi">
            </div>
          </div>
          <div class="row mb-3">
            <label for="depa_nomb" class="form-label">Nombre :</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="building" /></div>
              <input type="text" class="form-control" id="depa_nomb" placeholder="Nombre departamento"
                v-model="departamento.depa_nomb" required>
            </div>
          </div>
          <div class="row mb-3">
            <label for="pais_codi" class="form-label">País :</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="globe-americas" /></div>
              <select class="form-select" v-model="departamento.pais_codi" required>
                <option selected value="">Seleccione un país</option>
                <option v-for="pais in paises" :key="pais.pais_codi" :value="pais.pais_codi">{{
                  pais.pais_nomb }}</option>
              </select>
            </div>
          </div>
          <button class="btn btn-primary" type="submit">Guardar</button>
          <button class="btn btn-secondary mx-2" @click="cancel">Cancelar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  name: 'NewDepartamento',
  data() {
   return{
      departamento:{
        depa_codi: 0,
        depa_nomb: '',
        pais_codi: 0
      },
      paises: [],
      pais_codi: "0"
    }
  },
  methods: {
    cancel() {
      this.$router.push({ name: 'Departamentos' }) 
    },
    async saveDepartamento() {
     this.departamento.pais_codi = this.pais_codi
      const res = await axios.post('http://127.0.0.1:8000/api/departamentos/', this.departamento)
      console.log(res);
      if (res.status == 200) {
    this.$router.push({ name: 'Departamentos' })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'departamentos has been saved',
          showConfirmButton: false,
          timer: 2000
        })
      }
    }
    },
  mounted () {
    axios.get('http://127.0.0.1:8000/api/paises/')
    .then(response => (this.paises = response.data.paises))
  },
}
</script>