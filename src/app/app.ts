import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Oficina Virtual · ensayo');
  protected readonly ambiente = signal('cargando…');

  async ngOnInit(): Promise<void> {
    // La configuración del ambiente se lee en tiempo de ejecución (la provee el servidor).
    try {
      const respuesta = await fetch('assets/config/config.json');
      this.ambiente.set((await respuesta.json()).ambiente ?? 'sin dato');
    } catch {
      this.ambiente.set('sin configuración');
    }
  }
}
