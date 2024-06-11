import { Component } from '@angular/core';
import { NgxParticlesModule, NgParticlesService } from "@tsparticles/angular";
import { loadSlim } from "@tsparticles/slim";
import { Options } from "./particleOptions";
import { Container } from '@tsparticles/engine';

@Component({
  selector: '[app-home]',
  standalone: true,
  imports: [NgxParticlesModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  particleId = "tsparticles";
  particleOptions = Options;
  
  particlesLoaded(container: Container){
    console.log(container)
  }

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async engine => {
      await loadSlim(engine);
    });
  }
}
