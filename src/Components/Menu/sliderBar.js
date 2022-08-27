import * as RiIcons from 'react-icons/ri';
import * as FcIcons from 'react-icons/fc';
import * as BsIcons from 'react-icons/bs';



export const SidebarData = [
    
  {
    title: 'Home' ,
    path: '/',
    icon: <FcIcons.FcPieChart />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Cadastro TV',
    path: '#',
    icon: <FcIcons.FcBarChart />,
    iconClosed: <FcIcons.FcExpand />,
    iconOpened: <FcIcons.FcCollapse />,

    subNav: [
     
      {
        title: 'Claro TV HD',
        path: 'ClaroTVHD',
        icon: <FcIcons.FcComboChart />,
        cName: 'sub-nav'
      },
      {
        title: 'Claro TV 4K',
        path: '/list/entry-balance',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Claro APP',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Corp 4K',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Corp HD',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Plus HP',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Compacto HD',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
    
    ]
  },
  {
    title: 'Cadastro VIRTUA',
    path: '#',
    icon: <FcIcons.FcReddit  style={{ color: '#6495ed'  }} />,
    iconClosed: <FcIcons.FcExpand />,
    iconOpened: <FcIcons.FcCollapse />,

    subNav: [
      {
        title: '250 MB',
        path: '/Double',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      {
        title: '500 MB',
        path: '/Crash',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      {
        title: '1 GB',
        path: '/Teste4',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      {
        title: '150 MB PME',
        path: '/Teste4',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      {
        title: '350 MB PME',
        path: '/Teste4',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      {
        title: '500 MB + MESH',
        path: '/Teste4',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      {
        title: '500 MB + P. ULTRA',
        path: '/Teste4',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      {
        title: 'internet mais',
        path: '/Teste4',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      }
    ]
  },
  {
    title: 'Cadastro COMBO',
    path: '#',
    icon: <FcIcons.FcReddit  style={{ color: '#6495ed'  }} />,
    iconClosed: <FcIcons.FcExpand />,
    iconOpened: <FcIcons.FcCollapse />,

    subNav: [
      {
        title: 'Tripo play',
        path: '/Double',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      {
        title: '4 play',
        path: '/Crash',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      {
        title: 'Internet + Tv',
        path: '/Teste4',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      {
        title: 'Internet + Móvel',
        path: '/Teste4',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      {
        title: 'Internet + Fixo',
        path: '/Teste4',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      {
        title: 'Tv + Móvel',
        path: '/Teste4',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      
    ]
  },{
    title: 'Cadastro BASE',
    path: '#',
    icon: <FcIcons.FcBarChart />,
    iconClosed: <FcIcons.FcExpand />,
    iconOpened: <FcIcons.FcCollapse />,

    subNav: [
     
      {
        title: 'Claro TV HD',
        path: '/ClaroTVHD',
        icon: <FcIcons.FcComboChart />,
        cName: 'sub-nav'
      },
      {
        title: 'Claro TV 4K',
        path: '/list/entry-balance',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Claro APP',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Corp 4K',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Corp HD',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Plus HP',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Compacto HD',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Internet',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Triple Play',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
      {
        title: '4play',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Móvel',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
    
    ]
  },
  
  {
    title: 'Liberar PENDÊNCIAS',
    path: '#',
    icon: <FcIcons.FcBarChart />,
    iconClosed: <FcIcons.FcExpand />,
    iconOpened: <FcIcons.FcCollapse />,

    subNav: [
     
      {
        title: 'Cancelar Proposta',
        path: '/list/relatorios',
        icon: <FcIcons.FcComboChart />,
        cName: 'sub-nav'
      },
      {
        title: 'Dupli. Proposta',
        path: '/list/entry-balance',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Criar endereço',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Desblindar',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Conectado',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'End. Inadiplente',
        path: '/Teste4',
        icon: <FcIcons.FcBullish />
      }
    
    ]
  },
  {
    title: 'Treinamento',
    path: '/Teste4',
    icon: <FcIcons.FcAdvertising />
  },
 
  {
    title: 'Atividades',
    path: '/Teste4',
    icon: <FcIcons.FcAdvertising />
  },
  
  {
    title: 'Suporte',
    path: '/support',
    href: 'https://wa.me/message/RXVMXHTP347HC1',
    icon: <FcIcons.FcAbout />
  }

];