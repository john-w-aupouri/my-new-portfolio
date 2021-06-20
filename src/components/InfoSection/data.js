import img from '../../images/meOnPurpleCircle.png';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About me',
  headLine: 'I design and develop difference',
  description:
    "My name is John Aupouri and I'm a full-stack web developer and digital designer.",
  buttonLabel: 'Download C.V',
  imgStart: true,
  img: img,
  alt: 'Credit card',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headLine: 'Login to your account at any time',
  description:
    'We have you covered no matter where you are located. All you need is an internet connect and a phone or computer',
  buttonLabel: 'Learn More',
  imgStart: false,
  img: require('../../images/meOnPurpleCircle.png'),
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headLine: 'Creating an account is extremely easy',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: true,
  img: require('../../images/meOnPurpleCircle.png'),
  alt: 'Lady',
  dark: false,
  primary: false,
  darkText: true
};
