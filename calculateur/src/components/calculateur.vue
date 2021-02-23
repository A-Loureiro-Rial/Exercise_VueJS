<template>
    <div id="calculateur">
        <label for="nombre">Rayon (en cm) </label>
        <input v-model.number="rayon" type="texte" name="nombre" id="nombre"><br><br>
        <p id='errorNumber'>
            <span v-if="isNaN(rayon) == true">Tu dois rentrer un nombre</span><br>
            <span v-if="parseInt(rayon) <= 0">Ton nombre dois être supérieur <span class="bold">strictement</span> à 0</span>
        </p>
        <table v-if="rayon > 0">
            <thead>
                <tr>
                    <td>Périmètre du cercle</td>
                    <td>Aire du cercle</td>
                    <td>Volume de la sphère</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{perimetre}} cm</td>
                    <td>{{aire}} cm²</td>
                    <td>{{volume}} cm³</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name : "calculateur",
    computed : 
    {
        ...mapState(['perimetre', 'aire', 'volume']),
        rayon:
        {
            get()
            {
                return this.$store.state.rayon;
            },
            set(value)
            {
                this.$store.commit('CALCULER', value);
            }
        }
    }
        
}
</script>

<style scoped>
#calculateur
{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#errorNumber
{
    color:red;
}

.bold
{
    font-weight:bold
}

table
{
    border: 2px solid black;
    border-collapse: collapse;
}

td
{
    border: 2px solid black;
    padding:0.3em;
}

</style>