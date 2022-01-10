const app = new Vue({
   el: '#app',
   data: {
      fullAlbumsApiURL: 'http://localhost/php-ajax-dischi/server.php',
      albums: [],
      genre: 'all',
   },
   mounted() {
      this.getApi();
   },
   methods: {
      getApi() {
         axios.get(this.fullAlbumsApiURL, {
            params: {
               genre: this.genre,
            }
         })
            .then( response => {
               this.albums = response.data;
               console.log(this.albums);
               console.log(this.genre);
            })
            .catch( error => {
               console.log(error);
            });
      },
   },
});