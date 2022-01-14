var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!',
        nombre: "juan"
    },
    methods: {
        reverseMessage: function (string) {
          this.message = this.message.split('').reverse().join('') + string
        },
        greet: function(nombre){
            alert("Hola "  + this.nombre + " y " + nombre)
        },
        abajo: function(){
            alert("picaste la tecla abajo")
        },
        atajo: function(){
            alert("ejecutaste el atajo")
        }
    }
});
