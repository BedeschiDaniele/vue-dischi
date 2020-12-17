var app = new Vue (
  {
    el: '.root',
    data: {
     discs:[],
     generes:[]
  },
    methods: {
      kindMusic: function () {
      }
  },
    mounted: function () {
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((result) => {
     this.discs = result.data.response;
     for (var i = 0; i < this.discs.length; i++) {
       let kind = this.discs[i].genre;
       console.log(this.kind);
       if (!this.generes.includes(kind)) {
         this.generes.push(kind)
       }
     }
     console.log(this.discs);
     console.log(this.generes);
      });
    }
  }
);
