import { Injectable } from '@angular/core';

export interface Livre{
  id: number
  titre: string
}

@Injectable({
  providedIn: 'root'
})
export class LivreService {

   public getLivres(): Livre[] {
     return [

       {
       id: 1,
       titre:'la mère michel'
       },
       {
         id: 2,
         titre:'jaqui et  michel'
       }
     ]
   }
  constructor() { }


}
