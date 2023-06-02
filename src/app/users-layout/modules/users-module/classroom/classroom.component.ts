import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';

declare var YT: any;

interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}

interface Plan {
  key: string;
  quantity: number;
  price: string;
}
@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})

export class ClassroomComponent implements OnInit, OnDestroy {


  videoUrl = '';
  id: any = null;
  player: any;
  data: ItemData[] = [];
  loaded: boolean = false;
  actualData!: ItemData;
  size: NzButtonSize = 'large';

  listOfData: Plan[] = [
    {
      key: '1',
      quantity: 3,
      price: '25000',
    }, {
      key: '2',
      quantity: 3,
      price: '49000',
    }, {
      key: '3',
      quantity: 3,
      price: '72000',
    }, {
      key: '4',
      quantity: 3,
      price: '93000',
    }, {
      key: '5',
      quantity: 3,
      price: '114000',
    }, {
      key: '6',
      quantity: 3,
      price: '134000',
    }, {
      key: '7',
      quantity: 3,
      price: '152000',
    }, {
      key: '8',
      quantity: 3,
      price: '170000',
    },
  ];

  constructor(private modal: NzModalService, private storage: Storage, private router: Router, private aRoute: ActivatedRoute) { }


  async ngOnInit(): Promise<void> {
    this.id = await this.aRoute.snapshot.paramMap.get('id');
    this.loadData(1);
    await this.getData(this.id-1)
    this.getVideo();
  }

  changeId(id: string) {
    this.id = parseInt(id)
    this.loaded = false
    this.getData(this.id-1)
    this.getVideo()
    
  }

  getData(id:number){
    this.actualData = this.data[id]
  }

  getVideo() {
    var aux = this.data[this.id - 1].title.replace(':', ' -').replace('.', '')
    const videoRef = ref(this.storage, '/Civil_3D_basico/' + aux + '.mp4');
    getDownloadURL(videoRef).then(respose => {
      this.videoUrl = respose;
      this.loaded = true;

    }).catch(error => console.error());
  }

  info(): void {
    this.modal.info({
      nzTitle: 'INSCRIPCIÓN Y FORMA DE PAGO',
      nzContent: 'Los medios de pago corresponden a las cuentas <br> Nequi: 3162882034 <br> Daviplata: 3162882034 <br> Ahorros Bancolombia: 25847777802 Para formalizar la inscripción el participante deberá tener a la mano el soporte de pago de acuerdo a las clases que va a tomar y completar la información en el siguiente formulario: <a>https://forms.gle/Fqnrjyx5bLo659QL9</a> ',
      nzOnOk: () => console.log('Info OK')
    });
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
      console.log(currentUrl);
    });
  }

  loadData(pi: number): void {
    this.data = [{
      href: '1',
      title: `Clase 1: Configuración inicial, interfaz y sistemas de coordenadas.`,
      avatar: '../assets/LOGO-RECORTADO.png',
      description: 'Se presenta la configuración inicial que debe hacerse en el equipo para el uso de Civil 3D.',
      content:
        'Adicionalmente se identificarán los principales componentes de la interfaz del programa comparando AutoCAD con Civil 3D, finalmente se explica ' +
        'la metodología para geolocalizar un proyecto haciendo énfasis en los principales sistemas de coordenadas usados en proyectos de Colombia.'
    },
    {
      href: '2',
      title: `Clase 2: Interfaz y comandos básicos de dibujo de AutoCAD`,
      avatar: '../assets/LOGO-RECORTADO.png',
      description: 'La clase presenta procedimientos básicos de dibujo en AutoCAD, capas, bloques, comandos y configuración de acuerdo a INVIAS.',
      content:
        'Su principal aplicación radica en tener bases suficientes para manejos posteriores en topografía y diseño geométrico de vías.'
    }, {
      href: '3',
      title: `Clase 3: Interfaz y puntos topográficos en Civil 3D.`,
      avatar: '../assets/LOGO-RECORTADO.png',
      description: 'Cajas de herramientas y ventanas dentro de Civil 3D.',
      content:
        'Introducción inicial a las funciones, pestañas, cajas de herramientas y ventanas dentro de Civil 3D, así como el concepto, cargue y edición de puntos topográficos al software'
    },
    {
      href: '4',
      title: `Clase 4: Superficies y explanaciones`,
      avatar: '../assets/LOGO-RECORTADO.png',
      description: 'Superficies en Civil 3D.',
      content:
        'Creación de superficies a partir de puntos y curvas de nivel, edición de superficies, introducción a líneas características y generación de explanaciones.'
    },
    {
      href: '5',
      title: `Clase 5: Diseño en Planta`,
      avatar: '../assets/LOGO-RECORTADO.png',
      description: ' ',
      content:
        'Definición de un alineamiento, revisión de conceptos de normatividad, diseño de curvas circulares y espiralizadas, definición y generación de peralte, edición de estilos y etiquetas en planta'
    },
    {
      href: '6',
      title: `Clase 6: Diseño en Perfil`,
      avatar: '../assets/LOGO-RECORTADO.png',
      description: '',
      content:
        'Definición de la rasante, revisión de conceptos de normatividad, diseño de curvas verticales, edición de estilos y etiquetas en perfil.'
    },
    {
      href: '7',
      title: `Clase 7: Diseño en Sección y Corredor`,
      avatar: '../assets/LOGO-RECORTADO.png',
      description: '',
      content:
        'Diseño de la sección transversal, revisión de conceptos de normatividad y generación del corredor.'
    },
    {
      href: '8',
      title: `Clase 8: Presentación de planos y escalas`,
      avatar: '../assets/LOGO-RECORTADO.png',
      description: ' ',
      content:
        'Edición de estilos y etiquetas para la presentación de planos, conceptualización de las ventanas gráficas y escalas.'
    }

    ];
  }

  ngOnDestroy(): void {
    console.log('cancelo la sub');
   
  }
}