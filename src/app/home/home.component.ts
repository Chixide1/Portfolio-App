import { Component } from '@angular/core';
import { NgxParticlesModule, NgParticlesService } from "@tsparticles/angular";
import { loadSlim } from "@tsparticles/slim";
import { Options } from "./particleOptions";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxParticlesModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  particleId = "tsparticles";
  particleOptions = Options;

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async engine => {
      console.log(engine);
      await loadSlim(engine);
    });
  }
}
