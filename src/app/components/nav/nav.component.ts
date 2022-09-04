import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // Bandera
  activeMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Bandera para activar o inactivar botón
  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

}
