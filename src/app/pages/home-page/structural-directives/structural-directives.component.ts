import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  imports: [],
  templateUrl: './structural-directives.component.html',
})
export class StructuralDirectivesComponent {
  isVisible = signal(true);

//condicional if
  toggleVisibility() {
    this.isVisible.update(v => !v);
  }

  //condicional switch
  viewMode = signal<'none' | 'list' | 'grid'>('none');

  setViewMode(mode: 'none' | 'list' | 'grid') {
    this.viewMode.set(mode);
  }


    //ciclo for
    users = signal([
      {id:1, name: 'Alice',role: 'admin'},  
      {id:2, name: 'Bob',role: 'user'},
      {id:3, name: 'Charlie',role: 'user'}
    ]);
 
}