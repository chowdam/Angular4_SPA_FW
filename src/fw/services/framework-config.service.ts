import { Injectable } from '@angular/core';


export interface IconFiles {
  imageFile: string;
  alt: string;
  link: string;
}

export interface FrameworkConfigSettings {
  showLanguageSelector?: boolean;
  showUserControls?: boolean;
  showStatusBar?: boolean;
  showStatusBarBreakpoint?: number;
  showSocialIcons: boolean;
  socialIcons?: Array<IconFiles>;
}

@Injectable()
export class FrameworkConfigService {

  constructor() { }

  // settings and configurations for the applciation
  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakpoint = 0;
  showSocialIcons = true;
  socialIcons = new Array<IconFiles>();

  configure(settings: FrameworkConfigSettings): void {
    Object.assign(this, settings);
  }


}
