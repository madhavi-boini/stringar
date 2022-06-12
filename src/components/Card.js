import React from 'react'
import styles from '../styles/games.module.css'

function Card(props) {
    let games=props.gms;
    let width={width:props.width};
    let btnfloat={float: "right"};

  return (
    <>
    <div className="card-deck">
    {games.map((record, i) =>
      <div className={styles.card} style={width}  key={i}>
      <img className={styles.img} src={record.img} alt={record.name}/>
        <div className="card-body row">
        <h5 className="card-title col-8">{record.title}</h5> <div className='col-4'><button className='btn btn-primary' style={btnfloat}>Play Now!</button></div>
        </div>
      </div> )}
      </div>
    </>
  )
    }

export default Card