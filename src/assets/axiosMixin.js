import axios from 'axios'

export const axiosMixin = {
    data() {
        return {
            SWArray: []
        }
    },
    mounted() {
        // let sorted = req.query.sort;
        axios.get("films/?page=1")
        .then(response => (this.SWArray = response.data.results))
        // .then(films => {
        //     if(!sorted) {
        //         response.json(films)
        //     } else if(sorted == 'title' || sorted == 'episode_id' || sorted == 'release_date') {
        //         console.log('Sorting by: ' + sorted)
        //         if(sorted == 'title') {
        //             films.sort(function(a,b){
        //                 return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)
        //             })
        //         } else {
        //             films.sort(function(a,b){
        //                 return(a[sorted] - b[sorted])
        //             })
        //         }
        //         response.json(films)
        //     } else {
        //         response.json({error: 'Invalid'})
        //     }
        // })
    }
}