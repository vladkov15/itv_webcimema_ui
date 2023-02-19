
import Item from "./item";

import styles from './List.module.scss'

const COMPONENTS = [
  { id: "Alert", href: ''},
  { id: "Accordion", href: ''},
  { id: "Anchor", href: ''},
  { id: "Badge", href: ''},
  { id: "Button", href: ''},
  { id: "CloseButton", href: ''},
  { id: "Collapse", href: ''},
  { id: "Loader", href: ''},
  { id: "Modal", href: ''},
  { id: "Tab", href: ''},
  { id: "TabContainer", href: ''},
  { id: "TabContent", href: ''},
  { id: "TabPane", href: ''},
  { id: "Tabs", href: ''},
  { id: "ThemeProvider", href: ''},
  { id: "ToggleButton", href: ''},
  { id: "ToggleButtonGroup", href: ''},
  
];

const ListOfComponents = () => {
  return (
    <div className={styles.List}>
        <div className={styles.List__Header}>
            <h3>Components</h3>
        </div>
       {COMPONENTS.map((item, index) => (
          <Item key={index} name={item.id}>{index}</Item>
        ))}
        
    </div>
  )
   
};

export default ListOfComponents;
