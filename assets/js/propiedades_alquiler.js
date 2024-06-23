
/*1 arreglo con 4 objetos*//*export para poder llamar desde otro archivo*/
const propiedades_alquiler = [  /*arreglo*/
    {nombre:"Apartamento en el centro de la ciudad",
     src:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
     descripcion: "Este apartamento de 2 habitaciones esta ubicado en el corazón de la ciudad, cerca de todo.",
     habitacion: "2",
     costo: "$500.000",
     smoke: false,
     pets: true
    },


    {nombre:"Apartamento luminoso con vista al mar",/*objeto*/
        src:"https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar.",
        habitacion: "3",
        costo: "$450.000",
        smoke: false,
        pets: true
    },


    {nombre:"Condominio moderno en zona residencial",/*objeto*/
        src:"https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        descripcion: "Este elegante condominio está ubicado en una tranquila zona residencial.",
        habitacion: "4",
        costo: "$850.000",
        smoke: false,
        pets: true
    },


    {nombre:"Apartamento a orgillas del Mar",/*objeto*/
        src:"https://plus.unsplash.com/premium_photo-1694475076735-29a5f3f658c2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: "Este hermoso apartamento tiene una excelente ubicación y una vista maravillosa al mar.",
        habitacion: "3",
        costo: "$750.000",
        smoke: false,
        pets: true
    }
]

const template = document.querySelector("#alquiler")
let html = ''

for(propiedad of propiedades_alquiler){
    html+=
   `<div class="col-md-4 mb-4">
     <div class="card">
        <h4>${propiedad.nombre}</h4>
        <img src= ${propiedad.src}  clas= "card-img-top" alt"departamento"/>
        <div class= "card-body">
        <p class= "card-text"> ${propiedad.descripcion}</p>
        <p><i class="fas fa-bed"></i> ${propiedad.habitacion} Habitaciones </p>
        <p><i class =fas fa-dollar-sign"></i>${propiedad.costo} </p>
                 ${propiedad.smoke ?
                `<p class="text-success">
                   <i class="fas fa-smoking"></i> Permitido Fumar
                </p>`:
                `<p class= "text-danger">
                <i class= "fas fa-smoking-ban"></i> No se permite fumar
                </p>`

            }
            ${propiedad.pets ?
                `<p class="text-success">
                   <i class="fas fa-paw"></i> Permitido Mascostas
                </p>`:
                `<p class= "text-danger">
                <i class= "fas fa-smoking-ban"></i> No se permiten mascotas
                </p>`

            }
     
        </div> 
    </div> 
     </div> `;
    
}

template.innerHTML = html