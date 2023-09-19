import "./home-style.css";

const home = () => {
  const buttonList = ["Edit profile", "Change Photo", "Settings"];
  const infoList = [
    { label: 'School', value: 'Homai School'},
    { label: 'DoB', value: '25 June 1986'},
    { label: 'Contact No', value: '0231321321'},
    { label: 'Email Address', value: 'YeS@GMAIL.COM'},
  ];
  return (
    <div className="profile-container">
      <div className="profile-column">
        <img className="picture" src="fdasfdas" alt=""  />
        <div className="picture-buttons">
            {buttonList.map((strings) => {
              return <button className="custom-button">{strings}</button>;
            })}
        </div>
      </div>
      <div className="details-column">
          <h1>Jasmina Salvador</h1>
          {infoList.map(({ label, value}) => {
            return <div className="details-label">{label}<p className="details-value">{value}</p></div>
          } )}
      </div>
    </div>
  )
}

export default home;
