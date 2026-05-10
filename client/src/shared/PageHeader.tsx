interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="flex gap-2">
      <div className="text-2xl font-semibold">{title}</div>
    </div>
  );
};

export default PageHeader;
