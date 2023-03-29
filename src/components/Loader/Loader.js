import { Bars } from 'react-loader-spinner';

const style = {
  display: 'flex',
  justifyContent: 'center',
};

function Loader() {
  return (
    <div style={style}>
      <Bars
        height="80"
        width="80"
        margin="0 auto"
        color="rgba(86, 96, 147, 70%)"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
