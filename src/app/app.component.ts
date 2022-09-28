import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public valeurCompteurPere: number = 0
  public compteurArray: number[] = [];

  public incrementCounter(): void {
    this.valeurCompteurPere = this.valeurCompteurPere + 1;
    this.calculateArray();
    console.log(this.valeurCompteurPere);


  }

  public decrementCounter(): void {
    if (this.valeurCompteurPere >0) {
      this.valeurCompteurPere -= 1;
      console.log(this.valeurCompteurPere)
      this.calculateArray();
    }
  }

  public resetCounter(newValue: number){
    this.valeurCompteurPere = newValue;
    this.calculateArray();
  }

  private calculateArray(): void{
    this.compteurArray = [];
    for (let i = 0; i < this.valeurCompteurPere; i++) {
      this.compteurArray.push(i);
    }
  }
}

