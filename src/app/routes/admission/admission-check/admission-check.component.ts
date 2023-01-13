import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateBrService } from 'ngx-validate-br';
import { faUser, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { AdmissionFooterButton } from '../components/admission-footer/admission-footer.dto';

@Component({
  selector: 'app-admission-check',
  templateUrl: './admission-check.component.html',
  styleUrls: ['./admission-check.component.scss'],
})
export class AdmissionCheckComponent {
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

  showResult: boolean = false;

  defaultButton: AdmissionFooterButton = {
    title: 'Dicas para abertura da conta',
    style: 'bordered',
  };

  footerButtons: AdmissionFooterButton[] = [this.defaultButton];

  constructor(private validateBrService: ValidateBrService) {
    // Crio o meu form group com a construção do component
    this.formGroup = this.defaultFormGroup;
  }

  // Get no input de CPF
  get cpf() {
    return this.formGroup.get('cpf');
  }

  async proceed(): Promise<void> {
    this.loading = !this.loading;

    if (!this.formGroup.invalid) {
      //Simulando tempo de uma requisição
      await new Promise((p) => setTimeout(p, 1000));

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

    this.formGroup = this.defaultFormGroup;

    this.footerButtons = [this.defaultButton];
  }
}
