

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { UserModule } from 'src/app/shared/user/user.module';
import { TableModule } from 'src/app/shared/table/table.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserModule,
    TableModule,
    RouterModule.forRoot([
    ])
  ],
  declarations: [
  ],
  exports: [

  ]
})
export class HomeModule {}
