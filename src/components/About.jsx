import React, { useState } from "react";
import Inputs from "./Inputs";
import LoadingSpinner from "./Spinner";
import { toast } from "react-toastify";

import Logo from "../assets/logo.jpg";
import { IMaskInput } from "react-imask";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const changeName = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !phoneNumber || !lastName)
      return toast.warning("Iltimos barcha ma'lumotlaringizni kiriting");
    setLoading(true);
    const full_name = `${firstName} ${lastName}`;
    const phone_number = phoneNumber.replace(/\s/g, "").replace(/[()]/g, "");

    await fetch("https://resgistration.herokuapp.com/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        full_name,
        phone_number,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.message) toast.error(data.message);
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
        <img src={Logo} alt="" className="logo" draggable />
        <h2>
          MATH<span>PRO</span>
        </h2>

        <div className="text">
          <h3>Assalomu Aleykum !</h3>
          <ul>
            <li>
              <div className="number">1</div>
              <h4>
                <span>MATEMATIKA</span> fanini noldan o'rganib o'qishga
                kirmoqchimisiz ?
              </h4>
            </li>
            <li>
              <div className="number">2</div>
              <h4>
                Unda aynan SIZ uchun yangi guruhga <span>qabul</span> boshlandi
              </h4>
            </li>
            <li>
              <div className="number">3</div>
              <h4>
                Darslar shu yilning <span>14 Noyabr</span> sanasidan boshlanadi.
              </h4>
            </li>
            <li>
              <div className="number">4</div>
              <h4>
                Vaqtni boy bermay qabulga yoziling, albatta joylar soni{" "}
                <span>cheklangan</span>{" "}
              </h4>
            </li>
          </ul>
          <form className="form-input" onSubmit={handleSubmit}>
            <Inputs
              placeholder={`Ismingizni kiriting...`}
              values={firstName}
              onChange={changeName}
            />
            <Inputs
              placeholder={`Familiyangizni kiriting...`}
              values={lastName}
              onChange={changeLastName}
            />
            <div className="input-style">
              <IMaskInput
                onFocus={() => setPhoneNumber("+998")}
                overwrite
                mask={"+998 (00) 000 00 00"}
                value={phoneNumber}
                onAccept={(value, mask) => setPhoneNumber(value)}
                placeholder={`Telefon raqamingizni kiriting...`}
              />
            </div>
            <div className="btn-box">
              <button className="btn btn-danger">QABULGA YOZILISH</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default About;
