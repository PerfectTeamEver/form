import Logo from "../assets/logo.jpg";

const Success = () => {
  return (
    <div className="success_page">
      <img src={Logo} alt="" className="logo" draggable />
      <section className="block-main">
        <h2>
          MATH<span>PRO</span>
        </h2>

        <div className="text">
          <h4>
            Arizangiz qabul qilindi. <br />
            Yaqin fursatlarda operatorimiz siz bilan bog'lanishadi.
          </h4>

          <h3>
            E'TIBORINGIZ UCHUN <br />
            <span className="red">RAHMAT</span>!
          </h3>
          <h3>Kuningiz Hayrli o'tsin!</h3>
        </div>
      </section>
    </div>
  );
};

export default Success;
