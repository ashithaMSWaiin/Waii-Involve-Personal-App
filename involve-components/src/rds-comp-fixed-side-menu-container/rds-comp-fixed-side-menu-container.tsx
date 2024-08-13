import React, {useEffect, useState } from "react";
import { RdsButton, RdsIcon, RdsLabel, RdsOffcanvas } from "../rds-elements";
import "./rds-comp-fixed-side-menu-container.style.css";
import { useNavigate } from "react-router-dom";

export interface FixedMenuItem {
  id?: string;
  name?: string;
  icon?: string;
  Path?: string;
}

export interface RdsCompFixedSideMenuContainerProps {
  position:  "left";
  menuItems: FixedMenuItem[];
}

const RdsCompFixedSideMenuContainer = (
  props: RdsCompFixedSideMenuContainerProps
) => {
  const navigate = useNavigate();
const Organization="ABC Technologies";
useEffect(() => {
  const pathname = window.location.pathname; 
  if (pathname.includes('new-question')) {
    document.getElementById('new-question-btn')?.classList.add('active');
  }
}, []);
  const [profilePic, setProfilePic] = useState(
    "https://anzstageui.raaghu.io/assets/profile-picture-circle.svg"
  );

  function handleLinkClick(event: React.MouseEvent<HTMLElement, MouseEvent>, path: string | undefined): void {
    event.preventDefault();
    const questionBtn = event.currentTarget.id;
    if(questionBtn === 'new-question-btn'){
      event.currentTarget.classList.add('active');
    }
    else{
      document.getElementById('new-question-btn')?.classList.remove('active');
    }
    if (path) {
      navigate(path);
    }

}
  return (
    <div id="fixedSidebar"
      className={`left text-capitalize sidebar overflow-x-hidden overflow-y-auto pt-xxl-0 pt-xl-0 pt-lg-0 pt-md-0 pt-4 shadow px-1`}
    >
     
      <div
        className={`container-collapse mb-4 mb-lg-0 pl-23 p-3`}
      >
        <RdsButton
                icon="plus"
                label="New Question"
                iconColorVariant="primary"
                iconHeight="12px"
                iconWidth="12px"
                iconFill={false}
                iconStroke={true}
                block={false}
                size="small"
                type="button"
                colorVariant="outline-primary"
               class="me-2"
               id="new-question-btn"
               onClick={(e) => handleLinkClick(e,'/new-question')}
              ></RdsButton>
        
        <div className="content">
          {Array.isArray(props.menuItems) &&
            props.menuItems.map((item, index) => (
              <div className="menu-item-collapsible-container" key={index}  onClick={(e) => handleLinkClick(e, item.Path)}>
                {item.icon && (
                  <RdsIcon
                    name={item.icon}
                    width="20px"
                    height="20px"
                    fill={false}
                    classes="mx-3"
                    tooltip={true}
                    tooltipTitle={item.name}
                    tooltipPlacement="top"
                  />
                )}
                {/* {!item.icon&&item.name && <span>{item.name}</span>} */}
                <span>{item.name}</span>
                
              </div>
            ))}
            
        </div>
       
      </div>
      <div className="mb-4 mb-lg-0 pl-23 p-3 footer-buttons">  
                        
                                <div className="d-flex align-items-center cursorpointer">
                                    <img
                                        className="avatar bg-light avatar-sm rounded rounded-circle mb-0"
                                        src={profilePic}
                                    ></img>
                                    <div className="ms-2 fs-6">
                                        <div className="text-nowrap text-muted">
                                          <RdsLabel></RdsLabel>
                                          <RdsLabel
                                            fontWeight="extrabold"
                                            label= {Organization}
                                          />
                                           
                                        </div>
                                    </div>
                                  
                                </div>
                         
                    </div>
                    
    </div>
  );
};

export default RdsCompFixedSideMenuContainer;
