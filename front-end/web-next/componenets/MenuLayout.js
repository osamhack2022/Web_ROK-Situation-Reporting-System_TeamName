import { Layout, Menu } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { RiOrganizationChart, RiLogoutBoxLine } from 'react-icons/ri';
import { GrNotes } from 'react-icons/gr';
import { AiOutlineMessage, AiOutlineBell, AiOutlineSetting } from 'react-icons/ai';
import { useRouter } from "next/router"
import styles from '../styles/MenuLayout.module.css';

function MenuLayout(props) {
  const router = useRouter()
  const currentPath = router.pathname;

  const sideMenu = [
    {
      key: 'home',
      icon: <HomeFilled />,
      label: 'Home'
    },
    {
      key: 'orgchart',
      icon: <RiOrganizationChart />,
      label: '조직도'
    },
    {
      key: 'memonote',
      icon: <GrNotes />,
      label: '메모 보고'
    },
    {
      key: 'messeges',
      icon: <AiOutlineMessage />,
      label: '메세지'
    },
    {
      key: 'notifications',
      icon: <AiOutlineBell />,
      label: '알림'
    },
    {
      key: 'settings',
      icon: <AiOutlineSetting />,
      label: '설정'
    }
  ];

  if (props.exception && props.exception.includes(currentPath)) {
    return props.children;
  }

  return (
    <Layout className={styles.bodyLayout}>
      <Layout.Sider className={styles.sideLayout}>
        <Menu
          className={styles.sidebar}
          mode="vertical"
          items={sideMenu}
          defaultSelectedKeys={currentPath.substring(1, (currentPath.indexOf('/', 1) === -1 ? currentPath.length : currentPath.indexOf('/')))}
          onSelect={({ key }) => router.push('/' + key)}
        />
      </Layout.Sider>
      <Layout.Content className={styles.contentLayout}>
        {props.children}
      </Layout.Content>
    </Layout>
  )
}

export default MenuLayout;