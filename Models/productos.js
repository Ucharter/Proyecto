import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase,ref as ref2 , onValue} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
import { getStorage, ref,getDownloadURL }from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBfVMTvk37mEsYBUwRWIEGdY52WUnHRpAo",
  authDomain: "liquor-store-9c0d9.firebaseapp.com",
  projectId: "liquor-store-9c0d9",
  storageBucket: "liquor-store-9c0d9.appspot.com",
  messagingSenderId: "743260586080",
  appId: "1:743260586080:web:181791566ebd34a3878305",
  measurementId: "G-W8YWBF13T7"
};

//variables
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getDatabase();
const starCountRef = ref2(db, 'productos/cervezas');
const starCountRef2 = ref2(db, 'productos/Vinos');
const starCountRef3 = ref2(db, 'productos/whiskys');
var image='';

//panels
let body_tabla_cervezas = document.getElementById('body_tabla_cervezas');
let body_tabla_whiskis = document.getElementById('body_tabla_whiskis');
let body_tabla_vinos = document.getElementById('body_tabla_vinos');
var lista_cervezas=[],lista_vinos=[],lista_whiskis=[]
var cont=0
var cont2=0
var cont3=0;


//eventos
onValue(starCountRef, (snapshot) => {
    snapshot.forEach((doc) => {
        cont++;
        lista_cervezas[cont]=doc.val()
    });
    cargarCervezas(lista_cervezas)
});
onValue(starCountRef2, (snapshot) => {
    snapshot.forEach((doc) => {
        cont2++;
        lista_vinos[cont2]=doc.val()
    });
    cargarVinos(lista_vinos)
});
onValue(starCountRef3, (snapshot) => {
    snapshot.forEach((doc) => {
        cont3++;
        lista_whiskis[cont3]=doc.val()
    });
    cargarWhiskys(lista_whiskis)
});

//funciones

function cargarCervezas(datos){
    for (let i = 1; i < datos.length; i++) {
        // Crea las hileras de la tabla
        let row = document.createElement("tr");
    
        for (let j = 0; j < 6; j++) {
          // Crea un elemento <td> y un nodo de texto, haz que el nodo de
          // texto sea el contenido de <td>, ubica el elemento <td> al final
          // de la hilera de la tabla
          let celda = document.createElement("td");
          let celda1 = document.createElement("th");
          let textoCelda = document.createTextNode(i);
          let textoCelda1 = document.createTextNode(datos[i].nombre);
          let textoCelda2 =document.createTextNode(datos[i].tamaño);
          let textoCelda3 = document.createElement("img");
          let textoCelda4 = document.createTextNode(datos[i].costo);
          let boton_reservar = document.createElement("r");
          celda1.setAttribute('scope','row');
          boton_reservar.setAttribute('href','#');
          boton_reservar.setAttribute('class','boton_acti_usuario_class btn bg-warning fa fa-comment');
          textoCelda3.setAttribute('id',datos[i].nombre)
          textoCelda3.setAttribute('class','img-thumbnail')
          textoCelda3.setAttribute('alt','Cinque Terre')
          textoCelda3.setAttribute('width','104')
          if (j == 0){
            celda1.appendChild(textoCelda);
            row.appendChild(celda1);
          }
          if (j == 1){
            celda.appendChild(textoCelda1);
            row.appendChild(celda);
          }
          if (j == 2){
            celda.appendChild(textoCelda3);
            row.appendChild(celda);
          }
          if (j == 3){
            celda.appendChild(textoCelda2);
            row.appendChild(celda);
          }
          if (j == 4){
            celda.appendChild(textoCelda4);
            row.appendChild(celda)
          }
          if (j == 5){
            let cont3 = i + 1;
            boton_reservar.setAttribute('id','boton_reservar_'+ cont3)
            celda.appendChild(boton_reservar);
            row.appendChild(celda);
            cargarImage(datos[i].nombre)
          }
          let cont = i+1
          row.id = 'fila_'+cont
        }
    
        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        body_tabla_cervezas.appendChild(row);
    }
}

