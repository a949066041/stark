import { RouterView } from "vue-router";
import { ConfigProvider } from "ant-design-vue";
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { useGlobStore } from "../../store";

export default {
  name: "App",
  setup() {
    const globStore = useGlobStore();
    return () => (
      <ConfigProvider locale={globStore.lang === "zh" ? zhCN : enUS}>
        <RouterView />
      </ConfigProvider>
    );
  }
};
