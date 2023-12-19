import React from 'react';

import Button from '@/components/Button';

function SidebarItem({ data }: { data: TSidebarItem }) {
  return (
    <div>
      <Button type="secondary" href={data.href} title={data.title} Icon={data.icon} />
    </div>
  );
}

export default SidebarItem;
