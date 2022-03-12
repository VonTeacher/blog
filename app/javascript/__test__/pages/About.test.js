import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import About from "../../components/pages/About"

configure({ adapter: new Adapter() })

test("About", () => {
  const about = shallow(<About />)
  expect(about.text()).toEqual("About Page")
})
