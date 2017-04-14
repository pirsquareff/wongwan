import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './login.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [LoginRoutingModule, SharedModule],
  exports: [],
  declarations: [LoginComponent],
  providers: [LoginService],
})
export class LoginModule { }
