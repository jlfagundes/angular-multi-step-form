import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFormModel } from 'src/app/model/domain/user-form-model';
import { UserFormDomainService } from 'src/app/services/user-form-domain.service';

@Component({
  selector: 'app-address-form-step',
  templateUrl: './address-form-step.component.html',
  styleUrls: ['./address-form-step.component.css']
})
export class AddressFormStepComponent {
  get userFormModel(): UserFormModel {
    return this.userFormDomainService.model;
  }

  constructor(
    private userFormDomainService: UserFormDomainService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {}

  goNext(): void {
    this.router.navigate(['..', 'topics'], { relativeTo: this.route});
  }
}
