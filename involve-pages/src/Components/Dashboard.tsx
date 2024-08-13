import { RdsRadioButton } from "../../public";

function Dashborad() {
    return (
        <><h2>Dashboard</h2><RdsRadioButton
            displayType="Default"
            label="Radio Button"
            value={""}
            itemList={[
                {
                    id: 1,
                    label: "Radio Button 1",
                    checked: false,
                    name: "radio_button",
                },
                {
                    id: 2,
                    label: "Radio Button 2",
                    checked: false,
                    name: "radio_button",
                },
                {
                    id: 3,
                    label: "Radio Button 3",
                    checked: false,
                    name: "radio_button",
                },
            ]} /></>
    );
}
export default Dashborad;