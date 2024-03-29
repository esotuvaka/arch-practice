export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full fixed bottom-0 p-5 bg-slate-100 text-slate-500 ${className}`}
    >
      <p>USA</p>
    </footer>
  );
};

export default Footer;
