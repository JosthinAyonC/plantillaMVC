import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';
import { Usuario } from 'src/app/models/Usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  //usuario que va a ser obtenido para extraer el id cuando presione el boton eliminar/editar
  usuarioSeleccionado!: Usuario;
  usuarioIdSeleccionado!: number;

  //funcion lista para ser exportada
  obtenerUsuario(usuario: Usuario){
    this.usuarioSeleccionado = usuario;
  }
  obtenerUsuarioId(usuario: Usuario){
    this.usuarioIdSeleccionado = usuario.id;
    return this.usuarioIdSeleccionado;
  }
  // usuarios: Observable<Usuario[]> = new Observable<Usuario[]>();
  constructor(private usuarioService: UsuarioServiceService, private router:Router) { }
  
  usuarios: Usuario[] = [];
  ngOnInit() {
    // this.usuarios = this.usuarioService.listar();
    this.usuarioService.listar()
    .subscribe((data: Usuario[]) => {
      this.usuarios = data.filter((usuario: Usuario) => usuario.estado);
    });
  }
  delete(id: number) {
    this.usuarioService.eliminar(id)
    .subscribe((data: Usuario[]) => {
      this.usuarios = data.filter((usuario: Usuario) => usuario.estado);
    });
  }
  onUsuarioGuardado(usuario: Usuario) {
    this.usuarios.push(usuario);
  }
}
