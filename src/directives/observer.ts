import {
    Directive,
    ElementRef,
    Renderer2,
    OnInit,
    Input,
    Output,
    EventEmitter,
  } from '@angular/core';
  import { Subject } from 'rxjs';
  
  @Directive({
    selector: '[observe]',
    standalone: true
  })
  export class ObserveDirective implements OnInit {
    @Input() thresholdMax = 0.8;
    @Input() thresholdMin = 0.4;
    @Output() isVisible = new EventEmitter<string>();
  
    constructor(private element: ElementRef, private renderer: Renderer2) {}
  
    //TODO: possibly implement debouncing
  
    ngOnInit() {
      this.createObserver();
    }
  
    addClassName(className: string) {
      this.renderer.addClass(this.element.nativeElement, className);
      this.isVisible.emit();
    }
  
    removeClassName(className: string) {
      if (this.element.nativeElement.classList.contains(className)) {
        this.renderer.removeClass(this.element.nativeElement, className);
      }
    }
  
    createObserver() {
      const options = {
        threshold: [this.thresholdMin, this.thresholdMax],
      };
  
      const callback = (entries: any[]) => {
        entries &&
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.addClassName('visible');
            } else {
              this.removeClassName('visible');
            }
          });
      };
  
      const observer = new IntersectionObserver(callback, options);
      const target = this.element.nativeElement;
      target && observer.observe(target);
    }
  }
  