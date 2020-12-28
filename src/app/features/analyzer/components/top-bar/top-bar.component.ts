import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FacadeService } from '../../../../services/facade.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  agents: Observable<any> | undefined;
  selectedAgent: any;
  calls: Observable<any> | undefined;
  selectedCall: any;

  constructor(private facadeService: FacadeService) {}

  ngOnInit(): void {
    this.agents = this.facadeService.getAgents();
    this.calls = this.facadeService.getCalls();
  }
}
