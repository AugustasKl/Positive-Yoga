import React from 'react'
import { DUMMY_BULLETS } from '../../DUMMY_DATA/dummyBullets'
import BulletItem from './BulletItem'
import classes from './BulletSection.module.css'

const BulletSection =()=>{
    return(
        <React.Fragment>
        <div className={classes.list}>
        <h3>Is Positive Yoga right for me?</h3>
        <ul>
            {DUMMY_BULLETS.map((bullet)=>{
                return<BulletItem
                id={bullet.id}
                key={bullet.id}
                bullet={bullet.bulletpoint}
                />
            })}   
        </ul>
        </div>
        </React.Fragment>
    )
}

export default BulletSection