function cargarWhiskys(datos){
    for (let i = 1; i < datos.length; i++) {
        // Crea las hileras de la tabla
        let row = document.createElement("tr");
    
        for (let j = 0; j < 6; j++) {
          // Crea un elemento <td> y un nodo de texto, haz que el nodo de
          // texto sea el contenido de <td>, ubica el elemento <td> al final
          // de la hilera de la tabla
          let celda = document.createElement("td");
          let celda1 = document.createElement("th");
          let textoCelda = document.createTextNode(i);
          let textoCelda1 = document.createTextNode(datos[i].nombre);
          let textoCelda2 =document.createTextNode(datos[i].tamaño);
          let textoCelda3 = document.createElement("img");
          let textoCelda4 = document.createTextNode(datos[i].costo);
          let boton_reservar = document.createElement("r");
          boton_reservar.setAttribute('href','#');
          boton_reservar.setAttribute('class','boton_acti_usuario_class btn bg-warning fa fa-comment');
          celda1.setAttribute('scope','row');
          textoCelda3.setAttribute('id',datos[i].nombre)
          textoCelda3.setAttribute('class','img-thumbnail')
          textoCelda3.setAttribute('alt','Cinque Terre')
          textoCelda3.setAttribute('width','104')
          console.log(datos[i].nombre)
          if (j == 0){
            celda1.appendChild(textoCelda);
            row.appendChild(celda1);
          }
          if (j == 1){
            celda.appendChild(textoCelda1);
            row.appendChild(celda);
          }
          if (j == 2){
            celda.appendChild(textoCelda3);
            row.appendChild(celda);
          }
          if (j == 3){
            celda.appendChild(textoCelda2);
            row.appendChild(celda);
          }
          if (j == 4){
            celda.appendChild(textoCelda4);
            row.appendChild(celda)
          }
          if (j == 5){
            let cont3 = i + 1;
            boton_reservar.setAttribute('id','boton_reservar_'+ cont3)
            celda.appendChild(boton_reservar);
            row.appendChild(celda);
            cargarImage(datos[i].nombre)
          }
          let cont = i+1
          row.id = 'fila_'+cont
        }
    
        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        body_tabla_whiskis.appendChild(row);
    }
}

function cargarVinos(datos){
    for (let i = 1; i < datos.length; i++) {
        // Crea las hileras de la tabla
        let row = document.createElement("tr");
    
        for (let j = 0; j < 6; j++) {
          // Crea un elemento <td> y un nodo de texto, haz que el nodo de
          // texto sea el contenido de <td>, ubica el elemento <td> al final
          // de la hilera de la tabla
          let celda = document.createElement("td");
          let celda1 = document.createElement("th");
          let textoCelda = document.createTextNode(i);
          let textoCelda1 = document.createTextNode(datos[i].nombre);
          let textoCelda2 =document.createTextNode(datos[i].tamaño);
          let textoCelda3 = document.createElement('img');
          let textoCelda4 = document.createTextNode(datos[i].costo);
          let boton_reservar = document.createElement("r");
          boton_reservar.setAttribute('href','#');
          boton_reservar.setAttribute('class','boton_acti_usuario_class btn bg-warning fa fa-comment');
          celda1.setAttribute('scope','row');
          textoCelda3.setAttribute('id',datos[i].nombre)
          textoCelda3.setAttribute('class','img-thumbnail')
          textoCelda3.setAttribute('alt','Cinque Terre')
          textoCelda3.setAttribute('width','104')
          if (j == 0){
            celda1.appendChild(textoCelda);
            row.appendChild(celda1);
          }
          if (j == 1){
            celda.appendChild(textoCelda1);
            row.appendChild(celda);
          }
          if (j == 2){
            celda.appendChild(textoCelda3);
            row.appendChild(celda);
          }
          if (j == 3){
            celda.appendChild(textoCelda2);
            row.appendChild(celda);
          }
          if (j == 4){
            celda.appendChild(textoCelda4);
            row.appendChild(celda)
          }
          if (j == 5){
            let cont3 = i + 1;
            boton_reservar.setAttribute('id','boton_reservar_'+ cont3)
            celda.appendChild(boton_reservar);
            row.appendChild(celda);
            cargarImage(datos[i].nombre)
          }
          let cont = i+1
          row.id = 'fila_'+cont
        }
    
        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        body_tabla_vinos.appendChild(row);
    }
}

function cargarImage(nombre){
  const storageRe = ref(storage, 'imagenes/'+nombre+'.jpg' );
  getDownloadURL(storageRe).then(function(url) {
    $('#'+nombre).attr('src', url);
  }).catch(function(error) {
    console.log("Imagen No encontrada",error);
  });
}