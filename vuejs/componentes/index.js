var contador = Vue.component ( 'contador', {
    data: function() {
        return {
            contador: 0
        }
    },
    template: '<button v-on:click="contador++"> Me presionaste {{contador}} </button>'
}
);

var contador = Vue.component ( 'contador', {
    data: function() {
        return {
            contador: 0
        }
    },
    template: '<button v-on:click="contador++"> Me presionaste {{contador}} </button>'
}
);

var post = Vue.component ('post', {
    props: ['titulo', 'contenido'],
    template: `<div>
                    <h3>{{titulo}}</h3>
                    <br>
                    <p>{{contenido}}</p>
                </div>`
});

var hijo = Vue.component ('hijo', {
    props: ['numero'],
    template: `<div>
                    <button v-on:click="$emit('botonazo', numero)"> Soy el hijo {{numero}}</button>
                </div>`
});

var app = new Vue({ 
    el: '#app',
    data: {
    },
    components: {
        contador: contador,
        post: post,
        hijo: hijo
    },
    methods: {
        imprime_boton: function(numero){
            alert("picaste el boton numero " + numero)
        }
    }
});