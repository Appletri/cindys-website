import './FeaturedWorks.css';

function WorkRight(props) {
  return (
    <div className='work'>
      <div className='work-img-left'>
        <img src = {props.image} alt = ""></img>
      </div>
      <div className='work-text-right'>
        <h3>{props.name}</h3>
        <p>{props.about}</p>
        <div className='arrow'></div>
      </div>
    </div>
  );
}

function WorkLeft(props) {
  return (
    <div className='work'>
      <div className='work-text-left'>
        <h3>{props.name}</h3>
        <p>{props.about}</p>
        <div className='arrow'></div>
      </div>
      <div className='work-img-right'>
        <img src = {props.image} alt = ""></img>
      </div>
    </div>
  );
}

export {WorkLeft, WorkRight};