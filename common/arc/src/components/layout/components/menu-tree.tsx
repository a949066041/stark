import { type PropType, defineComponent } from "vue";
import { MenuItem, SubMenu } from "ant-design-vue";
import { IMenu } from "../../../store";
import { ArcIcon } from "../../icon";
const MenuTree = defineComponent({
  name: "MenuTree",
  props: {
    config: {
      type: Object as PropType<IMenu>,
      default: () => ({})
    }
  },
  setup(props) {
    function renderIcon() {
      if (props.config.meta && props.config.meta.menu_icon) {
        const [namespace, name] = props.config.meta.menu_icon as [string, string];
        return () => (
          <ArcIcon
            class="anticon !inline-flex !dark:text-white"
            width="14px"
            height="14px"
            namespace={namespace}
            name={name}
          />
        );
      }
      return null;
    }

    if (!props.config.children || !props.config.children.length) {
      return () =>
        !props.config.hidden && (
          <MenuItem key={props.config.path}>
            {{
              icon: renderIcon(),
              default: () => <router-link to={`/view/${props.config.path}`}>{props.config.meta?.title}</router-link>
            }}
          </MenuItem>
        );
    }

    return () =>
      !props.config.hidden && (
        <SubMenu key={props.config.name}>
          {{
            icon: renderIcon(),
            title: () => <span>{<span class="sub_title">{props.config.meta?.title}</span>}</span>,
            default: () =>
              Array.isArray(props.config.children) && props.config.children.map((item) => <MenuTree config={item} />)
          }}
        </SubMenu>
      );
  }
});

export default MenuTree;
