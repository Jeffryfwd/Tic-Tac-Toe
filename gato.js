const contenedorPadre = document.getElementById('contenedorPadre');
let todosConten = document.querySelectorAll('.todosConten');
const boton = document.getElementById('boton')
const Jugadorx= document.getElementById('Jugadorx')
const JugadorO= document.getElementById('JugadorO')
const Empates=document.getElementById('Empates')
const mensaje= document.getElementById('mensaje')

let caracter = 'x';
let jugadorX = 0;
let jugadorO = 0;
let empat=0;
let ganes = []



puntaje()
// este for me va a recorrer la lista todosconten
for (let index = 0; index < todosConten.length; index++) {
    // aqui le agrego un evento a cada contenedor de la lista todosconten
   todosConten[index].addEventListener('click', function () {
    
    //aqui verifico si hay campos vacios 
    if (todosConten[index].innerHTML==='') {
        //si hay campos vacios me inserta la varaiable caracter que seria x
        todosConten[index].innerHTML= caracter
        console.log("pepito",espaciosVacios());
       //aca llamamos a funcion cada ves que se haga click
       
        if (ganador()) {

            jugadorX = JSON.parse(localStorage.getItem('resultado X', jugadorX)) || 0

            jugadorX++

            //jugadorX
            localStorage.setItem('resultado X', JSON.stringify(jugadorX));

            puntaje()
            
            let palabra= document.createElement('h1')
            palabra.innerHTML= 'Ganador X'
            mensaje.appendChild(palabra);
            return;
            
        }
        else if(!espaciosVacios()){
            empat= localStorage.getItem('Empates',empat) || 0
            empat++
            localStorage.setItem('Empates', empat)
            console.log("empate");
            
            let palabra= document.createElement('h1')
            palabra.innerHTML= 'Empate'
            mensaje.appendChild(palabra);
            puntaje()
            
        }


        agregCasilla();
    }
    
   })


   
   



    
}
// hacemos la funcion agregarcasilla para agrgar o en una casilla vacia aleatoria
function agregCasilla() {
    //hago una variable lo cual va obterner la filtracion de las casillass vacias
    let casillasvaicia= Array.from(todosConten).filter(casilla => casilla.innerHTML==='')
    //compruebo si hay casillas vacios
    if (casillasvaicia.length>0 ) {
        //hago una variable que va a obtener el metodo math.ramdon
        //aqui con el metodo lo que hace es escoger una casila vacia al azar
        let casilla0btenida=Math.floor(Math.random()* casillasvaicia.length)
       //cuando encuentra una casilla vacia inserta la 'o'
        casillasvaicia[casilla0btenida].innerHTML='o'

        console.log("pepito",espaciosVacios());
        if (ganador()) {
          
       
            jugadorO = JSON.parse(localStorage.getItem('resultado O', jugadorO)) || 0

            jugadorO++

            localStorage.setItem('resultado O', JSON.stringify(jugadorO));
           

            puntaje()
            
            let palabra= document.createElement('h1')
            palabra.innerHTML= 'Ganador O'
            mensaje.appendChild(palabra);
            return;
        }

        else if(!espaciosVacios()){

            console.log("empate");
            
        }
        
        
    }
    
}
boton.addEventListener('click',function () {
    for (let index = 0; index < todosConten.length; index++) {
        document.location.reload()
        
        
    }   
})

function puntaje(){
    Jugadorx.innerHTML = JSON.parse(localStorage.getItem('resultado X', jugadorX))
    JugadorO.innerHTML = JSON.parse(localStorage.getItem('resultado O', jugadorO))
    Empates.innerHTML=localStorage.getItem('Empates', empat)
}



function ganador() {


    const cobinaciones=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2],
    ]


    for (const ganes  of cobinaciones) {
        const [A, B ,C ] = ganes
        const posicion1= todosConten[A].innerHTML;
        const posicion2= todosConten[B].innerHTML;
        const posicion3= todosConten[C].innerHTML;
        console.log(ganes);
        

        if (posicion1 && posicion1 === posicion2 && posicion1 && posicion2===posicion3) {
            return true ;         
            
        }




        
    }
    return false
    
    
}


function espaciosVacios(){
    let b = false
    todosConten.forEach(conte => {
        if(conte.innerHTML== ""){
            b = true;
        }

        
        
    });

    return b
   }


 

    





    





































/*for (let index = 0; index < todosConten.length; index++) {
    todosConten[index].addEventListener('click', function () {
        if (todosConten[index].innerHTML === '') {
            todosConten[index].innerHTML = caracter;

            // Añadir 'o' aleatoriamente a una casilla vacía
            agregarOEnCasillaVacia();
        }
    });
}

function agregarOEnCasillaVacia() {
    // Filtrar las casillas vacías
    let casillasVacias = Array.from(todosConten).filter(casilla => casilla.innerHTML === '');
    
    if (casillasVacias.length > 0) {
        // Escoger una casilla vacía al azar
        let randomIndex = Math.floor(Math.random() * casillasVacias.length);
        casillasVacias[randomIndex].innerHTML = 'o';
    }
}*/



