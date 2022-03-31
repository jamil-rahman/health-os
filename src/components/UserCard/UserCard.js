import "./usercard.css";


export default function UserCard({initials, fullName, numberOfOrders}) {

  return (
    <div className="user-card">
    <div className="card mb-2">
      <div className="row g-0 card-container">
        <div className="img-container col-md-4">
        <div id="name">
          {initials.toLocaleUpperCase()}
        </div>
        </div>
        <div className="col-md-6 mx-3 my-3">
          <h2 className="name"> 
          {fullName}
            </h2>
            <p className="my-4">
              Order : {numberOfOrders}
            </p>
        </div>
      </div>
    </div>
    </div>
  );
}
