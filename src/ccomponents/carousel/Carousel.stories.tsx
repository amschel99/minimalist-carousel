import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "./index"
import {data} from "./data"
type Story = StoryObj<typeof Carousel>;
const meta: Meta<typeof Carousel> = {
  title: "Carousel",
  component: Carousel,
};
export const Primary: Story = {
  args: {
    data:data
   
  },
};
export default meta;