import React, { useState } from "react";

//Create Component PrivatePage
function PrivatePage(props) {
  return (
    <div>
      <h1>Welovme</h1>
      <button onClick={props.logout}>Logout</button>
    </div>
  );
}

//Create Component GuestPage
function GuestPage(props) {
  return (
    <div>
      <h1>GuestPage Login</h1>
      <button onClick={props.login}>Please Sign </button>
    </div>
  );
}

function ConditionRenderin() {
  //init State
  const [isLogin, setIsLogin] = useState(false);

  return (
    // Code Inside div
    <div>
      {/* conditional logic rendering */}

      {isLogin ? <PrivatePage logout={() => setIsLogin(!isLogin)} /> : <GuestPage login={() => setIsLogin(!isLogin)} />}
    </div>
  );
}

export default ConditionRenderin;
