import { Component, Input } from '@angular/core';
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';
import { Usuario } from 'src/app/models/Usuario.model';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  usuario!: Usuario;

  @Input() idUsuarioAEditar!: Usuario;

  constructor(private usuarioService: UsuarioServiceService) { }

  ngOnInit() {
    console.log(this.idUsuarioAEditar);
    this.usuarioService.obtenerUnUsuario(this.idUsuarioAEditar.id)
    .subscribe((data) => {
      this.usuario = data;
      console.log(this.usuario);
    });
  }

}
