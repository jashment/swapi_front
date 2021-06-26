import axios from 'axios'
import { get } from 'core-js/fn/dict'

export const axiosMixin = {
    data() {
        return {
            SWArray: []
        }
    },
    mounted() {
        axios({
            url: "/films/?page=1",
            method: get,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(response => (this.SWArray = response.data.results))
    }
}