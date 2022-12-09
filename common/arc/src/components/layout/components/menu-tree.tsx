/*
 * @Author: Rikka
 * @Date: 2022-12-07 15:41:23
 * @LastEditTime: 2022-12-09 17:14:28
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\components\layout\components\menu-tree.tsx
 */
import { type PropType, defineComponent, reactive } from "vue";
import { MenuItem, SubMenu } from "ant-design-vue";
import { IMenu, usePermissionStore } from "../../../store";
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
    if ((props.config as any).hidden) return null;

    const permissionStore = usePermissionStore();
    const permissionList = reactive(permissionStore.permission_list);

    const meta = props.config.meta;

    if (meta?.permission && meta.permission.length) {
      const permissions = reactive(meta.permission);
      if (
        !permissions.some((permission) => {
          return permissionList.includes(permission);
        })
      ) {
        console.log(meta);
        return () => null;
      }
    }

    function renderIcon() {
      return meta && meta.menu_icon
        ? () => (
            <ArcIcon
              class="anticon !inline-flex"
              width="14px"
              height="14px"
              namespace={meta?.menu_icon[0]}
              name={meta?.menu_icon[1]}
            />
          )
        : null;
    }

    if (!props.config.children || !props.config.children.length) {
      return () => (
        <MenuItem key={props.config.path}>
          {{
            icon: renderIcon(),
            default: () => <router-link to={`/view/${props.config.path}`}>{meta?.title}</router-link>
          }}
        </MenuItem>
      );
    }

    return () => (
      <SubMenu key={props.config.name}>
        {{
          icon: renderIcon(),
          title: () => <span>{<span class="sub_title">{meta?.title}</span>}</span>,
          default: () =>
            Array.isArray(props.config.children) && props.config.children.map((item) => <MenuTree config={item} />)
        }}
      </SubMenu>
    );
  }
});

export default MenuTree;
