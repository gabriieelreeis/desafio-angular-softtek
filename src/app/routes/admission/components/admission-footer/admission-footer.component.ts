import { Component, Input, OnInit } from '@angular/core';
import { AdmissionFooterButton } from './admission-footer.dto';

@Component({
  selector: 'app-admission-footer',
  templateUrl: './admission-footer.component.html',
  styleUrls: ['./admission-footer.component.scss'],
})
export class AdmissionFooterComponent {
  @Input() buttons: AdmissionFooterButton[] = [];
}
