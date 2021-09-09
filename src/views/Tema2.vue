<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Técnicas de animación 

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/tema2-banner.png", alt="Técnicas de animación") 

    p(data-aos="fade") Desde su mismo origen, la animación ofreció a los interesados en el quehacer artístico y audiovisual, un abanico de posibilidades; por ejemplo, 
      span.etiqueta al mundo de las historietas en los Estados Unidos, la posibilidad de dar “vida” a los personajes de sus tiras cómicas en los “dibujos animados”; 
      | en la pintura y la ilustración, desarrollar historias con tiempo; en la música plantea la posibilidad de acoplar imágenes en un sincronismo perfecto y en el cine, la animación ofrece la posibilidad de la experimentación y la realización de efectos especiales. 

    Separador


    // 2.1
    #t_2_1.titulo-segundo(data-aos="fade-right")
      .h2 2.1  Tipos de animación

    p(data-aos="fade") Desde la aparición de la animación tradicional, donde su funcionamiento era a base de células transparentes, se han presentado variedad de avances y transformaciones, siendo uno de los más significativos, la llegada del computador, donde hoy en día permiten que los animadores puedan crear escenarios, personajes y diversas secuencias con mayor facilidad, ofreciendo opciones más avanzadas y rápidas para el proceso de creación.  

    p(data-aos="fade") Dentro de los diferentes tipos de animación se encuentran:

    TabsC.color-acento-botones(data-aos="fade-down")
      .py-3.py-md-4(titulo="Animación tradicional")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Animación tradicional
            p Para entender el origen del proceso de la animación, como se conoce actualmente, hay que hablar del 
              strong Flipbook.  
              | Este dispositivo fue inventado por 
              strong John Barnes Linnett 
              | en 1868 y consistía en un libro en el cual se dibujaba página a página una escena de tal manera que al pasar las páginas rápidamente se conseguía el movimiento. 
            p El principio de la animación clásica es el mismo: dibujar a mano cada fotograma ya sea en papel o en acetato. Los personajes y escenarios poseen solo 2 dimensiones X y Y, la sensación de profundidad se logra a partir del manejo de la perspectiva, el color, luces y sombras, entre otros.  
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema2-1-tabs1.jpg', alt='Animación tradicional')
              figcaption.back-primario Nota. https://acortar.link/j1BUSQ

      .py-3.py-md-4(titulo="Animación 2D")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Animación 2D 
            p Es considerada animación tradicional, ya que fue la primera en popularizarse, en el dibujo libre a mano, tal y como hace referencia su nombre, su propósito principal es crear personajes y fondos en un medio de dos dimensiones, con la llegada de los computadores esto cambió por completo y este trabajo pasó a ser realizado a través de diferentes tipos de 
              italic software. 
              | En los 90 ’s los estudios de animación empezaron a escanear los dibujos, para pasarlos a la computadora y así empezar a realizar todo el proceso de manera digital, delineado, colorización, efectos y movimiento, propiciando así una transformación esencial en este tipo de animación.
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema2-1-tabs2.jpg', alt='Animación 2D ')
              figcaption.back-primario Nota. https://acortar.link/fzdly6

      .py-3.py-md-4.italic(titulo="Stop Motion")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 
              italic Stop Motion
            p La animación 
              italic Stop Motion 
              | es una técnica en la que los animadores manipulan físicamente los objetos haciendo que parezca que estos objetos se mueven solos. Básicamente, como su nombre lo indica, es tomar la foto, mover levemente el objeto y volver a tomar la foto; una vez terminado este proceso repetitivo, se reproducen todos los fotogramas a modo de película continua, generando así la sensación de movimiento. Estos objetos pueden ser muñecos de trapo, plastilina, recortes de papel, arcilla y en sí, cualquier objeto inanimado. Esta dispendiosa técnica de animación es la predilecta del director de cine 
              strong Tim Burton, 
              | en donde por ejemplo, para su película 
              strong “El extraño mundo de Jack” 
              italic (The nightmare before Christmas, 
              | por su título en inglés) tardó 3 años en rodarse, costó 20 millones de dólares y utilizó 227 marionetas.
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema2-1-tabs3.jpg', alt='Animación 2D ')
              figcaption.back-primario Nota. https://acortar.link/cf3l6V   

      .py-3.py-md-4.italic(titulo="Animación tipográfica y Motion Graphics")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Animación tipográfica y 
              italic Motion Graphics
            p La animación tipográfica y el grafismo en movimiento, consiste en un vídeo o animación que crea la ilusión de movimiento mediante imágenes, fotografías, títulos, colores y diseños.  Esta se usa habitualmente para vídeos corporativos, posproducción audiovisual, presentaciones interactivas, eventos, exposiciones, títulos de inicio de películas y logos corporativos. Aunque actualmente se ha aplicado con la ayuda de herramientas digitales, esta técnica se puso en uso de forma análoga desde los años 60’s. 
            p Quien acuñó este término fue 
              strong John Whitney, 
              | artista visual que trabajó en películas como 
              strong ‘Vértigo’ 
              | de 
              strong Alfred Hitchcock 
              | y creó su propia empresa 
              strong 'Motion Graphics Inc'. 
              | El diseñador gráfico 
              strong Saul Bass 
              | fue también muy importante en el aporte a esta técnica, creador de animaciones para los créditos de ‘Ciudadano Kane’ o 
              italic ‘West Side Story’, 
              | puesto que sus técnicas comprenden la animación de recortes, montaje, acción real y diseño de nombres. 
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema2-1-tabs4.jpg', alt='Animación tipográfica y Motion Graphics')
              figcaption.back-primario Nota. https://www.flickr.com/photos/fin5bjh/4338041489                

      .py-3.py-md-4.italic(titulo="Rotoscopia")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Rotoscopia
            p La rotoscopia es una técnica de animación que combina la grabación en vivo con el dibujo animado. Consiste en calcar las acciones del personaje o actor, ilustrando al personaje ficticio sobre cada fotograma de la filmación, adoptando sus posiciones y movimientos y/o graficando completamente un nuevo personaje para hacerlo interactuar con el actor real.  Para esta última modalidad, se filma al actor real procurando dejar el espacio en el encuadre para luego ilustrar el personaje animado que supone interacción.  Unos excelentes ejemplos de esta variación técnica son las películas 
              strong “¿Quién engañó a Roger Rabbit?” 
              | y 
              strong “Moonwalker” 
              | donde interactúan actores reales con dibujos animados.
            a.anexo.mb-4.mb-lg-0(href="https://vimeo.com/179878120" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p.mb-0 
                  strong Enlace web. 
                  | Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video:  
                  strong animación en rotoscopia
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema2-1-tabs5.jpg', alt='Rotoscopia')
              figcaption.back-primario Nota. https://acortar.link/fRYyd8       

      .py-3.py-md-4.italic(titulo="Pixilación")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Pixilación	
            p La Pixilación es otra forma de animación en la que personas y objetos son fotografiados repetidas veces y desplazados ligeramente entre cada fotografía.  El resultado de poner todas estas imágenes en secuencia deriva en una mirada surrealista del mundo real, debido a que se pueden modificar y afectar, ilusoriamente a voluntad, las leyes de la física. El pionero de esta variable del 
              italic Stop Motion 
              | fue 
              strong Norman McLaren 
              | con su famoso corto animado 
              strong NEIGHBOURS.
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema2-1-tabs6.jpg', alt='Pixilación')
              figcaption.back-primario Nota. https://locomocionfest.wordpress.com/2015/04/10/pixilacion/               

      .py-3.py-md-4.italic(titulo="Animación 3D")
        .row.justify-content-center
          .col-md-11.mb-4.mb-md-0
            h4 Animación 3D	
            p La animación 3D es la manipulación y movimiento de la representación digital de objetos de tres dimensiones, los cuales se definen como tales por contar con los parámetros de ancho (X), alto (Y) y Profundidad (Z), en un espacio virtual, igualmente tridimensional. Principalmente aplicado al ámbito digital, es necesario primero “modelar” (término que recibe este proceso de creación digital de los personajes, escenario y accesorios 3D) en un programa especializado e integrarle un “esqueleto”, en el caso de un personaje, que es el que permite manipular esta malla 3D por medio de un proceso llamado 
              italic-strong Rigging. 
              | A continuación se disponen una serie de patrones de movimiento llamados “fotogramas clave” o 
              italic “keyframes” 
              | y así la computadora completa de manera automática los fotogramas necesarios entre ellos para generar, finalmente, la fluidez del movimiento.
          .col-md-6.mb-4.mb-md-0
            p Más que el proceso realizado por la computadora digitalmente, la calidad del resultado depende de la experticia y detalle realizado por el modelador y animador; también se requiere un buen planteamiento y desarrollo, no solo del personaje y el escenario sino también de la iluminación, texturización, efectos visuales y físicos. En definitiva, lo que busca la animación 3D es representar en el campo digital, por medio de 
              italic software 
              | especial, de la manera más fiel posible, los factores físicos, estéticos y técnicos que existen en la vida real, como también poderlos plantear y representar en ámbitos “imposibles”.  La animación 3D también      es ampliamente usada para incluir efectos especiales a video real y ha planteado numerosos progresos tecnológicos, evolucionando de las técnicas tradicionales.  Así pues, algunos de esos aportes tecnológicos son 
              italic Motion Capture 
              | (Captura de movimiento), Realidad Virtual y Realidad Aumentada, entre otros.
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema2-1-tabs7.jpg', alt='Pixilación')
              figcaption.back-primario Nota. https://acortar.link/YaT0W4


    Separador


    // 2.2
    #t_2_2.titulo-segundo(data-aos="fade-right")
      .h2 2.2  Principios de la animación

    p(data-aos="fade") Los principios de la animación son doce (12) estos fueron desarrollados en los años 30 por los estudios Disney, por la necesidad de crear un lenguaje entendible entre los animadores y técnicos y acuñados por Frank Thomas y Ollie Johnston. Estos principios se basan en aspectos relativos a las leyes de la física y su objetivo inicial es el de dar a los personajes una actitud más realista tanto física como emocionalmente. 

    p.mb-4(data-aos="fade") A continuación, se abordan los doce principios de la animación:

    TabsA.color-acento-botones.mb-5(data-aos="fade-down")
      .tarjeta.color-secundario.p-4.px-lg-5.py-lg-5(titulo="1. Estirar y encoger")
        .row
          .col-md-6
            h4 1. Estirar y encoger
            p También llamado “Deformación”, es un principio que busca lograr extremos más expresivos y con más fuerza dramática.  Este sirve para reforzar la acción y tornarla más creíble y contundente. También resulta un factor esencial para crear una sensación de peso, tanto en la animación de cuerpos, como de objetos.
          .col-md-6
            figure
              img.mb-2(src='@/assets/curso/estirar_encoger.gif', alt='1. Estirar y encoger')

      .tarjeta.color-secundario.p-4.px-lg-5.py-lg-5(titulo="2. Anticipación")
        .row
          .col-md-6
            h4 2. Anticipación
            p Al tratarse, la animación de una secuencia de imágenes, es muy importante vincular una pose con las siguientes, al establecer una continuidad de acciones, por lo tanto, el principio de anticipación ayuda a guiar la mirada del observador al lugar donde está a punto de ocurrir una nueva acción; además de concatenar acciones al hacer previsible lo que va a suceder, también le añade suspenso y le propone a donde el espectador debe direccionar la atención para no perderse el comienzo de la próxima acción.
          .col-md-6
            figure
              img.mb-2(src='@/assets/curso/anticipacion.gif', alt='2. Anticipación') 

      .tarjeta.color-secundario.p-4.px-lg-5.py-lg-5(titulo="3. Puesta en escena")
        .row
          .col-md-6
            h4 3. Puesta en escena
            p La puesta en escena cubre varias áreas pero está vinculada principalmente con la actuación y cómo se la presenta en la pantalla; puntualmente, nos plantea que cada plano tiene un encuadre ideal y cada fotograma de la película debe ayudar a llevar la historia hacia su conclusión.  En todo caso, en la puesta en escena, debemos dejar claro el contexto e identificar las relaciones de los elementos y personajes con otros y su entorno.
          .col-md-6
            figure
              img.mb-2(src='@/assets/curso/puesta_escena.gif', alt='3. Puesta en escena')  

      .tarjeta.color-secundario.p-4.px-lg-5.py-lg-5(titulo="4. Acción directa y pose")
        .row
          .col-md-6
            h4 4. Acción directa y pose
            p Estos dos conceptos se deberían entender como dos técnicas de animación diferentes.  La “Acción directa” hace referencia a la creación de una animación de forma secuencial, cuadro a cuadro; la “Pose” se refiere a la creación de momentos o fotogramas clave para luego crear transiciones entre ellas.
          .col-md-6
            figure
              img.mb-2(src='@/assets/curso/accion_directa_pose_pose.gif', alt='4. Acción directa y pose')                     

      .tarjeta.color-secundario.p-4.px-lg-5.py-lg-5(titulo="5. Overlapping")
        .row
          .col-md-6  
            h4 5. Overlapping
            p También llamada “Acción continuada y superpuesta”, se refiere a que es realmente imposible establecer dónde termina una acción y donde termina la otra en razón a que los elementos de un sistema se mueven de forma asincrónica respondiendo a una jerarquía de su concatenación de acciones.  Por ejemplo, cuando un cuerpo finaliza su trayectoria, sus distintas partes tienen a continuar dicha trayectoria respondiendo a la inercia.
          .col-md-6
            figure
              img.mb-2(src='@/assets/curso/overlapping.gif', alt='5. Overlapping')

      .tarjeta.color-secundario.p-4.px-lg-5.py-lg-5(titulo="6. Easy in & Easy Out")
        .row
          .col-md-6
            h4 6. Easy in & Easy Out
            p Estos términos hacen referencia en su traducción a “Entradas y salidas suaves”, los cuales buscan que las animaciones sean más naturales y orgánicas y responde a la afectación de las propiedades físicas y orgánicas que afectan a todos los objetos, tales como la gravedad, la resistencia, la tensión y fricción, generando una aceleración y desaceleración progresiva.  
          .col-md-6
            figure
              img.mb-2(src='@/assets/curso/easy_in_easy_out.gif', alt='6. Easy in & Easy Out')    

      .tarjeta.color-secundario.p-4.px-lg-5.py-lg-5(titulo="7. Arcos")
        .row
          .col-md-6
            h4 7. Arcos
            p Al analizar cualquier movimiento orgánico notará que todas las acciones que lo componen describen arcos, suaves y cerrados, en donde todas las trayectorias resultan curvilíneas, teniendo en cuenta que no hay trayectorias rectas en los movimientos que realizan los seres vivos; esto provoca un tipo de movimiento muy característico, suave y armonioso.
          .col-md-6
            figure
              img.mb-2(src='@/assets/curso/arcos.gif', alt='7. Arcos')   

      .tarjeta.color-secundario.p-4.px-lg-5.py-lg-5(titulo="8. Acción secundaria")
        .row
          .col-md-6
            h4 8. Acción secundaria
            p La actuación de un personaje se refuerza realizando acciones secundarias que complementan y potencian la acción principal. Esta acción secundaria nunca debe estar más marcada que la acción principal ya que solo está para enfatizar, siempre buscando atraer la atención del espectador al lugar que nos interesa, sin distraer ni perder el objetivo principal.
          .col-md-6
            figure
              img.mb-2(src='@/assets/curso/accion_secundaria.gif', alt='8. Acción secundaria')   

      .tarjeta.color-secundario.p-4.px-lg-5.py-lg-5(titulo="9. Timing")
        .row
          .col-md-6
            h4 9. Timing
            p El principio de 
              italic Timing 
              | o Ritmo, se refiere a que el número de dibujos usados en un movimiento determina la mayor o menor extensión temporal de la acción en la pantalla. Esto afectará directamente en las emociones e intenciones que se procuran mostrar a través del lenguaje corporal del personaje.
          .col-md-6
            figure
              img.mb-2(src='@/assets/curso/timing.gif', alt='9. Timing')   

      .tarjeta.color-secundario.p-4.px-lg-5.py-lg-5(titulo="10. Exageración")
        .row
          .col-md-6
            h4 10. Exageración
            p En animación, la exageración muestra las expresiones y movimientos de un personaje u objeto de forma excesiva para acentuar su dramatismo y comicidad. Esto se deriva en la distorsión de la forma y movimiento del personaje u objeto.
          .col-md-6
            figure
              img.mb-2(src='@/assets/curso/exageracion.gif', alt='10. Exageración')

      .tarjeta.color-secundario.p-4.px-lg-5.py-lg-5(titulo="11. Solidez")
        .row
          .col-md-6
            h4 11. Solidez
            p Este principio se puede sintetizar en la premisa: cuanto mejor dibuje, más fácil resultará animar. Al ser capaz de dibujar al personaje en todas sus posiciones imaginables y puntos de vista, la animación resultará más creíble. Para ello es necesario tener una amplia comprensión y correcta aplicación de los conceptos básicos artísticos de perspectiva, volumen, peso, equilibrio e iluminación, entre otros, en referencia a la experiencia del observador en el mundo real.  
          .col-md-6
            figure
              img.mb-2(src='@/assets/curso/solidez.gif', alt='11. Solidez')    

      .tarjeta.color-secundario.p-4.px-lg-5.py-lg-5(titulo="12. Appeal")
        .row
          .col-md-6
            h4 12. Appeal
            p El Appeal se refiere a la personalidad y atractivo del personaje, fiel al significado etimológico de la palabra animación, que es dar ánima, dar alma, dar vida, el trabajo del animador es proveer al personaje la solidez y atractivo suficiente para que se cree y mantenga una conexión emocional con el espectador.  En definitiva, el principio de atractivo nos recuerda que la animación de un personaje debe definir su forma de ser, de moverse y sus estados emocionales. 
          .col-md-6
            figure
              img.mb-2(src='@/assets/curso/appeal.gif', alt='12. Appeal')                                                       






</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
