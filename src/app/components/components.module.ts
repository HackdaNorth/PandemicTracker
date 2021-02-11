import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyUpdatesComponent } from './key-updates/key-updates.component';
import { OntarioComponent } from './ontario/ontario.component';


@NgModule({
  declarations: [KeyUpdatesComponent, OntarioComponent],
  imports: [
    CommonModule
  ],
  exports: [KeyUpdatesComponent, OntarioComponent]
})
export class ComponentsModule { }
