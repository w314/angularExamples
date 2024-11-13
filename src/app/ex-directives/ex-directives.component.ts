import { Component } from '@angular/core';


type Book = {
  title: string,
  rating: number
}

@Component({
  selector: 'app-ex-directives',
  templateUrl: './ex-directives.component.html',
  styleUrls: ['./ex-directives.component.css']
})


export class ExDirectivesComponent {
  
  // array for *ngFor example
  books: Book[] = [{title:'Great stories', rating: 5.3}, {title: 'Really short stories', rating: 4.8}];

  // styles for ngStyle example 1
  colorName = "blue";
  fontWeight = 600;
  borderStyle = '1px solid black';

  isBlue = true;
  isCapitalized = true;
  letItBlue = "blueColored";
}
