import { NbMenuItem } from '@nebular/theme';
import { icon } from 'leaflet';
import { title } from 'process';

export const MENU_ITEMS: NbMenuItem[] = [
 
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title:'HR',
    icon:'home-outline',
    link:'/pages/hr'
  },
    {
      title:'Stuff',
      icon:'person-outline',
      children:[
        {
          title:'Developers',
          icon:'person-outline',
          link:'/pages/stuff/developers'
        },
        {
          title:'IT',
          icon:'person-outlet',
          link:'/pages/stuff/it'
        }
      ]
    } ,
    {
      title:'CLient',
      icon:'Person-outlet',
      children:[
        {
           title:'Client-Order',
           icon:'list-outlet',
            link:'/pages/client/client-order'

        }
      ]
    },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  
 
  
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
