import { Component, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {
  
  @Output() guardarUsuario = new EventEmitter<Usuario>();

  usuario!: Usuario; // crea una instancia del modelo Usuario

  constructor() { }

  onSubmit() {
    this.guardarUsuario.emit(this.usuario);   
     
  }
}
