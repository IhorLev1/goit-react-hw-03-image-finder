import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import s from './Loader.module.css';

const PreLoader = () => {
  return (
    <div className={s.Loader}>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default PreLoader;
