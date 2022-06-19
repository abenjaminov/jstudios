import {Injectable} from "@angular/core";
import {DeviceType} from "../models";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  deviceType: DeviceType;
  get isMobile() {
    return this.deviceType == DeviceType.mobile;
  }

  get isDesktop() {
    return this.deviceType == DeviceType.desktopOther || this.deviceType == DeviceType.desktopChrome;
  }

  init() {
    this.deviceType = this.detectDevice();
  }

  detectDevice(): DeviceType {
    const ua = navigator.userAgent;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
      return DeviceType.mobile;

    else if(/Chrome/i.test(ua))
      return DeviceType.desktopChrome;

    else
      return DeviceType.desktopOther;
  }
}
