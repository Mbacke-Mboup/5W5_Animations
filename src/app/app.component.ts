import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from "@angular/animations";
import { jackInTheBox, pulse, shakeX } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('death', [transition(':decrement', useAnimation(shakeX, { params: { timing: 0.5 } }))]),
    trigger('attack', [transition(':increment', useAnimation(jackInTheBox, { params: { timing: 0.5, scale: 4.5 } }))]),

  ]
})
export class AppComponent implements OnInit {
  slimeIsPresent = 0;
  slimeAttacks = 0;

  ngOnInit(): void {
  }

  constructor() {
  }

  spawn() {
    this.slimeIsPresent = 1;
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeOut");
    element?.classList.add("fadeIn");
  }

  death() {
    this.slimeIsPresent = 0;
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeIn");
    element?.classList.add("fadeOut");
  }

  attack() {
    // TODO Jouer une animation et augmenter l'intensité du mouvement avec scale
    this.slimeAttacks++;
    // TODO Jouer une autre animation avant
  }

  hit() {
    // TODO Utilisé Animista pour faire une animation différente avec css (wobble)
  }

  showSlime() {

  }
}
