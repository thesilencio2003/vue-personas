<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar País</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Detalles del País
            </div>
            <div class="card-body">
                <form @submit.prevent="updatePais">
                    <div class="row mb-3">
                        <label for="pais_codi" class="form-label">Código (3 caracteres):</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="pais_codi" placeholder="Código País"
                                v-model="pais.pais_codi" maxlength="3" disabled>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="pais_nomb" class="form-label">Nombre:</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="pais_nomb" placeholder="Nombre País"
                                v-model="pais.pais_nomb">
                        </div>
                    </div>
                    
                    <button class="btn btn-primary" type="submit">Actualizar</button>
                    <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'EditarPais',
    data() {
        return {
            pais: {
                pais_codi: '',
                pais_nomb: '',
            },
        }
    },

    methods: {
        cancelar() {
            this.$router.push({ name: 'Paises' })
        },
        async updatePais() {
            this.pais.pais_codi = this.pais.pais_codi.toUpperCase();

            const res = await axios.put(`http://127.0.0.1:8000/api/paises/${this.pais.pais_codi}`, this.pais);
            
            if (res.status === 200) {
                this.$router.push({ name: 'Paises' });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'País ha sido actualizado',
                    showConfirmButton: false,
                    timer: 2000
                });
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Error al actualizar el país',
                    text: 'Ha ocurrido un problema. Por favor, inténtalo de nuevo.',
                    showConfirmButton: true,
                });
            }
        }
    },
    async mounted () {
        this.pais.pais_codi = this.$route.params.id;
        
        console.log("Cargando datos para pais_codi:", this.pais.pais_codi);

        const res = await axios.get(`http://127.0.0.1:8000/api/paises/${this.pais.pais_codi}`);
        
        if (res.status === 200 && res.data && res.data.pais) {
            this.pais = res.data.pais;
        } else {
            console.warn("Respuesta del backend no contiene 'pais' o el estado no es 200.");
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error al cargar el país!',
                text: 'No se pudieron obtener los datos del país para editar.',
                showConfirmButton: true,
            });
            this.$router.push({ name: 'Paises' }); 
        }
    },
}
</script>