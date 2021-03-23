import { Component } from '@angular/core';
import { DataService } from '@shared/services/data.service';

@Component({
  selector: 'app-episodes',
  template: `
  <section class="container">
  <ul class="episodes__list">
    <li *ngFor = "let episode of episodes$ | async">
      {{episode.episode}} - {{episode.name}}
    </li>
  </ul>
</section>
  `,
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {


  constructor(
    private dataSvc: DataService
    ) { }

    episodes$= this.dataSvc.episodes$;
}
