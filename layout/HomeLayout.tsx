import { ReactNode } from 'react'
import FooterDock from '../components/layout/FooterDock'
import Menubar from '../components/layout/Menubar'
import styles from '../styles/layout.module.css'

type ILayoutProps = {
  children: ReactNode
}

const HomeLayout = (props: ILayoutProps): JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <Menubar />
      <div>{props.children}</div>
      <FooterDock />
    </div>
  )
}

export default HomeLayout
