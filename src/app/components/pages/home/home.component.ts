import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  banner:any
  cards:any = [
     {
      name:'Lucha 1',
      descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió',
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
      descripcion:'dLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió', 
      imagen:'https://img.freepik.com/foto-gratis/nino-corte-pelo-rosa-palabra-arcoiris-frente_1340-41699.jpg?w=1380&t=st=1695937387~exp=1695937987~hmac=8378a1ba65fbc47ef280be4a923ab3c55e0a1d1106f4ad015d36fb0b1c2f47f4',
      temas:[
        'tema',
        'tema',
        'tema',
        'tema'
      ]
    },
    {
      name:'Lucha 3',
      descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió',
      imagen:'https://img.freepik.com/foto-gratis/nino-corte-pelo-rosa-palabra-arcoiris-frente_1340-41699.jpg?w=1380&t=st=1695937387~exp=1695937987~hmac=8378a1ba65fbc47ef280be4a923ab3c55e0a1d1106f4ad015d36fb0b1c2f47f4',
      temas:[
        'tema',
        'tema',
        'tema',
        'tema'
      ]
    },
    {
      name:'Lucha 4',
      descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió',
      imagen:'https://img.freepik.com/foto-gratis/nino-corte-pelo-rosa-palabra-arcoiris-frente_1340-41699.jpg?w=1380&t=st=1695937387~exp=1695937987~hmac=8378a1ba65fbc47ef280be4a923ab3c55e0a1d1106f4ad015d36fb0b1c2f47f4',
      temas:[
        'tema',
        'tema',
        'tema',
        'tema'
      ]
    },
    {
      name:'Lucha 5',
      descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió',
      imagen:'https://img.freepik.com/foto-gratis/nino-corte-pelo-rosa-palabra-arcoiris-frente_1340-41699.jpg?w=1380&t=st=1695937387~exp=1695937987~hmac=8378a1ba65fbc47ef280be4a923ab3c55e0a1d1106f4ad015d36fb0b1c2f47f4',
      temas:[
        'tema',
        'tema',
        'tema',
        'tema'
      ]
    }
  ]
 
  ngOnInit(): void {
    this.banner = 'assets/img/chains2.jpg'
  }

}
