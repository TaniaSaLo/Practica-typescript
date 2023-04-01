import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleanos: Date;
    private _colorFavorito: string;
    private _sexo: string;
    private _direcciones: Direccion[];
    private _mails: Mail[];
    private _telefonos: Telefono[];
    private _notas: string;
  
    constructor(
      nombre: string,
      apellidos: string,
      edad: number,
      dni: string,
      cumpleanos: Date,
      colorFavorito: string,
      sexo: string,
      direcciones: Direccion[],
      mails: Mail[],
      telefonos: Telefono[],
      notas: string
    ) {
      this._nombre = nombre;
      this._apellidos = apellidos;
      this._edad = edad;
      this._dni = dni;
      this._cumpleanos = cumpleanos;
      this._colorFavorito = colorFavorito;
      this._sexo = sexo;
      this._direcciones = direcciones;
      this._mails = mails;
      this._telefonos = telefonos;
      this._notas = notas;
    }
  
    public set nombre(value: string) {
      this._nombre = value;
    }
    public set apellidos(value: string) {
      this._apellidos = value;
    }
    public set edad(value: number) {
      this._edad = value;
    }
    public set dni(value: string) {
      this._dni = value;
    }
    public set cumpleanos(value: Date) {
      this._cumpleanos = value;
    }
    public set colorFavorito(value: string) {
      this._colorFavorito = value;
    }
    public set sexo(value: string) {
      this._sexo = value;
    }
    public set direcciones(value: Direccion[]) {
      this._direcciones = value;
    }
    public set mails(value: Mail[]) {
      this._mails = value;
    }
    public set telefonos(value: Telefono[]) {
      this._telefonos = value;
    }
    public set notas(value: string) {
      this._notas = value;
    }
  
    public get nombre(): string {
      return this._nombre;
    }
    public get apellidos(): string {
      return this._apellidos;
    }
    public get edad(): number {
      return this._edad;
    }
    public get dni(): string {
      return this._dni;
    }
    public get cumpleanos(): Date {
      return this._cumpleanos;
    }
    public get colorFavorito(): string {
      return this._colorFavorito;
    }
    public get sexo(): string {
      return this._sexo;
    }
    public get direcciones(): Direccion[] {
      return this._direcciones;
    }
    public get mails(): Mail[] {
      return this._mails;
    }
    public get telefonos(): Telefono[] {
      return this._telefonos;
    }
    public get notas(): string {
      return this._notas;
    }
  }
    
  
    
  
  