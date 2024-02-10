import styles from "../styles/dashboard.module.css"
import Image from 'next/image'
import profileHm from '../public/img/hm.png'
import profileNm from '../public/img/nm.png'
import profileZm from '../public/img/zm.png'
import profileMh from '../public/img/mh.png'

import React, { useState, useEffect } from "react";
function ContactArtist(){
    const [users, setUser] = useState([]);
  useEffect(async () => {
    const resUsers = await fetch(
      "http://localhost:5060/auth/show/" + "61d69773958a5000846ea37c"
    );
    const users = await resUsers.json();
    setUser(users);
  }, []);

  const [user, setUsers] = useState([]);
  useEffect(async () => {
    const resUser = await fetch(
      "http://localhost:5060/auth/show/" + "61d9b153f333e9865cad18b7"
    );
    const user = await resUser.json();
    setUsers(user);
  }, []);

  const [user1, setUsers1] = useState([]);
  useEffect(async () => {
    const resUser1 = await fetch(
      "http://localhost:5060/auth/show/" + "61d9f0dcd65e1a22489ac37c"
    );
    const user1 = await resUser1.json();
    setUsers1(user1);
  }, []);

  const [user2, setUsers2] = useState([]);
  useEffect(async () => {
    const resUser2 = await fetch(
      "http://localhost:5060/auth/show/" + "61d9f343d65e1a22489ac408"
    );
    const user2 = await resUser2.json();
    setUsers2(user2);
  }, []);
    return(
       <div className={styles.body1}>
       <div className="container">
  <div className={styles.row}>
    <div className={styles.col}>                       
      <div className={styles.cards1}>
        <div className={styles.cardBody}>
          <div className="media align-items-center"><Image className={styles.avatarXl} src={profileHm} width={160} height={160}/>
            <div className="media-body overflow-hidden">
              <h5 className="card-text mb-0">{users.fName}</h5>
              <p className="card-text text-uppercase text-muted">{users.email}</p>
              <p className="card-text">
                 
                {users.role}<br/><abbr title="Phone">P:  </abbr>{users.phone}
              </p>
            </div>
          </div><a href="#" className={styles.tileLink}></a>
        </div>
      </div>
    </div>
    <div className={styles.col}>                       
      <div className={styles.cards1}>
        <div className={styles.cardBody}>
          <div className="media align-items-center"><Image className={styles.avatarXl} src={profileNm} width={160} height={160}/>
            <div className="media-body overflow-hidden">
              <h5 className="card-text mb-0">{user.fName}</h5>
              <input type="image">
               
              </input> <label  ></label>
              <p className="card-text text-uppercase text-muted">{user.email}</p>
              <p className="card-text">
                 
                {user.role}<br/><abbr title="Phone">P:  </abbr>{user.phone}
              </p>
            </div>
          </div><a href="#" className={styles.tileLink}></a>
        </div>
      </div>
    </div>
    <div className={styles.col}>                       
      <div className={styles.cards1}>
        <div className={styles.cardBody}>
          <div className="media align-items-center"><Image className={styles.avatarXl} src={profileZm} width={160} height={160}/>
            <div className="media-body overflow-hidden">
              <h5 className="card-text mb-0">{user1.fName}</h5>
              <p className="card-text text-uppercase text-muted">{user1.email}</p>
              <p className="card-text">
                 
              {user1.role}<br/><abbr title="Phone">P:  </abbr>{user1.phone}
              </p>
            </div>
          </div><a href="#" className={styles.tileLink}></a>
        </div>
      </div>
    </div>
    <div className={styles.col}>                       
      <div className={styles.cards1}>
        <div className={styles.cardBody}>
          <div className="media align-items-center"><Image className={styles.avatarXl} src={profileMh} width={160} height={160}/>
            <div className="media-body overflow-hidden">
              <h5 className="card-text mb-0">{user2.fName}</h5>
              <p className="card-text text-uppercase text-muted">{user2.email}</p>
              <p className="card-text">
                 
                <br/><abbr title="Phone">P:  </abbr>{user2.phone}
              </p>
            </div>
          </div><a href="#" className={styles.tileLink}></a>
        </div>
      </div>
    </div>
    
    </div>
  </div>
</div>
      
    )
}
export default ContactArtist