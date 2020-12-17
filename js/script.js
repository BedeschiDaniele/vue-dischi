var app = new Vue (
  {
    el: '.root',
    data: {
     discs:[]
  },
    methods: {
  },
    mounted: function () {
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((result) => {
     this.discs = result.data.response;
     console.log(this.discs);
      });
    }
  }
);
