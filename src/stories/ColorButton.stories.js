import ColorButton from "../../component/ColorButton";

export default {
    title: "ColorButton",
    component: ColorButton,
}

////////////It will show on storybook include description and defult value 
////////////(but you need to use TypeScript or import prop-Types to show description)

export const Button1 = () => <ColorButton lable="Press me" backgroundColor="red"></ColorButton>

//////////// If you want to be able to edit component in storybook

const Template = args => <ColorButton {...args} />

export const Button2 = Template.bind({})
Button2.args = {
    label: "Press me",
    backgroundColor: "red",
    size: "large"
}