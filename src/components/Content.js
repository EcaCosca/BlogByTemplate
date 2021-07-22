import React from 'react'
import DM1 from '../images/DM1.jpg'
import DM2 from '../images/DM2.jpg'
import DM3 from '../images/DM3.jpg'

export const Content = () => {
    return (
        <>
        <div className="h-screen flex justify-center items-center bg-red-300">
            <h1 className="text-9xl uppercase font-black">Content</h1>
        </div>
        <br />
         <div className="content-card">
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <img src={DM1} className="rounded-lg" alt="image1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-5">
                <h2 className="text-5xl mb-2">Como un básico se transforma en una prenda exótica</h2>
                <h2 className="text-3xl mb-1">Domingo Domingo</h2>
                <h4 className="text-2xl mb-1">De Argentina al Universo, el salto que define a Domingo es Domingo</h4>
                
                <div className="inside-container">
                    <p className="mb-2">Teniendo América Latina y toda su exquisita cultura como referencia no dejamos  de pensar en Visión- Diseño – Función para describir a esta marca para hombres, que con cada temporada atemporal, nos hace respirar creatividad exponencial y liderazgo como producto nacional.
                    Agustina Alvez, diseñadora y emprendedora, es quien hace crecer esta marca hace ocho años. Cuando la conocimos nos transmitió una  vibra fresca y ese gran frenesí  que caracteriza a su marca. De tal palo, tal astilla. Durante la entrevista, Agus, hizo mucho hincapié en que no cualquiera usa Domingo.  Detrás de cada colección hay una búsqueda, un estudio.. una propuesta que va más allá de cualquier tendencia.
                    Todas las colecciones son extremadamente diferentes pero siempre sosteniendo la filosofía de Domingo: prendas de uso diario pero con un éxtasis de estampas y telas un tanto extravagantes. Es por esto que cada colección  tiene su propio packaging, su propia etiqueta y su propia estrategia de marketing.
                    </p>
                </div>
                


                

                <div className="inside-container">
                    <p className="mb-10">El cliente de Domingo la elige por lo diferente, el algodón de pima peruano,  la textura de un bordado, el detalle en cada avío y la estampa que tanto caracteriza  a esta marca; Pantalones cuadriculados con forrería floreada,  ponchos con guardas mapuches y pilotos acharolados con capucha. Domingo centra su diseño en morfologías básicas, tales como un jogging, pero con la vuelta Dominguera: Un jogging de terciopelo con un cordón trenzado de colores haciendo analogía a los colores del cerro de siete colores, Jujuy, Argentina.
                    Pero eso no es todo. En Domingo podemos encontrar diferentes colecciones, tales como la Colección Guayaquil, Mardel, Folklore, Atalaya y nuestra favorita, Río. Todas hacen referencia a un lugar o movimiento cultural latinoamericano.
                    Para darles un ejemplo, la Colección Río, Verano 2016, esta compuesta por prendas con grabados y determinaciones que hacen referencia a la palabra, RÍO, como Río de Janerio, con sus playas y sus avenidas, Rio Paraná y su vista desde Brasil o Argentina, o simplemente juega con el verbo Reír. Es una colección, como todas, rica por la diversidad y su key to success: llena de imágenes que transportan a un recorrido a través de las prendas.
                    Con 3.000 productos, mínimo, por colección, Domingo se caracteriza por la fidelidad en el proceso y el desarrollo del producto. Estamos hablando de una marca que respeta cada sector de elaboración fijando su distinción en la confección: El textil se busca y se crea una prenda especifica para poder transmitir la base principal de la marca,  multiplicidad y comodidad. 
                    “El buen Diseñador es el que trabaja para el otro, nuestro objetivo es mostrar la impronta de uno para llegar a todos”  Agustina Alvez
                    </p>
                </div>

                <div className="inside-container">
                    <p className="mb-10">Loco, no? Pero esta es la energía que maneja la marca. Una energía innovadora que te invita a romper con las estructuras y tendencias establecidas y te deja que seas vos el que marca su propia identidad con prendas pensadas. “La idea es que se coman el mismo viaje que el diseñador”
                    Hoy Domingo es Domingo es elegido por grandes bandas de la música Argentina y realiza colecciones capsulas para marcas fuera del rubro como Campari, Garibaildi y Negroni: la variedad de opciones no solo se ven en las prendas sino también en la filosofía y el estilo de vida de la marca.
                    Polifacético, hiperactivo y dinámico, Domingo prepara su próxima colección pero esta vez para mujeres. 
                    Sin salir de la ideología, se viene SABADO. Una línea especial para el equipo femenino que buscan ropa adaptable a cualquier situación y ajena a las tendencias masivas.
                    </p>
                </div>
            </div>
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div   div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-yellow-300 to-red-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <img src={DM2} className="rounded-lg" alt="image1" />
                            </div>
                        </div>
                    </div>
                </div>

            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div   div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-300 via-pink-300 to-yellow-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <img src={DM3} className="rounded-lg" alt="image1" />
                            </div>
                        </div>
                    </div>
                </div>
            
         
        </>
    )
}
