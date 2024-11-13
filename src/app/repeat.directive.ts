// to access and manipulate DOM elements with our  custom directive these imports are needed
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';


@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {

  // inject TemplateRef and ViewContainerRef into the directive's constructor
  // to create instances of each
  constructor(private templateRef:TemplateRef<any>, private viewContainerRef:ViewContainerRef) { }

  @Input() set appRepeat(count: number) {
      
  }

}
