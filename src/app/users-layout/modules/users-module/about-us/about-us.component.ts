import { Component, OnInit } from '@angular/core';

interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
  image: string;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  data: ItemData[] = [];


  ngOnInit(): void {
    this.loadData(1);
  }

  loadData(pi: number): void {
    this.data = [{
      href: '',
      title: `NOSOTROS`,
      avatar: '',
      description: '',
      content:
        'Asesorías en Planeación Rural Sostenible: ASEPRUS - BOYACÁ Somos una empresa joven con experiencia en asesoría y acompañamiento en proyectos del sector rural, dentro de estos se busca generar soluciones sostenibles por medio del manejo holístico, entendido este como una planificación que incluye el impacto al ecosistema, las comunidades, la eficiencia y la calidad del desarrollo de proyectos de ingeniería',
        image: '../assets/campo.jpg'
    },
    {
      href: '',
      title: `CONCEPTO DE NEGOCIO`,
      avatar: '',
      description: '',
      content:
        'El concepto del proyecto desprende de su propio nombre “Asesorías en Planeación”, es decir cada proyecto cuenta con una administración personalizada definido desde un manejo holístico de sostenibilidad. Por ejemplo: si una familia, empresa o institución requiere de la caracterización del suelo y definición de un sistema de riego: las actividades partirían de un manejo preliminar de conocimiento del ecosistema, consulta de convocatorias de apoyo en el municipio o departamental a una posterior cotización del trabajo final, una vez aceptada la cotización en la ejecución, la planeación requiere de topografía, estudio hídrico y de suelos para finalmente generar un informe y sustentación de alternativas de cultivo y sistemas de riego. Con esto la unidad familiar, empresa o institución puede plantear un plan de cultivo con bases técnicas generando empleo, desarrollo social, económico y sostenibilidad tanto para la comunidad beneficiada como al ambiente afectado. Un manejo similar, pero con enfoque individual varia por cada proyecto en distintas escalas de complejidad',
        image: '../assets/negocio.jpg'
    },
    {
      href: '',
      title: `MISION`,
      avatar: '',
      description: '',
      content:
        'Proveer servicios de asesoría y actividades de consultoría técnica con calidad y eficiencia, estableciendo procesos de planeación sostenible para cada proyecto intervenido. En ASEPRUS nuestros clientes cuentan con acompañamiento cercano e individual sin perder de vista el bien común y colectivo de desarrollo y sostenibilidad rural para le región y el país',
        image: '../assets/mision.jpg'
    },
    {
      href: '',
      title: `VISION`,
      avatar: '',
      description: '',
      content:
'Nuestra visión es ser la empresa líder en el departamento de Boyacá en prestación de servicios de apoyo, asesoría y acompañamiento técnico a proyectos rurales, conformando una red de especialistas, profesionales, técnicos y personal capacitado en planeación de proyectos de alto impacto para la región. ',
        image: '../assets/vision.jpg'
    },
    {
      href: '',
      title: `IMPACTO SOCIAL Y AMBIENTAL`,
      avatar: '',
      description: '',
      content:'ASEPRUS busca generar un impacto positivo en el sector rural, dentro de la planeación sostenible se encuentran enmarcados los componentes sociales y ambientales que involucran cada proyecto, y desde el manejo holístico se incluye el ecosistema, personas, infraestructura y sus cambios como un todo.  ',
              image: '../assets/impacto.jpg'
    },
  ]
      
    
  }

}
