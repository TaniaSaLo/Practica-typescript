export class Telefono {
    private _tipo: string;
    private _numero: string;
  
    constructor(
    tipo: string, 
    numero: string) 
    {
      this._tipo = tipo;
      this._numero = numero;
    }
  
    get tipo(): string {
      return this._tipo;
    }
  
    get numero(): string {
      return this._numero;
    }
  
    set tipo(value: string) {
      this._tipo = value;
    }
  
    set numero(value: string) {
      this._numero = value;
    }
    
}