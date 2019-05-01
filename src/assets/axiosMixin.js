import axios from 'axios'

export const axiosMixin = {
    data() {
        return {
            SWArray: []
        }
    },
    mounted() {
        axios.get("films/?page=1")
        .then(response => (this.SWArray = response.data.results))
    }
}