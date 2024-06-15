import axios from "axios";
import moment from "moment";
import { reactive } from "vue";

export const store = reactive({
    // STATE
    base_api_url: 'http://127.0.0.1:8000/',
    fotos_endpoint: 'api/fotos',
    categories_endpoint: 'api/categories',
    in_evidenza_query: 'evidenza=1',
    fotos: '',
    sliderInterval: '',
    fotos_in_evidenza: [],
    activeImage: 0,
    moment: moment,
    allCategories: [],
    loader: false,



    // ACTIONS
    callApiFotos(url) {
        this.loader = true;
        axios
            .get(url)
            .then((response) => {
                //console.log(response.data.results);
                this.fotos = response.data.results;
                this.loader = false;

            })
            .catch((error) => {
                console.error(error);
            })

    },
    GetAllFotos() {
        if (!this.fotos) {
            const url = this.base_api_url + this.fotos_endpoint;

            this.callApiFotos(url);

            clearInterval(store.sliderInterval);
        }
    },
    GetFotoHomePage() {
        this.loader = true;

        axios
            .get(this.base_api_url + this.fotos_endpoint + '?' + this.in_evidenza_query)
            .then((response) => {
                //console.log(response.data.results);
                this.fotos_in_evidenza = response.data.results;
                this.loader = false;

            })
            .catch((error) => {
                console.error(error);
            });
    },
    GetAllCategories() {
        axios
            .get(this.base_api_url + this.categories_endpoint)
            .then((response) => {
                //console.log(response.data.results)
                this.allCategories = response.data.results;
            })
            .catch((error) => {
                console.error(error)
            })
    }

})