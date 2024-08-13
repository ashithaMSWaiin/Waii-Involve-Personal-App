import { useEffect, useState } from "react";
import {
  RdsButton,
  RdsDropdownList,
  RdsFileUploader,
  RdsIcon,
  RdsInput,
  RdsLabel,
  RdsRadioButton,
  RdsTextEditor,
} from "../../public";
import { Form } from "react-router-dom";

const technologyRadioItems: {
  id: number;
  label: string;
  name: string;
  checked: boolean;
}[] = [
  { id: 1, label: "Abp Commercial", name: "framework", checked: true },
  { id: 2, label: "ASPNET Zero", name: "framework", checked: false },
];

const AbpFrameWorkVersionList: { label: string; val: string }[] = [
  { label: "Abp v8.2", val: "Abpv8.2" },
  { label: "Abp v8.1", val: "Abpv8.1" },
  { label: "Abp v8.0", val: "Abpv8.0" },
  { label: "Abp v7.4", val: "Abpv7.4" },
  { label: "Abp v7.3", val: "Abpv7.3" },
  { label: "Abp v7.2", val: "Abpv7.2" },
  { label: "Abp v7.1", val: "Abpv7.1" },
  { label: "Abp v7.0", val: "Abpv7.0" },
  { label: "Abp v6.0", val: "Abpv6.0" },
  { label: "Abp v5.3", val: "Abpv5.3" },
];

const AspNetZeroFrameWorkVersionList: { label: string; val: string }[] = [
  { label: "AspnetZero v13.3.0", val: "AspnetZerov13.3.0" },
  { label: "AspnetZero v13.2.0", val: "AspnetZerov13.2.0" },
  { label: "AspnetZero v13.1.0", val: "AspnetZerov13.1.0" },
  { label: "AspnetZero v13.0.0", val: "AspnetZerov13.0.0" },
  { label: "AspnetZero v12.4.0", val: "AspnetZerov12.4.0" },
  { label: "AspnetZero v12.3.0", val: "AspnetZerov12.3.0" },
  { label: "AspnetZero v12.2.0", val: "AspnetZerov12.2.0" },
  { label: "AspnetZero v12.1.0", val: "AspnetZerov12.1.0" },
  { label: "AspnetZero v12.0.0", val: "AspnetZerov12.0.0" },
  { label: "AspnetZero v11.4.0", val: "AspnetZerov11.4.0" },
  { label: "AspnetZero v11.3.0", val: "AspnetZerov11.3.0" },
  { label: "AspnetZero v11.2.0", val: "AspnetZerov11.2.0" },
  { label: "AspnetZero v11.1.0", val: "AspnetZerov11.1.0" },
  { label: "AspnetZero v11.0.0", val: "AspnetZerov11.0.0" },
];

const initialFormState = {
  frameworkList: AbpFrameWorkVersionList,
  technologiesRadioItems: technologyRadioItems,
  title: "",
  description: "",
  selectedFrameworkVersion: "", // Add this line
};

