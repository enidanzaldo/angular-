import { NgClass, NgStyle } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-attribute-directives-page',
  imports: [NgClass, NgStyle],
  templateUrl: './attribute-directives-page.component.html',
})
export class AttributeDirectivesPageComponent { 
  tittle = 'Attribute Directives ';
  state = signal<'active' | 'error' | 'neutral'>('neutral');

  mesaage = computed(() => {
    switch(this.state()){
      case 'active':
        return 'The current state is active';
      case 'error':
        return 'The current state is error';
      case 'neutral':
        return 'The current state is neutral';
    }
  });

  setactive(){
    this.state.set('active');
  }

  seterror(){
    this.state.set('error');
  }

  setneutral(){
    this.state.set('neutral');
  } 
}
