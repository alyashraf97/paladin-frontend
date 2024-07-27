import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: any;

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsService.getSettings().subscribe((settings: any) => {
      this.settings = settings;
    });
  }

  saveSettings(): void {
    this.settingsService.saveSettings(this.settings).subscribe(() => {
      // Handle success
    });
  }
}
