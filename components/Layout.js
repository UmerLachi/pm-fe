import Drawer from './Drawer';

const Layout = ({ children }) => {
  return (
    <div className='relative flex min-h-screen'>
      <Drawer />
      <main className='flex-1 p-8 shadow-sm'>{children}</main>
    </div>
  );
};

export default Layout;
