import {
  mdiDesktopMac,
  mdiViewList
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
      to: '/files',
      icon: mdiDesktopMac,
      label: 'Files'
    },
    {
      label: 'Memos',
      subLabel: 'Submenus Example',
      icon: mdiViewList,
      menu: [
        {
          label: 'Create',
          to: '/memo/create'
        },
        {
          label: 'View Incomming',
          to: 'memo/view/incomming'
        }
      ]
    },
    {
      label: 'Users',
      subLabel: 'Users Management',
      icon: mdiViewList,
      menu: [
        {
          label: 'Create',
          to: '/user/create'
        },
        {
          label: 'View Incomming',
          to: '/user/view'
        }
      ]
    }
  ]
]
