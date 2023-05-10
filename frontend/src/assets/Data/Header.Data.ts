import LogoSmall from './react.svg';

export interface LinkData {
  refName: string;
  contents: Array<{
    text: string;
    to: string
  }>
}

export interface HeaderImagesType {
  logoSmall : Array<string>,
  logoMedium: Array<string>,
  logoLarge : Array<string>
}


export const HeaderImages: HeaderImagesType = {
  logoSmall: [LogoSmall],
  logoMedium: [LogoSmall],
  logoLarge: [LogoSmall]
};

const Data = [
  {
    "refName": "logged-tab",
    "contents": [
      {
        "text": "Account",
        "to": "/u/"
      },
      {
        "text": "Logout",
        "to": "/logout"
      }
    ]
  },
  {
    "refName": "visitor-tab",
    "contents": [
      {
        "text": "Register",
        "to": "/register"
      },
      {
        "text": "Login",
        "to": "/"
      }
    ]
  },
  {
    "refName": "nav-links",
    "contents": [
      {
        "text": "HOME",
        "to": "/"
      },
      {
        "text": "Wiki",
        "to": "/wiki"
      },
      {
        "text": "Characters",
        "to": "/charsheet"
      },
      {
        "text": "Maps",
        "to": "/maps"
      },
      {
        "text": "3D Models",
        "to": "/models"
      }
    ]
  }
];

export interface HeaderData {
  links: Array<LinkData>,
  images: HeaderImagesType
}

const HeaderAssets: HeaderData = {
  links: Data,
  images: HeaderImages
}

export default HeaderAssets;
