import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  banner:any
  iconWhatsaap:any
  cards:any = [
     {
      name:'Lucha 1',
      descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido',
      imagen:'https://img.freepik.com/foto-gratis/nino-corte-pelo-rosa-palabra-arcoiris-frente_1340-41699.jpg?w=1380&t=st=1695937387~exp=1695937987~hmac=8378a1ba65fbc47ef280be4a923ab3c55e0a1d1106f4ad015d36fb0b1c2f47f4',
      temas:[
        'tema',
        'tema',
        'tema',
        'tema'
      ]
    },
    {
      name:'Lucha2',
      descripcion:'dLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido', 
      imagen:'https://img.freepik.com/foto-gratis/hombre-que-experimenta-concepto-depresion_23-2150354954.jpg?w=740&t=st=1695999231~exp=1695999831~hmac=b15d1b4d8f626cb3ac3f914a13f79ee34ac8e58bf442363fed221342d8c64774',
      temas:[
        'tema',
        'tema',
        'tema',
        'tema'
      ]
    },
    {
      name:'Lucha 3',
      descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido',
      imagen:'https://img.freepik.com/foto-gratis/chico-triste-tiro-completo-sentado-suelo_23-2149583156.jpg?w=1380&t=st=1695999198~exp=1695999798~hmac=174167baf382c9daaf9b3c17ef698e134180ac331de53d7eafbb216671a10277',
      temas:[
        'tema',
        'tema',
        'tema',
        'tema'
      ]
    },
    {
      name:'Lucha 4',
      descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido',
      imagen:'https://img.freepik.com/foto-gratis/mujer-molesta-malas-noticias-carta-correo-electronico_1163-3864.jpg?w=1380&t=st=1695999157~exp=1695999757~hmac=fd98b759ba9f94754823c984f842190dfc61cc62c99ea9e9f5712aed9214683b',
      temas:[
        'tema',
        'tema',
        'tema',
        'tema'
      ]
    },
    {
      name:'Lucha 5',
      descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido',
      imagen:'https://img.freepik.com/foto-gratis/cadena-acero-entrelazada-es-simbolo-fuerza-generado-ia_188544-38345.jpg?w=1380&t=st=1695999012~exp=1695999612~hmac=1432d8258bc4209ccb56264b8e0900344c515638c183443304bc68290f47f1fd',
      temas:[
        'tema',
        'tema',
        'tema',
        'tema'
      ]
    },
    {
      name:'Lucha 5',
      descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido',
      imagen:'https://img.freepik.com/foto-gratis/cadena-acero-entrelazada-es-simbolo-fuerza-generado-ia_188544-38345.jpg?w=1380&t=st=1695999012~exp=1695999612~hmac=1432d8258bc4209ccb56264b8e0900344c515638c183443304bc68290f47f1fd',
      temas:[
        'tema',
        'tema',
        'tema',
        'tema'
      ]
    },
    {
      name:'Lucha 5',
      descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido',
      imagen:'https://img.freepik.com/foto-gratis/cadena-acero-entrelazada-es-simbolo-fuerza-generado-ia_188544-38345.jpg?w=1380&t=st=1695999012~exp=1695999612~hmac=1432d8258bc4209ccb56264b8e0900344c515638c183443304bc68290f47f1fd',
      temas:[
        'tema',
        'tema',
        'tema',
        'tema'
      ]
    },
    {
      name:'Lucha 5',
      descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido',
      imagen:'https://img.freepik.com/foto-gratis/cadena-acero-entrelazada-es-simbolo-fuerza-generado-ia_188544-38345.jpg?w=1380&t=st=1695999012~exp=1695999612~hmac=1432d8258bc4209ccb56264b8e0900344c515638c183443304bc68290f47f1fd',
      temas:[
        'tema',
        'tema',
        'tema',
        'tema'
      ]
    }
  ]
 
  ngOnInit(): void {
    this.banner = 'assets/img/11.webp'
    this.iconWhatsaap = 'assets/img/icon_whatsaap.png' 
  }

}
