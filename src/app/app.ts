import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ContactModal } from './components/contact-modal/contact-modal';
import { CompanyModal } from './components/company-modal/company-modal';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Header, Footer, ContactModal, CompanyModal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
