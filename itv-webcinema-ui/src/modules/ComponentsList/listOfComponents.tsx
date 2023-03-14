import Item from "./item";

import styles from "./List.module.scss";

const COMPONENTS = [
  { id: "Alert", href: "" },
  { id: "Accordion", href: "" },
  { id: "Badge", href: "" },
  { id: "Button", href: "" },
  { id: "Dropdown", href: "" },
  { id: "Loader", href: "" },
  { id: "Modal", href: "" },
  { id: "Tabs", href: "" },
  { id: "Tooltip", href: "" },
  { id: "Toggle", href: "" },
];

const ListOfComponents = () => {
  return (
    <div className={styles.List}>
      <div className={styles.List__Header}>
        <h3>Components</h3>
      </div>
      {COMPONENTS.map((item, index) => (
        <Item key={index} name={item.id}>
          {index}
        </Item>
      ))}
    </div>
  );
};

export default ListOfComponents;
