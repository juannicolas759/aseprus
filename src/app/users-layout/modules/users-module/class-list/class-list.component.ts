import { Component } from '@angular/core';

interface ItemData {
  idClass: number;
  title: string;
  description: string;
  warning: string;
  imgUrl: string;
}

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent {
  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  data: ItemData[] = [];

  ngOnInit(): void {
    this.loadData(1);
  }

  loadData(pi: number): void {
    this.data = [{
      idClass:1,
      title: 'AUTODESK CIVIL 3D Y AUTOCAD BÁSICO',
      description: 'El curso cuenta con 8 sesiones grabadas con aplicación de conceptos básicos de Civil 3D, AutoCAD y otros software con un enfoque en Topografía y Diseño Geométrico de Vías. Las clases están dirigidas a profesionales y estudiantes principiantes en el área.',
      warning: 'IMPORTANTE: Antes de realizar la inscripción revisa el contenido del curso y el video presentación',
      imgUrl: '../assets/3d.png'

    },
    {
      idClass: 2,
      title: 'DIPLOMADO VIRTUAL EN CIVIL 3D: TOPOGRAFÍA Y DISEÑO GEOMÉTRICO DE VÍAS',
      description: 'Apertura de inscripciones al Diplomado en Civil 3D, ofrecido por la Universidad Pedagógica y Tecnológica de Colombia',
      warning: 'Ingresa y obten mas información',
      imgUrl: '../assets/diplomado.png'

    }

    ]


  }

}
