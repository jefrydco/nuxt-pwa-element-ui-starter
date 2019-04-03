import { mount, createLocalVue } from "@vue/test-utils";
import ElementUI from "element-ui";

import Index from "~/pages/index";

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("Index", () => {
  it("renders to match snapshot", () => {
    const wrapper = mount(Index, {
      localVue
    });
    expect(wrapper).toMatchSnapshot();
  });
});
