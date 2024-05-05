interface SocialMedia {
  name: string;
  url: string;
}

interface NavLink {
  name: string;
  url: string;
}


const config = {
  email: 'sophiajwu02@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/sophiajw02',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sophiajwu',
    },
    {
      name: 'Email',
      url: `mailto:${'sophiajwu02@gmail.com'}`
    },
  ] as SocialMedia[],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#experience',
    },
    {
      name: 'Projects',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ] as NavLink[],

};

export default config;