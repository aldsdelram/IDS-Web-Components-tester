import {
  Component,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  ElementRef,
} from '@angular/core';
import 'ids-enterprise-wc/enterprise-wc.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';
  mode = 'dark';

  @ViewChild('template', { static: true }) template!: TemplateRef<unknown>;

  selector = '';
  constructor(
    private viewContainerRef: ViewContainerRef,
    element: ElementRef,
  ) {
    this.selector = element.nativeElement.tagName.toLowerCase();
  }

  changeMode() {
    this.mode = this.mode === 'dark' ? 'light' : 'dark';
  }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
    this.viewContainerRef.element.nativeElement.remove();
  }
}
