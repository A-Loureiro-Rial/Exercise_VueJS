import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state:
    {
      perimetre: 0,
      aire : 0,
      volume: 0,
      rayon: 0,
    },
    
    mutations:
    {
      CALCULER(state, nombre)
      {
        if (nombre == '')
        {
          state.rayon = 0
        }
        else
        {
          state.rayon = nombre;
        }
        if (nombre > 0)
        {
          state.perimetre = 2 * Math.PI * state.rayon; 
          state.aire = Math.PI * (state.rayon ** 2); 
          state.volume = 4 / 3 * Math.PI * (state.rayon ** 3);
        }
      }
    }
})
