import { Component } from '@angular/core';
import { UserFormModel } from 'src/app/model/domain/user-form-model';
import { UserFormDomainService } from 'src/app/services/user-form-domain.service';

@Component({
  selector: 'app-form-result',
  templateUrl: './form-result.component.html',
  styleUrls: ['./form-result.component.css']
})
export class FormResultComponent {
  get userFormModel(): UserFormModel {
    return this.userFormDomainService.model;
  }

  constructor(
    private userFormDomainService: UserFormDomainService
  ) { }
  ngOnInit(): void {}
}
