import type { Meta, StoryObj } from '@storybook/react';
import RdsCompFixedSideMenuContainer from "./rds-comp-fixed-side-menu-container";


const meta: Meta = { 
    title: "Components/Fixed Side-menu Container",
    component: RdsCompFixedSideMenuContainer,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof RdsCompFixedSideMenuContainer>;

export default meta;
type Story = StoryObj<typeof RdsCompFixedSideMenuContainer>;

export const Default: Story = {
    args: {
        position: "left",
            menuItems: [
              { name: 'Edit', icon: 'edit',Path: "/edit" },
              { name: 'Download', icon: 'download',Path: "/download"  },
              { name: 'Favourite', icon: 'star',Path: "/star"  },
              { name: 'Feedback', icon: 'check',Path: "/check"  },
              { name: 'Send Link', icon: 'link',Path: "/link"  },
              { name: 'Subscribe to', icon: 'notification_bell',Path: "/notification" },
            ]
    }
} satisfies Story;