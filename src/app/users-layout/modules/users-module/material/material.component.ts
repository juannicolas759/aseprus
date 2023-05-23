import { Component } from '@angular/core';

interface ItemData {
  price: string;
  title : string;
  payMethods: Pay[];
  process: string;
}

interface Pay{
  name: string,
  number: number
}

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {

  data: ItemData[] = [];

  ngOnInit(): void {
    this.loadData(1);
  }

  loadData(pi: number): void {
    this.data = [{
      price: '100.000 COP',
      title : 'Normativa, Formatos y Plantilla INVIAS 2008 | CIVIL 3D',
      payMethods: [{
        name: 'Nequi',
        number: 3162882034
      },
       {
        name: 'Daviplata',
        number: 3162882034
      },
      {
       name: 'Ahorros Bancolombia',
       number: 25847777802
     }],
     process: 'Solicita el acceso al correo aseprusboyaca@gmail.com adjuntando el comprobante de pago'
      
    },
    {
      price: '150.000 COP',
      title : 'PLACA-HUELLA DEFINITIVA | PERALTE Y SOBREANCHO | CIVIL 3D',
      payMethods: [{
        name: 'Nequi',
        number: 3162882034
      },
       {
        name: 'Daviplata',
        number: 3162882034
      },
      {
       name: 'Ahorros Bancolombia',
       number: 25847777802
     }],
     process: 'Solicita el acceso al correo aseprusboyaca@gmail.com adjuntando el comprobante de pago'
      
    }
  ]
      
    
  }


}
