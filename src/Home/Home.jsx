import { useState } from "react"




function Home1() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setloading] = useState(false);
    const [message, setmessage] = useState(false);

    const handleLogin = () => {
        e.preventDefault();
        if (username === "user" && password === "password") {
            localStorage.setItem("username", username);
            setTimeout(() => setloading(true), 7000);
        }else {
            setmessage(true);
        }
    }

    return (
        <div>

            {!message ? (
                <h2>Login Page</h2>
            ) : (
                <>
                 <h2>Login Page</h2>
                 <p>Invalid Username and Password</p>
                </>
               
            )}
            {!loading ? (
                <>
                    <form  onSubmit={handleLogin}>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        required></input>
                    <label>Password:</label>
                    <input type="text"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required>
                        </input>

                    <button type="submit">Submit</button>
                    </form>


                </>
            ) : (
                <h2>Welcome,{localStorage.getItem("username")}!</h2>

            )}
        </div>
    );

};

export default Home1;
