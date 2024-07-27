import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from '../../services/case.service';
import { Case } from '../../models/case.model';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.css']
})
export class CaseDetailsComponent implements OnInit {
  case: Case;

  constructor(private route: ActivatedRoute, private caseService: CaseService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.caseService.getCase(id).subscribe((case: Case) => {
      this.case = case;
    });
  }
}
