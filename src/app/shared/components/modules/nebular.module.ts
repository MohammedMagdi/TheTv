import { NgModule } from '@angular/core';
import { NbContextMenuModule, NbMenuModule, NbCardModule, NbButtonModule, NbIconModule, NbSpinnerModule, NbAlertModule } from '@nebular/theme';

@NgModule({
    imports: [
    ],
    exports: [
        NbContextMenuModule,
        NbMenuModule,
        NbCardModule,
        NbButtonModule,
        NbIconModule,
        NbSpinnerModule,
        NbAlertModule
    ]
})
export class NebularModule { }