function NewQuestions() {
  const [frameworkList, setFrameworkList] = useState<
    { label: string; val: string }[]
  >([]);
  const [technologiesRadioItems, setTechnologyRadioItems] = useState<
    Array<{ id: number; label: string; name: string; checked: boolean }>
  >([]);
  const [title, setTitle] = useState(initialFormState.title);
  const [description, setDescription] = useState(initialFormState.description);
  const [selectedFrameworkVersion, setSelectedFrameworkVersion] = useState(
    initialFormState.selectedFrameworkVersion
  ); // Add this line

  useEffect(() => {
    setFrameworkList(AbpFrameWorkVersionList);
    setTechnologyRadioItems(technologyRadioItems);
    setTitle(initialFormState.title);
    setDescription(initialFormState.description);
    setSelectedFrameworkVersion(initialFormState.selectedFrameworkVersion); // Add this line
  }, []);

  const updateChecked = (
    items: Array<{ id: number; label: string; name: string; checked: boolean }>,
    selectedValue: string
  ) => {
    let values = items.map((item) => ({
      ...item,
      checked: item.label === selectedValue,
    }));
    setTechnologyRadioItems(values);
  };

  const handlerRadioChange = (value: any) => {
    updateChecked(technologyRadioItems, value);

    if (value === "Abp Commercial") {
      setFrameworkList(AbpFrameWorkVersionList);
    } else {
      setFrameworkList(AspNetZeroFrameWorkVersionList);
    }
  };

  const clearForm = () => {
    setFrameworkList(initialFormState.frameworkList);
    setTechnologyRadioItems(initialFormState.technologiesRadioItems);
    setTitle(initialFormState.title);
    setDescription(initialFormState.description);
    setSelectedFrameworkVersion(initialFormState.selectedFrameworkVersion); 
  };

  return (
    <div>
      <form>
        <div className="row pb-2 px-lg-4">
          <div className="col-md-11 mb-3">
            <h2 className="form-label fw-semibold font-size-24">
              Give us more Information to help you!
            </h2>
          </div>
          <div className="col-md-1 mb-3 pl-5">
            <RdsButton
              label="Clear"
              block={false}
              size="small"
              type="button"
              colorVariant="outline-primary"
              class="me-2"
              onClick={clearForm}
            ></RdsButton>
          </div>
        </div>
        <div className="row pb-2 px-lg-4">
          <div className="col-md-6 col-12 col-lg-12 col-xl-12 col-xxl-12">
            <RdsLabel label="Select Technology" required={true} />
            <div className="form-group mt-2">
              <RdsRadioButton
                displayType="Horizontal"
                label=""
                itemList={technologiesRadioItems}
                onChange={handlerRadioChange}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className="row pb-2 px-lg-4">
          <div className="col-md-6 col-12 col-lg-12 col-xl-12 col-xxl-12">
            <RdsLabel label="Select Framework Version" required={true} />
            <div className="form-group mt-2">
              <RdsDropdownList
                data-testid="frameworkVersion"
                borderDropdown={true}
                placeholder="Select Framework Version"
                labelIconWidth="18px"
                labelIconHeight="25px"
                listItems={frameworkList}
                isPlaceholder={true}
              />
            </div>
          </div>
        </div>
        <div className="row pb-2 px-lg-4">
          <div className="col-md-6 col-12 col-lg-12 col-xl-12 col-xxl-12">
            <RdsLabel label="Select UI Type" required={true} />
            <div className="form-group mt-2">
              <RdsDropdownList
                data-testid="UiType"
                borderDropdown={true}
                placeholder="Select UI Type"
                labelIconWidth="18px"
                labelIconHeight="25px"
                listItems={frameworkList}
                isPlaceholder={true}
              />
            </div>
          </div>
        </div>
        <div className="row pb-2 px-lg-4">
          <div className="col-md-6 col-12 col-lg-12 col-xl-12 col-xxl-12">
            <RdsLabel label=" Select Database System" required={true} />
            <div className="form-group mt-2">
              <RdsDropdownList
                data-testid="DbSystem"
                borderDropdown={true}
                placeholder="Select Database System"
                labelIconWidth="18px"
                labelIconHeight="25px"
                listItems={frameworkList}
                isPlaceholder={true}
              />
            </div>
          </div>
        </div>
        <div className="row pb-2 px-lg-4">
          <div className="col-md-6 col-12 col-lg-12 col-xl-12 col-xxl-12 form-group mt-2">
            <RdsInput
              id="title"
              inputType="text"
              label="title"
              labelPosition="top"
              placeholder="Enter title here"
              required
              showIcon
              size="medium"
              value={title}
              onChange={(e: any) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="row pb-2 px-lg-4">
          <div className="col-md-6 col-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col-md-1">
                <RdsLabel label="Description" required={true} />
              </div>
              <div className="col-md-1">
                <RdsIcon
                  colorVariant="dark"
                  databstoggle="tooltip"
                  height="16px"
                  isCursorPointer
                  name="information"
                  tooltip
                  tooltipPlacement="bottom"
                  tooltipTitle="Please provide us with the exception message and full stack trace along with steps to reproduce the issue."
                  width="16px"
                />
              </div>
            </div>
          </div>
          <div className="form-group mt-2">
            <RdsTextEditor
              id="description"
              value={description}
              onChange={(value) => setDescription(value)}
            />
          </div>
        </div>
        <div className="row pb-2 px-lg-4">
          <div className="col-md-6 col-12">
            <RdsLabel label="Upload Files" required={true} />
            <RdsFileUploader
              colorVariant="primary"
              extensions="png, jpg, doc, pdf, ppt"
              limit={5}
              multiple
              size="large"
              validation={[
                {
                  hint: "File size exceeds the limit",
                  isError: false,
                },
              ]}
              label={""}
            />
          </div>
        </div>
        <div className="row pb-2 px-lg-4">
          <div className="d-flex flex-column-reverse ps-4 flex-lg-row flex-md-column-reverse flex-row flex-xl-row flex-xxl-row gap-2 mt-3 pb-3">
            <RdsButton
              label="Cancel"
              type="button"
              colorVariant="primary"
              size="small"
              isOutline={true}
              onClick={clearForm}
            ></RdsButton>
            <RdsButton
              label="Submit"
              type="button"
              size="small"
              class="ms-2"
              colorVariant="primary"
              dataTestId="submit"
            ></RdsButton>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewQuestions;