import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fattura } from '../../interface/fattura.interface';
import { TurnoverServiceService } from '../../service/turnover-service.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-fattura',
  templateUrl: './fattura.component.html',
  styleUrls: ['./fattura.component.scss']
})
export class FatturaComponent {
  constructor(private turnoverService: TurnoverServiceService) { }
  inviaFattura(form: NgForm){
    if (form.valid) {
      const turnover: Fattura = form.value;

      const dataFattura = formatDate(turnover.date, 'yyyy-MM-dd', 'en-US');
        
      turnover.date = new Date(dataFattura);

      this.turnoverService.saveTurnover(turnover).subscribe(
        response => {
          console.log('Fattura inviata con successo:', response);
  
        },
        error => {
          console.error('Errore nell\'invio della fattura:', error);
  
        }
      );
    } else {
      console.error('Il modulo non è valido');
    }
  }


  
  }

