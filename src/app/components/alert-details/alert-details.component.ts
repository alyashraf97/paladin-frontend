import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { Alert } from '../../models/alert.model';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {
  alert: Alert;

  constructor(private route: ActivatedRoute, private alertService: AlertService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.alertService.getAlert(id).subscribe((alert: Alert) => {
      this.alert = alert;
    });
  }
}
