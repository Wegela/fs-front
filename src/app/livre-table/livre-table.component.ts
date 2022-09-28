import { Component, OnInit } from '@angular/core';
import {Livre, LivreService} from "../service/livre-service.service";

@Component({
  selector: 'app-livre-table',
  templateUrl: './livre-table.component.html',
  styleUrls: ['./livre-table.component.css']
})
export class LivreTableComponent implements OnInit {
  public  livres : Livre[] = [];
  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
    this.livres = this.livreService.getLivres();
  }

}
