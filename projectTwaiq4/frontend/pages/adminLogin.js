import styles from "../styles/signIn.module.css";
import React, { useState } from "react";
import Router from "next/router";
//import Image from "next/image";
import axios from "axios";
import { Form, Card, Alert } from "react-bootstrap";
import { useRouter } from "next/router";

export default function signIn() {
    const router = useRouter();
  const [email, setEmail] = useState("nadamana@admin.com");
  const [passwordHash, setPasswordHash] = useState("12345678");

  // Alert
  const [wrong, setWrong] = useState(false);
  const [empty, setEmpty] = useState(false);
  // Alert

  function signIn() {
    if (email !== "nadamana@admin.com" && passwordHash !== "12345678") {
      axios
        .post("http://localhost:5060/auth/show/61d302b0f22f24558cb1f014", {
          email: "nadamana@admin.com",
          password: "12345678",
        })
        .then((response) => {
          if (response.data.message !== "data is incorrect") {
            //localStorage.setItem("token", JSON.stringify(response.data.token));
            setWrong(false);
            Router.push("/");
          } else {
            setEmpty(false);
            setWrong(true);
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      setEmpty(true);
      setWrong(false);
    }
  }

  return (
    <div className={styles.body}>
      
      <div className={styles.container}>
        <div className={styles.img}>
          <img src="https://tse4.mm.bing.net/th?id=OIP.WqmTOQTnUX15EzsOyeqpnQHaDY&pid=Api&P=0&w=385&h=176" />
        </div>
        <div className={styles.loginContent}>
          <Card>
            <Card.Body>
              <h3 className={styles.shadow}>أهلا بعودتك</h3>
              <Alert
                variant="danger"
                className={wrong ? styles.displayBlock : styles.displayNone}
              >
                البريد الالكتروني او كلمة المرور غير صحيحة
              </Alert>
              <Alert
                variant="danger"
                className={empty ? styles.displayBlock : styles.displayNone}
              >
                لا يمكن أن تكون الحقول فارغة
              </Alert>
              
              <hr />
              <Card.Text>
                <Form className={styles.form}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                      ايميلك الألكتروني<span>*</span>
                    </Form.Label>
                    <Form.Control
                   className={styles.input1}
                      type="email"
                      placeholder="Enter email"
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>
                      رمزك السري<span>*</span>
                    </Form.Label>
                    <Form.Control
                    className={styles.input2}
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPasswordHash(e.target.value)}
                    />
                  </Form.Group>

                  <div>
                    <button
                      className={styles.btn}
                      variant="primary"
                      value="دخول"
                      onClick={() => signIn()}
                    ></button>
                  </div>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
