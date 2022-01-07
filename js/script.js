const app = new Vue({
   el: '#app',
   data: {
      fullAlbumsApiURL: 'https://flynn.boolean.careers/exercises/api/array/music',
      filteredAlbumsApiURL: 'http://localhost/php-ajax-dischi/server.php',
      albums: [],
      genre: 'all',
   },
   mounted() {
      this.getApi();
   },
   methods: {
      getApi() {
         axios.get(this.fullAlbumsApiURL)
            .then( response => {
               this.albums = response.data.response;
               console.log(this.albums);
            })
            .catch( error => {
               console.log(error);
            });
      },
      filterAlbums() {
         axios.get(this.filteredAlbumsApiURL, {
            params: {
               gerne: this.gerne,
            }
         })
            .then( response => {
               this.albums = response.data;
               console.log('albums filtrati');
            })
            .catch( error => {
               console.log(error);
            });
      }
   },
});