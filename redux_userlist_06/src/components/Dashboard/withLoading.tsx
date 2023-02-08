function withLoading(Component: any) {
  return function withLoadingComponent({ isLoading }: { isLoading: boolean }) {
    return isLoading ? (
      <h1>Wait...loading</h1>
    ) : (
      <Component isLoading={isLoading} />
    );
  };
}
export default withLoading;
