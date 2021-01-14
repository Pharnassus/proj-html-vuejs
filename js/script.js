
var app = new Vue(
  {
    el: '#root',
    data: {
      //header
      imgLogo: 'img/dark-logo.png',
      linksHeader: [
        'Home',
        'Pages',
        'Courses',
        'Fetures',
        'Blog',
        'Shop',
      ],
      language: 'ENGLISH',
      imgFlag: 'img/en.png',
      userIcon: 'far fa-user-circle',
      searchInit: '',
      searchIcon: 'fas fa-search',
      //fine_header

      //footer
      adressLinks: [
        '382 NE 191st St # 87394 Miami, FL 33179-3899',
        '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)',
      ],
      emailLinks: [
        'support@maxcoach.com',
      ],
      socialLinks: [
        'fab fa-facebook-square',
        'fab fa-twitter',
        'fab fa-instagram',
        'fab fa-linkedin',
      ],
      exploreLinks: [
        'Success story',
        'Blog',
        'Courses',
        'About us',
        'Contact us',
      ],
      informationLinks: [
        'Membership',
        'Purchase guide',
        'Privacy policy',
        'Terms of service',
      ],
      copyright: '© 2020 Maxcoach. All Rights Reserved',
      //fine_footer
    },
    methods: {
    },

  },
);
