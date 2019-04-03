import { shallowMount, createLocalVue } from "@vue/test-utils";
import ElementUI from "element-ui";

import AppComponent from "~/components/AppComponent";

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("App Component", () => {
  it("renders to match snapshot", () => {
    const wrapper = shallowMount(AppComponent, {
      localVue
    });
    expect(wrapper).toMatchSnapshot();
  });
});
