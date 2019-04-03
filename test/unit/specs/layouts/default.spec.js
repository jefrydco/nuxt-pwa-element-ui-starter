import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import ElementUI from "element-ui";

import Default from "~/layouts/default";

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("Default layout", () => {
  it("renders to match snapshot", () => {
    const wrapper = mount(Default, {
      localVue,
      stubs: {
        nuxt: "nuxt",
        "router-link": RouterLinkStub
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});
