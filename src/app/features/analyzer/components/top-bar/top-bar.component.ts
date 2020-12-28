import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  slider: number | null = 38;
  showData = false;

  @Output() toggle = new EventEmitter<boolean>();

  constructor(private facadeService: FacadeService) {}

  ngOnInit(): void {
    this.agents = this.facadeService.getAgents();
    this.calls = this.facadeService.getCalls();
  }

  select(): void {
    if (this.selectedAgent && this.selectedCall) {
      this.showData = true;
      this.toggle.emit(true);
    }
  }
}
