import { Component, Input, input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Consultant } from '../../consultant';

@Component({
  selector: 'app-template-consult',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './template-consult.component.html',
  styleUrl: './template-consult.component.css'
})
export class TemplateConsultComponent {
  @Input() consult!: Consultant;
}
