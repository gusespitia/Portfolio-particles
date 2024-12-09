interface ContainerProps {
    children: React.ReactNode
}
const ContainerPage = (props: ContainerProps ) => {
  const { children } = props;
  return (
    <div className="w-full max-w-6xl px-8 pb-40 mx-auto mt-32  md:pb-0 md:px-16 sm:px-14 lg:px-20 xs:px-4">
      {children}
    </div>
  );
};

export default ContainerPage;
