import type { Meta, StoryObj } from '@storybook/react';

import { Github } from './Github';
import { Instagram } from './Instagram';
import { Linkedin } from './Linkedin';
import { BrasilFlag } from './BrasilFlag';
import { USAFlag } from './USAFlag';

function IconsGallery() {
  const icons = [
    { name: 'Github', component: <Github /> },
    { name: 'Instagram', component: <Instagram /> },
    { name: 'Linkedin', component: <Linkedin /> },
    { name: 'PtColor (Brazil Flag)', component: <BrasilFlag className="" /> },
    { name: 'EnColor (USA Flag)', component: <USAFlag className="" /> },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        padding: '2rem',
      }}
    >
      {icons.map(({ name, component }) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          {component}
          <span style={{ fontSize: '0.875rem', color: '#666' }}>{name}</span>
        </div>
      ))}
    </div>
  );
}

const meta = {
  title: 'Components/Icons',
  component: IconsGallery,
} satisfies Meta<typeof IconsGallery>;

export default meta;

type Story = StoryObj<typeof IconsGallery>;

export const AllIcons: Story = {};
