import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {
    
  emailcontato: string | null  = ''
  
  constructor(private route: ActivatedRoute){
      
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    this.emailcontato = routeParams.get('email')
  }


}
