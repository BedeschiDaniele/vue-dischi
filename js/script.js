var app = new Vue (
  {
    el: '.root',
    data: {
     discs:[],
     generes:[],
     kindMusic:"all"
  },
    methods: {

  },
    mounted: function () {
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((result) => {
     this.discs = result.data.response;
     // Nuovo array contente il genere musicale
       for (var i = 0; i < this.discs.length; i++) {
         let kind = this.discs[i].genre;
         if (!this.generes.includes(kind)) {
           this.generes.push(kind)
         }
       }
       // Ordine per data
         this.discs.sort(function(a,b) {
        return new Date(a.year).getTime() - new Date(b.year).getTime()
        });
     });
    }
  }
);
