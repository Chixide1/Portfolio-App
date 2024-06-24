import {
    Directive,
    ElementRef,
    Renderer2,
    OnInit,
    Input,
    Output,
    EventEmitter,
  } from '@angular/core';
  
  @Directive({
    selector: '[observe]',
    standalone: true
  })
  export class ObserveDirective implements OnInit {
    @Input() thresholdMax = 0.8;
    @Input() thresholdMin = 0.4;
    @Input() className = 'visible';
    @Output() isVisible = new EventEmitter<string>();
  
    constructor(private element: ElementRef, private renderer: Renderer2) {}
  
    ngOnInit() {
      this.createObserver();
    }
  
    addClassName(className: string) {
      this.renderer.addClass(this.element.nativeElement, className);
      this.isVisible.emit();
    }
  
    createObserver() {
      const options = {
        threshold: [this.thresholdMin, this.thresholdMax],
      };
  
      const callback = (entries: any[]) => {
        entries &&
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.addClassName(this.className);
            }
          });
      };
  
      const observer = new IntersectionObserver(callback, options);
      const target = this.element.nativeElement;
      target && observer.observe(target);
    }
  }
  