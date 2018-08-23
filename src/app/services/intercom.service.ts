import {Injectable} from '@angular/core';
import CONFIG from '@config';

declare const Intercom;
const INTERCOM_PADDING_VERTICAL = '85';
const INTERCOM_PADDING_HORIZONTAL = '60';

@Injectable({
  providedIn: 'root'
})

export class IntercomService {
  static boot(userParams?) {
    Intercom('boot', Object.assign({
      app_id: CONFIG.intercomAppId,
      horizontal_padding: INTERCOM_PADDING_HORIZONTAL,
      vertical_padding: INTERCOM_PADDING_VERTICAL
    }, userParams || {}));
  }

  static hide() {
    Intercom('hide');
  }
}
