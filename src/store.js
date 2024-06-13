import axios from "axios";
import moment from "moment";
import { reactive } from "vue";

export const store = reactive({
    // STATE
    base_api_url: 'http://127.0.0.1:8000/',
    fotos_endpoint: 'api/fotos',
    in_evidenza_query: 'evidenza=1',
    fotos: '',
    sliderInterval: '',
    fotos_in_evidenza: [],
    moment: moment,



    // ACTIONS
    GetAllFotos() {
        if (!this.fotos) {

            axios
                .get(this.base_api_url + this.fotos_endpoint)
                .then((response) => {
                    console.log(response.data.results);
                    this.fotos = response.data.results;
                })
                .catch((error) => {
                    console.error(error);
                })

            clearInterval(this.sliderInterval);
        }
    },
    GetFotoHomePage() {
        axios
            .get(this.base_api_url + this.fotos_endpoint + '?' + this.in_evidenza_query)
            .then((response) => {
                console.log(response.data.results);
                this.fotos_in_evidenza = response.data.results;
            })
            .catch((error) => {
                console.error(error);
            });
    }

})