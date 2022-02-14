import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado !: string;

  borrarHeroe(): void {
    console.log("Borrando...");
    //this.heroes.pop();
    this.heroeBorrado = this.heroes.shift()!;
  }

}