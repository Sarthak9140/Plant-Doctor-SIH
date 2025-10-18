// import React, { useState } from "react";
// import "./AuthPage.scss";
// import LoginForm from "./LoginForm";
// import RegisterForm from "./RegisterForm";

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="auth-container">
//       <div className="auth-tabs">
//         <div
//           className={`tab ${isLogin ? "active" : ""}`}
//           onClick={() => setIsLogin(true)}
//         >
//           Login
//         </div>
//         <div
//           className={`tab ${!isLogin ? "active" : ""}`}
//           onClick={() => setIsLogin(false)}
//         >
//           Register
//         </div>
//       </div>

//       <div className="auth-form">
//         {isLogin ? (
//           <LoginForm switchToRegister={() => setIsLogin(false)} />
//         ) : (
//           <RegisterForm switchToLogin={() => setIsLogin(true)} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default AuthPage;
import React, { useState } from "react";
import "./AuthPage.scss";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-tabs">
          <div
            className={`tab ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </div>
          <div
            className={`tab ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </div>
        </div>

        <div className="auth-form">
          {isLogin ? (
            <LoginForm switchToRegister={() => setIsLogin(false)} />
          ) : (
            <RegisterForm switchToLogin={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
