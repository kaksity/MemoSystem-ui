import {
  mdiDesktopMac,
  mdiViewList,
  mdiPlus,
  mdiEye,
  mdiAccount,
  mdiEmail
} from '@mdi/js'

export default [
  'General',
  [
    {
      to: '/dashboard',
      icon: mdiDesktopMac,
      label: 'Dashboard'
    }
  ],
  'Administration',
  [
    {
      icon: mdiDesktopMac,
      label: 'Files',
      menu: [
        {
          label: 'Create',
          to: '/file/create',
          icon: mdiPlus
        },
        {
          label: 'View',
          to: '/file/view',
          icon: mdiEye
        }
      ]
    },
    {
      icon: mdiDesktopMac,
      label: 'Inventories',
      menu: [
        {
          label: 'Create',
          to: '/inventory/create',
          icon: mdiPlus
        },
        {
          label: 'View',
          to: '/inventory/view',
          icon: mdiEye
        }
      ]
    },
    {
      label: 'Council Memos',
      subLabel: 'Submenus Example',
      icon: mdiViewList,
      menu: [
        {
          label: 'Create',
          to: '/council/memo/create',
          icon: mdiPlus
        },
        {
          label: 'View (Self)',
          to: '/council/memo/view/self',
          icon: mdiEye
        },
        {
          label: 'View (Mentioned)',
          to: '/council/memo/view/mentioned',
          icon: mdiEye
        }
      ]
    },
    {
      label: 'Memos',
      subLabel: 'Submenus Example',
      icon: mdiViewList,
      menu: [
        {
          label: 'Create',
          to: '/memo/create',
          icon: mdiPlus
        },
        {
          label: 'View (Self)',
          to: '/memo/view/self',
          icon: mdiEye
        },
        {
          label: 'View (Mentioned)',
          to: '/memo/view/mentioned',
          icon: mdiEye
        }
      ]
    },
    {
      label: 'Messages',
      subLabel: 'Submenus Example',
      icon: mdiEmail,
      menu: [
        {
          label: 'Create',
          to: '/message/create',
          icon: mdiPlus
        },
        {
          label: 'View (Self)',
          to: '/message/view/self',
          icon: mdiEye
        },
        {
          label: 'View (Mentioned)',
          to: '/message/view/mentioned',
          icon: mdiEye
        }
      ]
    },
    {
      label: 'Users',
      subLabel: 'Users Management',
      icon: mdiAccount,
      menu: [
        {
          label: 'Create',
          to: '/user/create',
          icon: mdiPlus
        },
        {
          label: 'View',
          to: '/user/view',
          icon: mdiEye
        }
      ]
    }
  ]
]
