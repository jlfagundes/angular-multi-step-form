import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFormModel } from 'src/app/model/domain/user-form-model';
import { UserFormDomainService } from 'src/app/services/user-form-domain.service';

@Component({
  selector: 'app-topics-form-step',
  templateUrl: './topics-form-step.component.html',
  styleUrls: ['./topics-form-step.component.css']
})
export class TopicsFormStepComponent {
  get userFormModel(): UserFormModel {
    return this.userFormDomainService.model;
  }

  get availableTopics(): string[] {
    return [
      'Java',
      'C#',
      'TypeScript',
      'C++',
      'C',
      'Python',
      'Ruby',
      'SQL'
    ];
  }

  constructor(
    private userFormDomainService: UserFormDomainService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {}

  goNext(): void {
    this.router.navigate(['..', 'result'], { relativeTo: this.route});
  }
}
