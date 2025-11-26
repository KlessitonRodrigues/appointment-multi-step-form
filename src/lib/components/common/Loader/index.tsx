import { LoaderBg, LoaderSpinner } from "src/lib/base/progress/Loader";

const Loader = () => {
  return (
    <LoaderBg>
      <LoaderSpinner />
    </LoaderBg>
  );
};

export default Loader;
