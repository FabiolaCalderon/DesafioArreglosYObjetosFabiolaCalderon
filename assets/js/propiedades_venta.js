
/*1 arreglo con 4 objetos*/

const propiedades_venta = [ /*arreglo*/
    {  nombre:"Apartamento de lujo en zona exclusiva",/*objeto*/
       src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
       descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
       habitacion: "4",
       costo: "$150.000.000",
       smoke: false,
       pets: true
    },

    {  nombre:"Apartamento Acogedor en la montaña",/*objeto*/
        src:"https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.",
        habitacion: "2",
        costo: "120.000.000",
        smoke: true,
        pets: true
    },
    {  nombre:"Penthouse de lujo con terraza panorámica",/*objeto*/
        src:"https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.",
        habitacion: "3",
        costo: "$250.000.000",
        smoke: false,
        pets: true
    },
    {   nombre:"Casa nueva 350 mt2 de terreno",/*objeto*/
        src:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: "Esta casa ofrece una terraza y áreas verdes espectaculares.",
        habitacion: "4",
        costo: "$350.000.000",
        smoke: true,
        pets: true
    }
]

    
    const template = document.querySelector("#ventas")
    let html = ''
  
    for(propiedad of propiedades_venta){



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