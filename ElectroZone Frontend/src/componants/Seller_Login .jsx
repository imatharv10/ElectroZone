import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services/seller";
function Seller_Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginfailed,setLoginFailed] = useState(false)
  const navigate = useNavigate();

  const onLogin = async () => {
    if (email.length == 0) {
      toast.warning("Email is mandatory");
    } else if (password.length == 0) {
      toast.warning("Password is mandatory");
    }else{
      try {
          const result = await login(email,password)
        if(result.status === 200){
          sessionStorage.setItem('sellerId',result.data['id'])
          console.log(result)
          navigate("/Seller-Dashboard");
        }else if(result.data = "Invalid email or password"){
          toast.error("Invalid email or password")
        }
        else{
          setLoginFailed(true)
        }
      } catch (error) {
        toast.error("Invalid email or password")
      }
    }

    
  };
  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center bg-dark text-white">
                  <h3 className="mb-5">Login</h3>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="selleremail"
                      className="form-control form-control-lg"
                      placeholder="Enter Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="Enter Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {/* <!-- Checkbox --> */}
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label
                      className="form-check-label"
                      for="form1Example3"
                      style={{ marginLeft: 2 }}
                    >
                      {" "}
                      Remember password{" "}
                    </label>
                  </div>

                  <div>
                    <p>
                      Not Registered Yet ?{" "}
                      <Link to={"/Seller-Register"}>Register Here</Link>
                    </p>
                  </div>

                  {
                    loginfailed && 
                    <div>
                      <p>
                        Invalid Email or Password
                      </p>
                  </div>
                  }

                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-success btn-lg btn-block"
                    type="submit"
                    onClick={onLogin}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Seller_Login;
