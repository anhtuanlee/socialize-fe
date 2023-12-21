import Layout from '@/layout/LayoutDefault/Layout';
import React, { PropsWithChildren } from 'react';

const DashboardLayout: React.FC<PropsWithChildren> = async ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default DashboardLayout;
