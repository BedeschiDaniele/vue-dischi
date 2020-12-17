var app = new Vue (
  {
    el: '.root',
    data: {
     randomEmails:[]
  },
    methods: {
  },
    mounted: function () {
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((result) => {
     this.randomEmails.push(result.data.response);
      });
    }
  }
);
