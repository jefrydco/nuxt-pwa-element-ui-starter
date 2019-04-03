import { shallowMount, createLocalVue } from "@vue/test-utils";
import ElementUI from "element-ui";

import AppAside from "~/components/AppAside";

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("App Aside", () => {
  it("renders to match snapshot", () => {
    const wrapper = shallowMount(AppAside, {
      localVue
    });
    expect(wrapper).toMatchSnapshot();
  });
});
