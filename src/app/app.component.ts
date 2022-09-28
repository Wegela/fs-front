import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public valeurCompteurPere: number = 0

  public incrementCounter(): void {
    this.valeurCompteurPere = this.valeurCompteurPere + 1;
    console.log(this.valeurCompteurPere)
  }

  public decrementCounter(): void {
    if (this.valeurCompteurPere >0) {
      this.valeurCompteurPere -= 1;
      console.log(this.valeurCompteurPere)
    }
  }

  public resetCounter(newValue: number){
    this.valeurCompteurPere = newValue;
  }
}
