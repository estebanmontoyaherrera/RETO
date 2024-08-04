import { Injectable } from '@angular/core';
import { Consultant } from './consultant';

@Injectable({
  providedIn: 'root'
})
export class ConsultantListService {

  constructor() { }
  consultList: Consultant[] = [
    {
      name: "Miguel Anjel", 
      firstLastname: "Salazar", 
      secondLastname: "Jaramillo", 
      email: "mi@gmail.com", 
      what: 123456, 
      rol: "Profesor", 
      xpYears: 5
    }, 
    {
      name: "Esteban", 
      firstLastname: "Hurtado", 
      secondLastname: "Mejía", 
      email: "este@gmail.com", 
      what: 123456, 
      rol: "Decano", 
      xpYears: 5
    }
  ];
  getAllConstultant(): Consultant[]{
    return this.consultList;
  }
}
