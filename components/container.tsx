interface ContainerProps {
    children: React.ReactNode
}
const ContainerPage = (props: ContainerProps ) => {
  const { children } = props;
  return (
    <div className="relative mx-auto mt-32 px-8 sm:px-14 md:px-16 lg:px-20 xs:px-4 pb-40 md:pb-0 w-full max-w-6xl">
      {children}
    </div>
  );
};

export default ContainerPage;
