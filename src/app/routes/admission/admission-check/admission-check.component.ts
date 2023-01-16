import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateBrService } from 'ngx-validate-br';
import {
  faUser,
  faCreditCard,
  faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { AdmissionFooterButton } from '../components/admission-footer/admission-footer.dto';
import { AdmissionCheckService } from './admission-check.service';
import { Subscription } from 'rxjs';
import User from 'src/app/shared/models/user';

@Component({
  selector: 'app-admission-check',
  templateUrl: './admission-check.component.html',
  styleUrls: ['./admission-check.component.scss'],
})
export class AdmissionCheckComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;

  defaultFormGroup: FormGroup = new FormGroup({
    // Validar campo obrigatório e válido
    cpf: new FormControl('', [Validators.required, this.validateBrService.cpf]),
  });

  loading: boolean = false;

  buttonActivated: boolean = true;

  faUser = faUser;

  faCheckCircle = faCheckCircle;

  faCreditCard = faCreditCard;

  faXmarkCircle = faXmarkCircle;

  showResult: boolean = false;

  defaultButton: AdmissionFooterButton = {
    title: 'Dicas para abertura da conta',
    style: 'bordered',
  };

  footerButtons: AdmissionFooterButton[] = [this.defaultButton];

  selectedUser: User | undefined;

  userSubscription: Subscription = new Subscription();

  constructor(
    private validateBrService: ValidateBrService,
    private admissionCheckService: AdmissionCheckService
  ) {
    // Crio o meu form group com a construção do component
    this.formGroup = this.defaultFormGroup;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  // Get no input de CPF
  get cpf() {
    return this.formGroup.get('cpf');
  }

  async proceed(): Promise<void> {
    this.loading = !this.loading;

    if (!this.formGroup.invalid) {
      //Simulando tempo de uma requisição
      await this.getUser();

      //Desativa o botão e verifica se o resultado pode ser exibido
      this.buttonActivated = false;
      this.showResult = true;

      this.footerButtons = [
        {
          title: 'Iniciar nova adminissão',
          style: 'default',
          action: () => this.reset(),
        },
        this.defaultButton,
      ];
    }

    this.loading = !this.loading;
  }

  reset(): void {
    this.buttonActivated = true;

    this.showResult = false;

    this.selectedUser = undefined;

    this.cpf?.setValue('');

    this.footerButtons = [this.defaultButton];
  }

  async getUser(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.userSubscription = this.admissionCheckService
        .getUser(this.cpf?.value)
        .subscribe((u) => {
          if (!!u) {
            this.selectedUser = new User(
              u.id,
              u.name,
              u.last_name,
              u.status,
              u.application_account,
              u.checking_account,
              u.cpf
            );
          }

          resolve();
        });
    });
  }
}
