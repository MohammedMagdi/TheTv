import { Injectable } from '@angular/core';
import { NbToastrService, NbGlobalPosition, NbGlobalPhysicalPosition, NbComponentStatus, NbDuplicateToastBehaviour } from '@nebular/theme';
import { ToasterConfig } from 'angular2-toaster';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(private toastrService: NbToastrService) { }

  config: ToasterConfig;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;

  option: NbDuplicateToastBehaviour = 'all';

  showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 3000,
      hasIcon: true,
      position: this.position,
      preventDuplicates: true,
      duplicatesBehaviour: this.option
    };

    this.toastrService.show(
      body,
      `${title}`,
      config);
  }
}
