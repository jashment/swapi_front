import axios from 'axios'

export const axiosMixin = {
    data() {
        return {
            SWArray: []
        }
    },
    mounted() {
        axios({
            url: "/films/?page=1",
            method: 'get',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(response => (this.SWArray = response.data.results))
    }
}