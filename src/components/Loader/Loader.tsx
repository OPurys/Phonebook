import { CirclesWithBar } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <CirclesWithBar
        height="100"
        width="100"
        color="#96c93d"
        outerCircleColor="#96c93d"
        innerCircleColor="#96c93d"
        barColor="#96c93d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
