import React, { useState } from "react";
import Inputs from "./Inputs";
import LoadingSpinner from "./Spinner";
import { toast } from "react-toastify";

import { IMaskInput } from "react-imask";
import { useNavigate } from "react-router-dom";
import Select from "./Select";
import { addresses, grades } from "../assets/data/data";

function About() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const myDataObj = Object.fromEntries(data);
    Object.keys(myDataObj).forEach(
      (key) => (myDataObj[key] = myDataObj[key].trim())
    );

    const { ism, familiya, maktab, yashash_joyi, sinf } =
      Object.fromEntries(data);

    if (!ism || !familiya || !maktab || !yashash_joyi || !sinf)
      return toast.warning("Iltimos barcha ma'lumotlaringizni kiriting");
    if (phoneNumber.length !== 19) {
      setPhoneNumber("");
      return toast.warning("Nomeringizni to'liq kiriting");
    }

    setLoading(true);
    const phone_number = phoneNumber.replace(/\s/g, "").replace(/[()]/g, "");

    await fetch("https://resgistration.herokuapp.com/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        ism,
        familiya,
        maktab: Number(maktab),
        yashash_joyi,
        sinf: Number(sinf),
        phone_number,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data?.success) toast.error(data.message);
        else {
          toast("Ma'lumotlaringiz muvofaqiyatli jo'natildi");
          navigate("/success");
        }
      })
      .catch((error) => {
        toast(`${error}`);
      });
    setLoading(false);
  };
  return (
    <>
      <LoadingSpinner isLoading={loading} />
      <section className="block-main">
        <div className="text">
          <h2>
            <strong className="red">Bir Million Matematik olimpiadasi</strong>
          </h2>
          <h3>Assalomu Aleykum !</h3>
          <h3>Ro’yxatdan o’tish bo’limiga xush kelibsiz</h3>

          <form className="form-input" onSubmit={handleSubmit}>
            <Inputs placeholder={`Ismingiz`} name="ism" />
            <Inputs placeholder={`Familiyangiz`} name="familiya" />
            <Select
              placeholder={`Yashash joyingiz`}
              name="yashash_joyi"
              options={addresses}
            />
            <Inputs
              placeholder={`Maktabingiz raqami`}
              name="maktab"
              type="number"
            />
            <Select
              name="sinf"
              placeholder={`Sinfingiz`}
              options={grades}
              postFix=" sinf"
            />
            <div className="input-style">
              <IMaskInput
                onFocus={() => setPhoneNumber("+998")}
                overwrite
                mask={"+998 (00) 000 00 00"}
                value={phoneNumber}
                onAccept={(value, mask) => setPhoneNumber(value)}
                placeholder={`Telefon raqamingiz`}
              />
            </div>
            <div className="btn-box">
              <button className="btn btn-danger">Ro’yxatdan o’tish</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default About;
