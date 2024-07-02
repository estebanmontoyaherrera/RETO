
export interface User {
    tipoPersona: string;
    nombre: string;
    tipoEmpresa: string;
    sector: string;
    razonSocial?: string; // Opcional, solo para personas jurídicas
    correo: string;
    contrasena: string; 

  }
  