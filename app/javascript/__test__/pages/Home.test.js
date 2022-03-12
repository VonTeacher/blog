import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Home from "../../components/pages/Home"

configure({ adapter: new Adapter() })

test("Home", () => {
  const home = shallow(<Home />)
  expect(home.text()).toEqual("Home Page")
})
