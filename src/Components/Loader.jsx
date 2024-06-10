const Loader = () => {
  return (
    <div className="container-loader">
      <div className="triangle-loader">
        <svg width="80px" height="80px" viewBox="-3 -4 39 39">
          <polygon
            fill="transparent"
            stroke="#35A29F"
            strokeWidth="2"
            points="16,0 32,32 0,32"
          ></polygon>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
