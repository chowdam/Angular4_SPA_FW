import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
  {
    text: 'Dashboard',
    icon: 'glyphicon glyphicon-dashboard',
    route: '/dashboard',
    submenu: null
  },
  {
    text: 'Maintenance',
    icon: 'glyphicon glyphicon-list',
    route: null,
    submenu: [
      {
        text: 'New Systems',
        icon: 'fa fa-cogs',
        route: 'maintenance-system/director',
        submenu: [
          {
            text: 'Email Communication',
            icon: 'fa fa-envelope-o',
            route: 'maintenance-system/newsys/email-comm',
            submenu: null
          },
          {
            text: 'Personnel',
            icon: 'fa fa-user',
            route: 'maintenance-system/newsys/personnel',
            submenu: null
          },
          {
            text: 'Assign Personnel',
            icon: 'fa fa-user',
            route: 'maintenance-system/newsys/assign-personnel',
            submenu: null
          }
        ]
      },
      {
        text: 'Director',
        icon: 'fa fa-user',
        route: 'maintenance-system/director',
        submenu: null
      },
      {
        text: 'Principal',
        icon: 'fa fa-user',
        route: 'maintenance-system/principal',
        submenu: null
      },
      {
        text: 'Player',
        icon: 'fa fa-user',
        route: 'maintenance-system/player',
        submenu: null
      },
      {
        text: 'School',
        icon: 'glyphicon glyphicon-education',
        route: 'maintenance-system/school',
        submenu: null
      },
      {
        text: 'Team',
        icon: 'fa fa-users',
        route: 'maintenance-system/team',
        submenu: null
      },
      {
        text: 'Game',
        icon: 'fa fa-futbol-o',
        route: 'maintenance-system/game',
        submenu: null
      },
      {
        text: 'Reports',
        icon: 'glyphicon glyphicon-stats',
        route: 'maintenance-system/reports',
        submenu: null
      }



    ]
  },
  {
    text: 'Settings',
    icon: 'glyphicon glyphicon-wrench',
    route: null,
    submenu: [
      {
        text: 'Profile',
        icon: 'glyphicon glyphicon-th-large',
        route: 'settings/profile',
        submenu: null
      },
      {
        text: 'Alerts',
        icon: 'fa fa-bell',
        route: 'settings/alerts',
        submenu: null
      },
      {
        text: 'Notifications',
        icon: 'glyphicon glyphicon-flag',
        route: 'settings/notifications',
        submenu: null
      }
    ]
  }
];
