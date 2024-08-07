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
  addConsultant(name: string, firstLastname: string, secondLastname: string, email: string, what: number, rol: string, xpYears: number){
    let consult: Consultant;
    consult = {
      name: name,
      firstLastname: firstLastname,
      secondLastname: secondLastname, 
      email: email, 
      what: what,
      rol: rol, 
      xpYears: xpYears
    };
    this.consultList.push(consult);
  }
}
